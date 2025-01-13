import Header from '@/Components/Navigation/Header';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="container mx-auto flex-grow py-10">
                {children}
            </main>
        </div>
    );
}
