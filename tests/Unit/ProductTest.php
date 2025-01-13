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

        $this->assertDatabaseHas('products', [
            'name' => $product['name'],
            'description' => $product['description'],
            'price' => $product['price'],
            'quantity' => $product['quantity'],
            'active' => $product['active'],
        ]);

        $this->assertEquals($product['name'], $createdProduct->name);
        $this->assertEquals($product['description'], $createdProduct->description);
        $this->assertEquals($product['price'], $createdProduct->price);
        $this->assertEquals($product['quantity'], $createdProduct->quantity);
        $this->assertEquals($product['active'], $createdProduct->active);
    }

    public function test_it_fails_to_store_a_product_with_invalid_data()
    {
        $product = Product::factory()->make(['price' => 'invalid'])->toArray();

        try {
            $this->productRepository->createProduct($product);
            $this->fail('Expected exception not thrown');
        } catch (\Exception $exception) {
            $this->assertDatabaseMissing('products', [
                'name' => $product['name'],
            ]);
        }
    }
}
