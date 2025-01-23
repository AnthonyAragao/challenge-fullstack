import AppLayout from '@/Layouts/AppLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import TextInput from '@/Components/UI/Inputs/TextInput';
import NumberInput from '@/Components/UI/Inputs/NumberInput';
import TextAreaInput from '@/Components/UI/Inputs/TextAreaInput';
import CheckboxInput from '@/Components/UI/Inputs/CheckboxInput';
import SubmitButton from '@/Components/UI/Buttons/SubmitButton';

export default function Form({ product, viewOnly = false }) {
    const isEdit = (product ?? false) && !viewOnly;

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
            <Head title={
                viewOnly ? 'View Product' : isEdit ? 'Edit Product' : 'Create Product'
            } />

            <div className='flex items-center'>
                <Link href="/products">
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
                <div className='flex gap-4'>
                    <TextInput
                        id='name'
                        label='Name'
                        value={form.data.name}
                        placeholder={viewOnly ? '' : 'Product name'}
                        onChange={(e) => form.setData('name', e.target.value)}
                        disabled={viewOnly}
                        error={form.errors.name}
                        className='w-1/2'
                    />

                    <NumberInput
                        id='price'
                        label='Price'
                        value={form.data.price}
                        placeholder={viewOnly ? '' : 'Product price'}
                        onChange={(e) => form.setData('price', e.target.value)}
                        disabled={viewOnly}
                        error={form.errors.price}
                        className='w-1/4'
                    />

                    <NumberInput
                        id='quantity'
                        label='Quantity'
                        value={form.data.quantity}
                        placeholder={viewOnly ? '' : 'Product quantity'}
                        onChange={(e) => form.setData('quantity', e.target.value)}
                        disabled={viewOnly}
                        error={form.errors.quantity}
                        className='w-1/4'
                    />
                </div>

                <TextAreaInput
                    id='description'
                    label='Description'
                    value={form.data.description}
                    placeholder={viewOnly ? '' : 'Product description'}
                    onChange={(e) => form.setData('description', e.target.value)}
                    disabled={viewOnly}
                    error={form.errors.description}
                    className='mt-4'
                />

                <CheckboxInput
                    id="active"
                    label="Active"
                    checked={form.data.active}
                    onChange={(e) => form.setData('active', e.target.checked)}
                    disabled={viewOnly}
                    error={form.errors.active}
                />

                {!viewOnly && (
                    <SubmitButton
                        label={isEdit ? 'Update Product' : 'Create Product'}
                    ></SubmitButton>
                )}
            </form>
        </AppLayout>
    );
}
