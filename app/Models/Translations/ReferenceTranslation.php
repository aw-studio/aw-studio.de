<?php

namespace App\Models\Translations;

use Ignite\Crud\Models\Traits\Sluggable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class ReferenceTranslation extends Model
{
    use Sluggable;

    /**
     * whether the model uses the default timestamp columns.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Fillable attributes.
     *
     * @var array
     */
    protected $fillable = ['title', 'excerpt', 'subtitle', 'buzzwords', 'text', 'link_text', 'slug'];

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title',
            ],
        ];
    }

    /**
     * Unique by title + locale.
     *
     * @param  Builder  $query
     * @param  mixed  $model
     * @param  mixed  $attribute
     * @param  array  $config
     * @param  string  $slug
     * @return void
     */
    public function scopeWithUniqueSlugConstraints(Builder $query, $model, $attribute, $config, $slug)
    {
        $query->where('locale', $model->locale);
    }
}
