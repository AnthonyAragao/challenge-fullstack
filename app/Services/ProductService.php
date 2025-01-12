<?php

namespace App\Services;

use App\Repositories\Contracts\ProductRepositoryInterface;

class ProductService
{
    public function __construct(
        private ProductRepositoryInterface $productRepository,
    ){}

    public function getProducts()
    {
        return $this->productRepository->getProducts();
    }

    public function createProduct(array $data)
    {
        $this->productRepository->createProduct($data);
    }

    public function getProduct(string $id)
    {
        return $this->productRepository->getProduct($id);
    }

    public function updateProduct(string $id, array $data)
    {
        $this->productRepository->updateProduct($id, $data);
    }

    public function deleteProduct(string $id)
    {
        $this->productRepository->deleteProduct($id);
    }
}
