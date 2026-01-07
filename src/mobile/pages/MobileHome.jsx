import { Bell, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileHome = () => {
    return (
        <div className="p-4 pt-6">
            {/* Header */}
            <header className="flex justify-between items-center mb-4">
                <img src="/icons/Logo_Nav_Verde.svg" alt="WasteSafe" className="h-5" />
                <button className="p-1.5 bg-white rounded-full shadow-sm text-gray-600 relative">
                    <Bell size={18} />
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
                </button>
            </header>

            {/* Search Bar - Links to Search Page */}
            <Link to="/mobile/search" className="block mb-4">
                <div className="relative pointer-events-none">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <div className="w-full bg-white h-10 rounded-xl flex items-center pl-10 pr-3 text-xs font-medium text-gray-400 shadow-sm border border-gray-100">
                        O que procura?
                    </div>
                </div>
            </Link>

            {/* Ads Banner */}
            <div className="w-full bg-gray-100/50 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300 h-24 flex flex-col items-center justify-center text-gray-400 gap-1 mb-5">
                <div className="bg-white p-1 rounded-full shadow-sm">
                    <span className="font-bold text-[8px] uppercase tracking-widest text-gray-300">Ads</span>
                </div>
                <span className="font-medium text-[10px]">Espaço para Publicidade</span>
            </div>

            {/* Categories */}
            <div className="mb-5">
                <div className="flex justify-between items-end mb-3">
                    <h3 className="font-bold text-gray-800 text-sm">Explore por Categoria</h3>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-3 no-scrollbar -mx-4 px-4">
                    {[
                        { name: "Matéria-Prima", color: "bg-green-100", iconColor: "bg-green-600", slug: "materia-prima" },
                        { name: "Restos de Coleção", color: "bg-blue-100", iconColor: "bg-blue-600", slug: "restos-colecao" },
                        { name: "Peças com Defeito", color: "bg-orange-100", iconColor: "bg-orange-600", slug: "defeito" },
                    ].map((cat, i) => (
                        <Link to={`/mobile/search?category=${cat.slug}`} key={i} className="flex flex-col items-center gap-1.5 min-w-[65px] cursor-pointer active:scale-95 transition-transform">
                            <div className={`${cat.color} w-12 h-12 rounded-full flex items-center justify-center shadow-sm`}>
                                <div className={`w-6 h-6 ${cat.iconColor} rounded-full opacity-20`}></div>
                            </div>
                            <span className="text-[9px] font-bold text-gray-700 text-center leading-tight max-w-[65px]">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Last Viewed - Horizontal Scroll */}
            <div className="mb-5">
                <h3 className="font-bold text-gray-800 text-sm mb-3">Vistos Recentemente</h3>
                <div className="flex gap-3 overflow-x-auto pb-3 no-scrollbar -mx-4 px-4">
                    {[
                        { id: 101, title: "Fio de Algodão", price: "5.50€", image: "/imagens/Produto_3.jpg", type: "Restos" },
                        { id: 102, title: "Retalhos Seda", price: "18.00€", image: "/imagens/Produto_1.jpg", type: "Defeito" },
                        { id: 103, title: "Tecido Linho", price: "12.00€", image: "/imagens/Produto_2.jpg", type: "Usado" },
                    ].map((item) => (
                        <Link to={`/mobile/product/${item.id}`} key={item.id} className="min-w-[110px] bg-white rounded-xl p-1.5 shadow-sm border border-gray-100 active:scale-95 transition-transform">
                            <div className="aspect-square bg-gray-100 rounded-lg mb-1.5 relative overflow-hidden">
                                <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                            </div>
                            <h4 className="font-bold text-gray-800 text-[10px] line-clamp-1">{item.title}</h4>
                            <p className="text-[#355130] font-bold text-[10px]">{item.price}</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Featured Items */}
            <div>
                <h3 className="font-bold text-gray-800 text-sm mb-3">Destaques</h3>
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { id: 1, title: "Tecido Algodão", price: "12,50€", image: "/imagens/Produto_1.jpg", type: "Usado" },
                        { id: 2, title: "Rolo de Seda", price: "28,00€", image: "/imagens/Produto_2.jpg", type: "Novo" },
                        { id: 3, title: "Linho Natural", price: "18,90€", image: "/imagens/Produto_3.jpg", type: "Restos" },
                        { id: 4, title: "Malha Jersey", price: "9,50€", image: "/imagens/Produto_4.jpg", type: "Defeito" },
                    ].map((item) => (
                        <Link to={`/mobile/product/${item.id}`} key={item.id} className="bg-white p-2 rounded-xl shadow-sm border border-gray-50 active:scale-[0.98] transition-all">
                            <div className="aspect-square bg-gray-100 rounded-lg mb-2 relative overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                <span className="absolute top-1.5 left-1.5 bg-white/90 px-1 py-0.5 rounded text-[8px] font-bold text-gray-500">{item.type}</span>
                            </div>
                            <h4 className="font-bold text-gray-800 text-xs mb-0.5">{item.title}</h4>
                            <p className="text-[#355130] font-bold text-xs">{item.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileHome;
