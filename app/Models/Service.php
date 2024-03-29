<?php

namespace App\Models;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Ignite\Crud\Models\Traits\HasMedia;
use Ignite\Crud\Models\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;
use Litstack\Meta\Metaable;
use Litstack\Meta\Traits\HasMeta;
use Spatie\MediaLibrary\HasMedia as HasMediaContract;

class Service extends Model implements HasMediaContract, TranslatableContract, Metaable
{
    use HasMedia, Translatable, HasMeta;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'active', 'text', 'excerpt', 'list_title', 'list', 'svg', 'team_member_id'];

    /**
     * The attributes to be translated.
     *
     * @var array
     */
    public $translatedAttributes = ['title', 'excerpt', 'text', 'list_title', 'list', 'slug'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['image'];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['media', 'translations'];

    /**
     * Image attribute.
     *
     * @return \Lit\Crud\Models\Media
     */
    public function getImageAttribute()
    {
        return $this->getMedia('image')->first();
    }

    public function references()
    {
        return $this->manyRelation(Reference::class, 'references');
    }

    public function team_member()
    {
        return $this->belongsTo(TeamMember::class, 'team_member_id');
    }
}
