<?php

namespace App\Repositories\Contracts;

interface ProductRepositoryInterface
{
    public function getProducts();

    public function createProduct(array $data);

    public function getProduct(string $id);

    public function updateProduct(string $id, array $data);

    public function deleteProduct(string $id);
}
