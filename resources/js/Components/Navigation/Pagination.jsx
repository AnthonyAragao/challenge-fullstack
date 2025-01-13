import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ pagination, className }) {
    if (!pagination || !pagination.links) return null;

    return (
        <nav className={`space-x-1 ${className}`}>
            {pagination.links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        href={link.url || '#'}
                        preserveScroll
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={`px-4 py-2 text-sm font-bold rounded-lg text-gray-500 border border-gray-300 cursor-default transition duration-150
                            ${ link.active ? 'bg-blue-500 text-white' : ''}
                            ${ link.url !== null ? 'hover:bg-blue-500 hover:text-white hover:border-blue-500 cursor-pointer' : ''}`
                        }
                    />
                );
            })}
        </nav>
    );
}
