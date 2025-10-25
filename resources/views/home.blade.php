<head>
    <title>Daftar Produk</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        
        header {
            background: #2c3e50;
            color: white;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        header h1 {
            margin: 0;
            font-size: 24px;
            letter-spacing: 1px;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-weight: bold;
            transition: color 0.2s;
        }
        nav a:hover {
            color: #f39c12;
        }

        /* === PRODUK === */
        .product-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            padding: 30px;
        }
        .product-card {
            background: #fff;
            border-radius: 10px;
            padding: 15px;
            width: 220px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s ease;
        }
        .product-card:hover {
            transform: scale(1.05);
        }
        .product-card img {
            width: 100%;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        .category-badge {
            background: #3498db;
            color: white;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            display: inline-block;
            margin-bottom: 8px;
        }
        .price {
            font-weight: bold;
            color: #27ae60;
        }
    </style>
</head>
<admin-layout>

    <header>
        <h1>AdminToko</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/products">Produk</a>
            <a href="/categories">Kategori</a>
            <a href="/about">Tentang</a>
        </nav>
    </header>

    {{-- KONTEN PRODUK --}}
    <div class="product-container">
        @foreach ($products as $product)
            <div class="product-card">
                {{-- Kategori --}}
                @if ($product->category)
                    <span class="category-badge">
                        {{ $product->category->category }}
                    </span>
                @else
                    <span class="category-badge" style="background:#aaa;">
                        Tidak ada kategori
                    </span>
                @endif

                {{-- Nama & Deskripsi --}}
                <h3>{{ $product->name }}</h3>
                <p>{{ $product->description }}</p>

                {{-- Harga --}}
                <p class="price">Rp{{ number_format($product->price, 0, ',', '.') }}</p>
            </div>
        @endforeach
    </div>
</admin-layout>