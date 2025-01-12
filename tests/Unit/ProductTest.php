<?php

namespace Tests\Unit;

use App\Models\Product;
use App\Repositories\ProductRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    protected $productRepository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->productRepository = new ProductRepository(
            new Product()
        );
    }

    public function test_it_stores_a_product_successfully()
    {
        $product = Product::factory()->make()->toArray();
        $createdProduct = $this->productRepository->createProduct($product);

        $this->assertDatabaseHas('products', $product);
        $this->assertEquals($product['name'], $createdProduct->name);
        $this->assertEquals($product['description'], $createdProduct->description);
        $this->assertEquals($product['price'], $createdProduct->price);
        $this->assertEquals($product['quantity'], $createdProduct->quantity);
    }

    public function test_it_fails_to_store_a_product_with_invalid_data()
    {
        $product = Product::factory()->make(['price' => 'invalid'])->toArray();

        try {
            $this->productRepository->createProduct($product);
            $this->assertTrue(false);
        } catch (\Exception $e) {
            $this->assertDatabaseMissing('products', $product);
            $this->assertTrue(true);
        }
    }
}
