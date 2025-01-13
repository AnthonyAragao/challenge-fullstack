import { Link, router, usePage } from "@inertiajs/react"
import TableCell from "./TableCell";

export default function ProductsTable({ products }) {
    const { auth, } = usePage().props;

    const headers = [ 'Name', 'Price', 'Status', 'Actions' ];

    const handelDelete = (id) => {
        if (!auth?.user) {
            alert('You need to be logged in to delete a product.');
            return;
        }

        router.delete(`/products/${id}`);
    }

    return(
        <table className='w-full mt-8 text-left'>
            <thead className='text-sm uppercase border-t border-b border-gray-200 text-gray-600'>
                <tr>
                    {headers.map((header) => (
                        <th key={header} className='px-6 py-3'>{header}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {products.map((product) => (
                    <tr
                        key={product.id}
                        className='border-b hover:bg-gray-50 font-medium text-gray-600'
                    >
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                            <span
                                className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center w-fit
                                    ${product.active
                                        ? 'bg-green-200/80 text-green-500'
                                        : 'bg-red-300/40 text-red-400'
                                    }`}
                            >
                                <div className={`size-2 rounded-full me-2 mr-1} ${product.active ? 'bg-green-500' : 'bg-red-400'}`}></div>
                                {product.active ? ' Active' : ' Inactive'}
                            </span>
                        </TableCell>
                        <TableCell className='flex items-center gap-2'>
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
                        </TableCell>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
