<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Product extends Model
{
    // Jika primary key bukan 'id', tentukan di sini
    protected $primaryKey = 'product_id';

    // Kolom yang boleh diisi secara massal
    protected $fillable = [
        'product_id',
        'name',
        'description',
        'price',
        'img',
        'stock',
        'slug',
        'category_id',
    ];

    /**
     * Relasi ke tabel categories.
     * Product milik satu Category.
     */
    public function category()
    {
        // Jika categories pakai primary key 'category_id', tambahkan ownerKey
        return $this->belongsTo(Category::class, 'category_id', 'category_id');
    }

    /**
     * Accessor untuk URL gambar agar bisa dipakai di React.
     */
    public function getImgUrlAttribute()
    {
        return asset('storage/' . $this->img);
    }
}