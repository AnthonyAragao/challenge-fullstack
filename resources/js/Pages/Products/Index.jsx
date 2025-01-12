import { Head } from '@inertiajs/react';

export default function Index({ products }) {
    console.log(products);
    
    return (
        <div>
            <Head title="Products" />
        </div>
    );
}
