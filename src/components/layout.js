import { Header, Footer } from './navigation';

export default function Layout({ children }) {
    return (
        <div className="container mx-auto max-w-7xl px-4 xl:px-0">
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}