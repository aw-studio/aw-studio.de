<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia as HasMediaContract;
use Ignite\Crud\Models\Traits\HasMedia;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Ignite\Crud\Models\Traits\Translatable;

class Technology extends Model implements HasMediaContract, TranslatableContract
{
    use HasMedia, Translatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name','text','url','version'];
    
    /**
     * The attributes to be translated.
     *
     * @var array
     */
    public $translatedAttributes = ['name','text','url'];

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
