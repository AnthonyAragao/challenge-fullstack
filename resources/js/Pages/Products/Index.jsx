import AppLayout from '@/Layouts/AppLayout';
import { Link, Head, router, usePage } from '@inertiajs/react';

export default function Index({ products }) {
    const { auth } = usePage().props;


    const handelDelete = (id) => {
        if (!auth?.user) {
            alert('You need to be logged in to delete a product.');
            return;
        }

        router.delete(`/products/${id}`, {
            onSuccess: () => alert('Product deleted successfully.'),
            onError: (errors) => console.error(errors),
        });
    }

    return (
        <AppLayout>
            <Head title="Products" />

            <div className='flex justify-between items-center'>
                <h1  className='text-2xl font-bold text-gray-700'>Products</h1>
                <Link
                    href="/products/create"
                    className='text-sm font-semibold bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600  transition duration-300'
                >
                    Create New Product
                </Link>
            </div>

            <table className='w-full mt-8 text-left'>
                <thead className='text-sm uppercase border-t border-b border-gray-200 text-gray-600'>
                    <tr>
                        <th className='px-6 py-3'>Name</th>
                        <th className='px-6 py-3'>Price</th>
                        <th className='px-6 py-3'>Status</th>
                        <th className='px-6 py-3'>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr
                            key={product.id}
                            className='border-b hover:bg-gray-50 font-medium text-gray-600'
                        >
                            <td className='px-6 py-4'>{product.name}</td>
                            <td className='px-6 py-4'>{product.price}</td>
                            <td className='px-6 py-4'>
                                <span
                                    className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center w-fit
                                        ${product.active
                                            ? 'bg-green-200/80 text-green-500'
                                            : 'bg-red-300/40 text-red-400'
                                        }`}
                                >
                                    <div
                                        className={`size-2 rounded-full me-2 mr-1} ${product.active ? 'bg-green-500' : 'bg-red-400'}`}
                                    ></div>
                                    {product.active ? ' Active' : ' Inactive'}
                                </span>
                            </td>

                            <td className='px-6 py-4 flex items-center gap-2'>
                                <Link
                                    href={`products/${product.encrypted_id}`}
                                    className='px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300'
                                >
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </Link>

                                <Link
                                    href={`products/${product.encrypted_id}/edit`}
                                    className='px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300'
                                >
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                </Link>

                                <div
                                    className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 cursor-pointer'
                                    onClick={() => handelDelete(product.encrypted_id)}
                                >
                                    <i
                                        className='fa fa-trash'
                                        aria-hidden='true'
                                    ></i>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AppLayout>
    );
}
