
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Opportunities = () => {
    const products = [
        { id: 1, title: "Pele Preta 50M", price: "38.50€", oldPrice: "40.50€", category: "Pele", image: "/imagens/Produto_1.jpg" },
        { id: 2, title: "Tecido Rosa", price: "12.00€", oldPrice: null, category: "Estampado", image: "/imagens/Produto_2.jpg" },
        { id: 3, title: "Tecido Azul", price: "8.90€", oldPrice: "15.00€", category: "Sintético", image: "/imagens/Produto_3.jpg" },
        { id: 4, title: "Rolos Diversos", price: "24.50€", oldPrice: null, category: "Misto", image: "/imagens/Produto_4.jpg" },
    ];

    return (
        <section className="pt-52 md:pt-32 pb-12 bg-transparent relative z-10 font-sans">
            <div className="waste-container">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 md:gap-4 text-center md:text-left">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-waste-green-900 mb-2">Oportunidades em Destaque</h2>
                        <p className="text-gray-500">Novas chegadas de dead stock premium.</p>
                    </div>
                    <Link to="/catalogo" className="px-6 py-2 rounded-full border border-gray-300 text-sm font-semibold hover:border-waste-green-900 hover:bg-waste-green-900 hover:text-white transition-all cursor-pointer">
                        Ver Catálogo Completo
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
