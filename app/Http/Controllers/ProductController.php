<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Services\ProductService;
use App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    public function __construct(
        private ProductService $productService,
    ){}

    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => $this->productService->getProducts()
        ]);
    }

    public function create()
    {
        return Inertia::render('Products/Form');
    }

    public function store(ProductRequest $request)
    {
        $this->productService->createProduct($request->all());
        return to_route('products.index')
            ->with('success', 'Product created successfully');
    }

    public function show(string $id)
    {
        return Inertia::render('Products/Form', [
            'product' => $this->productService->getProduct($id),
            'viewOnly' => true,
        ]);
    }

    public function edit(string $id)
    {
        return Inertia::render('Products/Form', [
            'product' => $this->productService->getProduct($id)
        ]);
    }

    public function update(ProductRequest $request, string $id)
    {
        $this->productService->updateProduct($id, $request->all());
        return to_route('products.index')
            ->with('success', 'Product updated successfully');
    }

    public function destroy(string $id)
    {
        $this->productService->deleteProduct($id);
        return to_route('products.index')
            ->with('success', 'Product deleted successfully');
    }
}
