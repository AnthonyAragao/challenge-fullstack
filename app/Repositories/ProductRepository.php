<?php

namespace App\Repositories;

use App\Models\Product;
use App\Repositories\Contracts\ProductRepositoryInterface;

class ProductRepository implements ProductRepositoryInterface
{
    public  function __construct(
        private Product $products
    ){}

    public function getProducts()
    {
        return $this->products->all();
    }

    public function createProduct(array $data)
    {
        return $this->products->create($data);
    }

    public function getProduct(string $id)
    {
        return $this->products->findOrFail($id);
    }

    public function updateProduct(string $id, array $data)
    {
        $product = $this->getProduct($id);
        $product->update($data);
        return $product;
    }

    public function deleteProduct(string $id)
    {
        $product = $this->getProduct($id);
        $product->delete();
    }
}
