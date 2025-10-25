<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('product_id'); // Primary key
            $table->string('name', 150);
            $table->text('description')->nullable();
            $table->unsignedBigInteger('category_id'); // Foreign key
            $table->decimal('price', 12, 2);
            $table->string('img')->nullable();
            $table->integer('stock')->default(0);
            $table->string('slug')->unique();
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('category_id')
                  ->references('category_id')
                  ->on('categories')
                  ->onDelete('cascade');
        });
    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
