<?php

namespace App\Models;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Ignite\Crud\Models\Traits\HasMedia;
use Ignite\Crud\Models\Traits\Translatable;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia as HasMediaContract;

class TeamMember extends Model implements HasMediaContract, TranslatableContract
{
    use HasMedia, Translatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'position', 'profession'];

    /**
     * The attributes to be translated.
     *
     * @var array
     */
    public $translatedAttributes = ['position', 'profession'];

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
}
