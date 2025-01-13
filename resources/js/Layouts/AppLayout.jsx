import Header from '@/Components/Navigation/Header';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="container mx-auto flex-grow py-6">
                {children}
            </main>

            <footer className="bg-gray-800 text-white py-3">
                <div className="container mx-auto text-center text-sm">
                    &copy; {new Date().getFullYear()} Challenge fullstack
                </div>
            </footer>
        </div>
    );
}
