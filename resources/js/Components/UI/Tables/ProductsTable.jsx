import { router, usePage } from "@inertiajs/react"
import TableCell from "./TableCell";
import ProductDeleteModal from "../Modals/ProductDeleteModal";
import { useState } from "react";
import ActionButton from "../Buttons/ActionButton";

export default function ProductsTable({ products }) {
    const productList = products?.data || [];
    const { auth, }                                 = usePage().props;
    const [isModalOpen, setIsModalOpen]             = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const headers = [ 'Name', 'Price', 'Status', 'Actions' ];

    const handleDelete = (id) => {
        if (!auth?.user) {
            router.visit('/login');
            return;
        }

        setSelectedProductId(id);
        setIsModalOpen(true);
    }

    const confirmDelete = () => {
        router.delete(`/products/${selectedProductId}`);
        setIsModalOpen(false);
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
                {productList.map((product) => (
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
                            <ActionButton
                                href={`products/${product.encrypted_id}`}
                                text="View"
                                iconClass="fas fa-eye"
                                color="blue"
                            />

                            <ActionButton
                                href={`products/${product.encrypted_id}/edit`}
                                text="Edit"
                                iconClass="fas fa-pencil-alt"
                                color="yellow"
                            />

                            <ActionButton
                                onClick={() => handleDelete(product.encrypted_id)}
                                text="Delete"
                                iconClass="fas fa-trash"
                                color="red"
                            />
                        </TableCell>
                    </tr>
                ))}
            </tbody>

            {isModalOpen && (
                <ProductDeleteModal
                    onCancel={() => setIsModalOpen(false)}
                    onConfirm={confirmDelete}
                />
            )}
        </table>
    )
}
