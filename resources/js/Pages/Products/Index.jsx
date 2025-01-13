import { Link, Head, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Alert from '@/Components/UI/Notifications/Alert';
import ProductsTable from '@/Components/UI/Tables/ProductsTable';
import Pagination from '@/Components/Navigation/Pagination';

export default function Index({ products }) {
    const { flash } = usePage().props;

    return (
        <AppLayout>
            <Head title="Products" />

            {flash?.message && (
                <Alert
                    message={flash.message}
                    key={flash.key}
                />
            )}

            <div className='flex justify-between items-center'>
                <h1  className='text-2xl font-bold text-gray-700'>Products</h1>
                <Link
                    href="/products/create"
                    className='text-sm font-semibold bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600  transition duration-300'
                >
                    Create New Product
                </Link>
            </div>

            <ProductsTable products={products} />
            <Pagination pagination={products} className='mt-4'/>
        </AppLayout>
    );
}
