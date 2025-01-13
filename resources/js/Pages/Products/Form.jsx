import AppLayout from '@/Layouts/AppLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Form({ product, viewOnly = false }) {
    const isEdit = !!product && !viewOnly;

    const form = useForm({
        name: product?.name || '',
        price: product?.price || '',
        description: product?.description || '',
        quantity: product?.quantity || '',
        active: product?.active || '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        isEdit
            ? form.put(`/products/${product.encrypted_id}`)
            : form.post('/products');
    }

    return (
        <AppLayout>
            <Head title={viewOnly ? 'View Product' : isEdit ? 'Edit Product' : 'Create Product'} />

            <div className='flex items-center'>
                <Link
                    href="/products"
                >
                    <i className="fas fa-arrow-left me-2 text-gray-500 hover:text-gray-700 cursor-pointer text-2xl"></i>
                </Link>

                <h1 className='text-2xl font-bold text-gray-700'>
                    {viewOnly ? 'View' : isEdit ? 'Edit' : 'Create'} Product
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className='mt-8'
            >
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={form.data.name}
                        onChange={(e) => form.setData('name', e.target.value)}
                        disabled={viewOnly}
                    />
                    {form.errors.name && !viewOnly && <div>{form.errors.name}</div>}
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        value={form.data.price}
                        onChange={(e) => form.setData('price', e.target.value)}
                        disabled={viewOnly}
                    />
                    {form.errors.price && !viewOnly && <div>{form.errors.price}</div>}
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={form.data.description}
                        onChange={(e) => form.setData('description', e.target.value)}
                        disabled={viewOnly}
                    />
                    {form.errors.description && !viewOnly && <div>{form.errors.description}</div>}
                </div>

                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        value={form.data.quantity}
                        onChange={(e) => form.setData('quantity', e.target.value)}
                        disabled={viewOnly}
                    />
                    {form.errors.quantity && !viewOnly && <div>{form.errors.quantity}</div>}
                </div>

                <div>
                    <label htmlFor="active">Active</label>
                    <input
                        type="checkbox"
                        id="active"
                        checked={form.data.active}
                        onChange={(e) => form.setData('active', e.target.checked)}
                        disabled={viewOnly}
                    />
                    {form.errors.active && !viewOnly && <div>{form.errors.active}</div>}
                </div>


                {!viewOnly && (
                    <button
                        type="submit"
                        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-sm font-semibold mt-4'
                    >
                        {isEdit ? 'Update' : 'Create'} Product
                    </button>
                )}
            </form>
        </AppLayout>
    );
}
