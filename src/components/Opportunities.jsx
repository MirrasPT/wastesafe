
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Opportunities = () => {
    const products = [
        { id: 1, title: "Black Leather 50M", price: "38.50€", oldPrice: "40.50€", category: "Leather", image: "/imagens/Produto_1.jpg" },
        { id: 2, title: "Pink Fabric", price: "12.00€", oldPrice: null, category: "Patterned", image: "/imagens/Produto_2.jpg" },
        { id: 3, title: "Blue Fabric", price: "8.90€", oldPrice: "15.00€", category: "Synthetic", image: "/imagens/Produto_3.jpg" },
        { id: 4, title: "Various Rolls", price: "24.50€", oldPrice: null, category: "Mixed", image: "/imagens/Produto_4.jpg" },
    ];

    return (
        <section className="pt-52 md:pt-32 pb-12 bg-transparent relative z-10 font-sans">
            <div className="waste-container">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 md:gap-4 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-waste-green-900 mb-2">Featured Opportunities</h2>
                        <p className="text-gray-500">New arrivals of premium dead stock.</p>
                    </div>
                    <Link to="/catalogo" className="px-6 py-2 rounded-full border border-gray-300 text-sm font-semibold hover:border-waste-green-900 hover:bg-waste-green-900 hover:text-white transition-all cursor-pointer">
                        View Full Catalog
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {products.map(p => (
                        <ProductCard key={p.id} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Opportunities;
