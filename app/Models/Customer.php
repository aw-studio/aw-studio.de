<?php

namespace App\Models;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Ignite\Crud\Models\Traits\HasMedia;
use Ignite\Crud\Models\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia as HasMediaContract;

class Customer extends Model implements HasMediaContract, TranslatableContract
{
    use HasMedia, Translatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'suffix', 'category_id', 'url'];

    /**
     * The attributes to be translated.
     *
     * @var array
     */
    public $translatedAttributes = ['name', 'suffix'];

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

    const RESEARCH = 1;
    const INDUSTRY = 2;
    const CULTURE = 3;

    /**
     * Image attribute.
     *
     * @return \Lit\Crud\Models\Media
     */
    public function getImageAttribute()
    {
        return $this->getMedia('image')->first();
    }

    public function scopeResearch($query)
    {
        return $query->where('category_id', self::RESEARCH);
    }

    public function scopeIndustry($query)
    {
        return $query->where('category_id', self::INDUSTRY);
    }

    public function scopeCulture($query)
    {
        return $query->where('category_id', self::CULTURE);
    }
}
