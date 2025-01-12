<?php

namespace App\Http\Controllers\Api;

use App\Services\ProductService;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function __construct(
        private ProductService $productService,
    ){}

    public function index()
    {
        $products = $this->productService->getProducts();
        return response()->json($products, 200);
    }
}
