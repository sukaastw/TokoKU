<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Category extends Model
{
    // Jika primary key bukan 'id', tentukan di sini
    protected $primaryKey = 'category_id';

    // Kolom yang boleh diisi secara massal
    protected $fillable = [
        'category_id'
    ];

    /**
     * Relasi ke tabel products.
     * Satu Category memiliki banyak Product.
     */
    public function products()
    {
        // Format: hasMany(RelatedModel::class, foreign_key, local_key)
        return $this->hasMany(Product::class, 'category_id');
    }
}
