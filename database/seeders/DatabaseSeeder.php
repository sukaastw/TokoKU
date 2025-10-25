<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        if (!User::where('email', 'user@example.com')->exists()) {
            User::factory()->create([
                'name' => 'Test User',
                'email' => 'user@example.com',
            ]);
        }

        // Seeder lainnya
        $this->call([
            CategorySeeder::class,
            ProductSeeder::class,
        ]);
    }
}