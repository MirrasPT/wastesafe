import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileFavorites = () => {
    // Sample Favorites Data
    const favorites = [
        { id: 1, title: "Pele Preta 50M", price: "38.50€", image: "/imagens/Produto_1.jpg", type: "Matéria-Prima" },
        { id: 3, title: "Tecido Azul", price: "8.90€", image: "/imagens/Produto_3.jpg", type: "Defeito" },
    ];

    return (
        <div className="p-4 pt-6 bg-gray-50">
            <h1 className="text-lg font-bold text-[#355130] mb-4">Favoritos</h1>

            <div className="space-y-3">
                {favorites.map((item) => (
                    <Link
                        to={`/mobile/product/${item.id}`}
                        key={item.id}
                        className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-3 active:scale-[0.98] transition-all"
                    >
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 relative overflow-hidden">
                            <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                        </div>
                        <div className="flex-1 flex flex-col justify-center min-w-0">
                            <span className="text-[9px] uppercase font-bold text-gray-400 mb-0.5">{item.type}</span>
                            <h3 className="font-bold text-gray-800 text-sm mb-0.5 truncate">{item.title}</h3>
                            <p className="text-[#355130] font-bold text-sm">{item.price}</p>
                        </div>
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            className="self-center p-2 text-red-500"
                        >
                            <Heart size={18} fill="currentColor" />
                        </button>
                    </Link>
                ))}

                {favorites.length === 0 && (
                    <div className="text-center py-16 text-gray-400">
                        <Heart size={40} className="mx-auto mb-3 opacity-20" />
                        <p className="text-sm">Ainda não tem favoritos.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileFavorites;
