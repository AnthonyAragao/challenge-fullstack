import { Link, usePage } from '@inertiajs/react';

export default function Header() {
    const { auth } = usePage().props;

    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Challenge</h1>

                <nav>
                    {auth?.user ? (
                        <div className="flex items-center">
                            <span className="mr-4">
                                Welcome, <strong>{auth.user.name}</strong>
                            </span>

                            <Link
                                href="/logout"
                                method="post"
                                className="mx-2 text-white hover:underline"
                            >
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="text-white hover:underline"
                        >
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
