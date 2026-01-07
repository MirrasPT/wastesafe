import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import MobileProductCard from '../components/MobileProductCard';

const MobileSearch = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Sample Data
    const products = [
        { id: 1, title: "Pele Preta 50M", price: "38.50€", oldPrice: "40.50€", type: "Matéria-Prima", image: "/imagens/Produto_1.jpg", location: "Porto", category: "Pele" },
        { id: 2, title: "Tecido Rosa", price: "12.00€", oldPrice: null, type: "Restos", image: "/imagens/Produto_2.jpg", location: "Lisboa", category: "Estampado" },
        { id: 3, title: "Tecido Azul", price: "8.90€", oldPrice: "15.00€", type: "Defeito", image: "/imagens/Produto_3.jpg", location: "Braga", category: "Sintético" },
        { id: 4, title: "Rolos Diversos", price: "24.50€", oldPrice: null, type: "Restos", image: "/imagens/Produto_4.jpg", location: "Porto", category: "Misto" },
        { id: 5, title: "Algodão Branco", price: "15.00€", oldPrice: "18.00€", type: "Matéria-Prima", image: "/imagens/Produto_1.jpg", location: "Guimarães", category: "Algodão" },
        { id: 6, title: "Linho Natural", price: "22.00€", oldPrice: null, type: "Matéria-Prima", image: "/imagens/Produto_2.jpg", location: "Lisboa", category: "Linho" },
    ];

    // Search & Filter State
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Todas');

    const categories = ['Todas', 'Pele', 'Estampado', 'Sintético', 'Misto', 'Algodão', 'Linho', 'Seda'];

    const filteredProducts = products.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'Todas' || p.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white z-40 px-4 pt-6 pb-3 shadow-sm">
                <h1 className="text-lg font-bold text-[#355130] mb-3">Pesquisar</h1>

                <div className="flex gap-2">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="O que procura?"
                            className="w-full bg-gray-50 h-10 rounded-xl pl-9 pr-3 outline-none border border-transparent focus:border-[#355130]/20 focus:bg-white transition-all text-xs font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="w-10 h-10 flex items-center justify-center bg-[#355130] text-white rounded-xl shadow-lg shadow-[#355130]/20 active:scale-95 transition-all"
                    >
                        <Filter size={16} />
                    </button>
                </div>

                {/* Horizontal Filter Chips */}
                <div className="flex gap-1.5 mt-3 overflow-x-auto no-scrollbar pb-1">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${activeCategory === cat
                                ? 'bg-[#E3F4C8] text-[#355130]'
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Grid */}
            <div className="p-4">
                <p className="text-[10px] font-bold text-gray-400 mb-3">{filteredProducts.length} resultados encontrados</p>
                <div className="grid grid-cols-2 gap-3">
                    {filteredProducts.map(product => (
                        <MobileProductCard key={product.id} {...product} compact />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-16 text-gray-400 text-sm">
                        <p>Nenhum resultado encontrado.</p>
                    </div>
                )}
            </div>

            {/* Filter Bottom Sheet */}
            {isFilterOpen && (
                <div className="absolute inset-0 z-50 flex flex-col justify-end">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => setIsFilterOpen(false)}
                    ></div>

                    {/* Drawer */}
                    <div className="relative bg-white rounded-t-[24px] p-4 pb-8 animate-in slide-in-from-bottom duration-300 max-h-[80vh] overflow-y-auto">
                        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>

                        <div className="flex justify-between items-center mb-5">
                            <h2 className="text-base font-bold text-gray-800">Filtros</h2>
                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className="p-1.5 bg-gray-100 rounded-full"
                            >
                                <X size={16} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Filter Options */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-800 text-sm mb-2">Preço</h3>
                                <div className="flex gap-3">
                                    <input type="number" placeholder="Min" className="flex-1 bg-gray-50 p-2.5 rounded-xl text-xs font-medium outline-none border focus:border-[#355130]" />
                                    <input type="number" placeholder="Max" className="flex-1 bg-gray-50 p-2.5 rounded-xl text-xs font-medium outline-none border focus:border-[#355130]" />
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800 text-sm mb-2">Localização</h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {['Porto', 'Lisboa', 'Braga', 'Guimarães'].map(loc => (
                                        <button key={loc} className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:border-[#355130] hover:text-[#355130]">
                                            {loc}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className="w-full py-3 bg-[#355130] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#355130]/20 active:scale-95 transition-transform mt-3"
                            >
                                Aplicar Filtros
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileSearch;
