<?php

namespace App\Models;

use App\Models\Reference;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Ignite\Crud\Models\Traits\HasMedia;
use Ignite\Crud\Models\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia as HasMediaContract;

class Solution extends Model implements HasMediaContract, TranslatableContract
{
    use HasMedia, Translatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'excerpt', 'active', 'text', 'list', 'svg'];

    /**
     * The attributes to be translated.
     *
     * @var array
     */
    public $translatedAttributes = ['title', 'excerpt', 'text', 'list', 'slug'];

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

    protected $casts = [
        'active' => 'boolean',
    ];

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

    public function scopeActive($query)
    {
        return $query->where('active', true);
    }
}
