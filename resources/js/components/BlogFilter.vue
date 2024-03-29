<template>
    <div class="col-span-12">
        <section v-if="categories.length > 0" class="flex justify-end mb-5">
            <div class="w-full">
                <div
                    class="relative z-20 flex flex-col items-start justify-center w-full py-2"
                >
                    <div class="flex items-center justify-end w-full mb-5">
                        <div class="flex flex-wrap mr-4">
                            <div
                                class="flex items-center px-4 py-px ml-2 text-xs tracking-widest text-white uppercase bg-black rounded-full whitespace-nowrap"
                                v-for="tag in selected"
                                :key="tag.id"
                            >
                                {{ tag.title }}
                                <button
                                    class="flex items-center justify-center w-3 h-8 mr-2 text-white cursor-pointer"
                                    @click="remove(tag)"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 12 12"
                                        width="10"
                                        height="10"
                                        preserveAspectRatio="xMinYMin"
                                        class="fill-white icon__icon"
                                    >
                                        <path
                                            d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            @click="clickFilter"
                            ref="button"
                            class="flex items-center justify-end cursor-pointer"
                        >
                            <div>Filter</div>
                            <div
                                class="relative flex items-center justify-center w-6 h-6 text-sm cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-5 -10 24 24"
                                    width="14"
                                    height="14"
                                    preserveAspectRatio="xMinYMin"
                                    class="fill-current icon__icon"
                                >
                                    <path
                                        d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <transition name="fade">
                        <div
                            v-if="filterActive"
                            v-closable="{
                                exclude: ['button'],
                                handler: 'onClose',
                            }"
                            class="absolute top-0 right-0 px-3 py-2 text-white bg-black rounded shadow filterTranslation"
                        >
                            <button
                                v-for="tag in categories"
                                :key="tag.id"
                                @click="add(tag)"
                                class="flex flex-col w-full px-5 py-2 my-1 cursor-pointer"
                                :class="{ clicked: selected.includes(tag) }"
                            >
                                {{ tag.title }}
                            </button>
                        </div>
                    </transition>
                </div>
            </div>
        </section>
        <!-- <section v-if="categories.length > 0" class="pt-20"></section> -->
        <section class="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div v-for="post in posts" :key="post.id" class="w-full">
                <div v-if="post.active" class="mb-8">
                    <a
                        :href="`blog/${post.slug}`"
                        class="relative block mb-2 lg:mb-6 hover:scale-[1.02] active:scale-100 transition-all duration-300"
                    >
                        <div class="relative">
                            <div class="absolute">
                                <div
                                    v-if="post.tags.length > 0 && post.image"
                                    class="absolute z-10 px-4 py-2 text-xs tracking-widest text-white uppercase bg-black rounded-full left-5 top-5 whitespace-nowrap"
                                >
                                    {{ post.tags[0].title }}
                                </div>
                            </div>
                            <lit-image
                                v-if="post.image"
                                :image="post.image"
                                classes="w-full z-10 mb-4 lg:mb-8 rounded-md"
                            />
                        </div>
                        <h2
                            v-if="post.h1"
                            v-html="post.h1.replace('<p>', '')"
                            class="text-xl font-normal md:text-2xl -mb-4 pr-8"
                        />
                        <div v-html="post.excerpt" class="text-lg pr-8" />
                    </a>
                    <!-- <a
                        v-if="locale == 'de'"
                        id="go-to-post"
                        class="aw-link"
                        :href="`blog/${post.slug}`"
                        >Beitrag lesen</a
                    >
                    <a v-else class="aw-link" :href="`blog/${post.slug}`"
                        >Read post</a
                    > -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Events",
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            selected: [],
            posts: null,
            filterActive: false,
            clicked: false,
        };
    },
    created() {
        this.submit();
    },
    methods: {
        async submit() {
            const { data } = await axios.post(`/api/blog`, {
                tag_ids: _.map(this.selected, (tag) => {
                    return tag.id;
                }),
            });
            this.posts = data;
        },
        add(d) {
            if (!this.selected.includes(d)) {
                this.selected.push(d);
                this.submit();
                this.clicked = true;
            } else {
                this.remove(d);
            }
        },
        remove(d) {
            this.clicked = false;
            let index = this.selected.indexOf(d);
            this.selected.splice(index, 1);
            this.submit();
        },
        clickFilter() {
            this.filterActive = !this.filterActive;
        },
        onClose() {
            this.filterActive = false;
        },
    },
    computed: {
        locale() {
            return window.location.pathname.split("/")[1];
        },
    },
};
</script>

<style>
.clicked {
    @apply bg-gray-400;
}
.filterTranslation {
    transform: translateY(45px);
    width: 100%;
}
.blog-template {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2.5rem;
}
@media (min-width: 768px) {
    .filterTranslation {
        width: 50%;
    }
}
@media (min-width: 1024px) {
    .filterTranslation {
        width: 33.33333%;
    }
    .blog-template {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media (min-width: 1280px) {
    .filterTranslation {
        width: 25%;
    }
}
</style>
