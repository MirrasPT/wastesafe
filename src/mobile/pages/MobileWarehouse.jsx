import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Eye, Edit, Zap, Trash2, ChevronDown } from 'lucide-react';

const MobileWarehouse = () => {
    const [activeFilter, setActiveFilter] = useState('todos');

    const filters = [
        { id: 'todos', label: 'Todos' },
        { id: 'ativos', label: 'Ativos' },
        { id: 'reservados', label: 'Reservados' },
        { id: 'vendidos', label: 'Vendidos' },
        { id: 'expirados', label: 'Expirados' },
    ];

    const products = [
        { id: 1, title: "Rolo de Tecido Linho", price: "120.00€", views: 45, status: "ativo", image: "/imagens/Produto_1.jpg" },
        { id: 2, title: "Excedente Algodão Cru", price: "85.00€", views: 12, status: "reservado", image: "/imagens/Produto_2.jpg" },
        { id: 3, title: "Fios de Poliéster (Lote)", price: "40.00€", views: 128, status: "vendido", date: "12 Out 2024", image: "/imagens/Produto_3.jpg" },
        { id: 4, title: "Retalhos de Seda", price: "25.00€", views: 5, status: "expirado", date: "01 Set 2024", image: "/imagens/Produto_4.jpg" },
    ];

    const getStatusBadge = (status) => {
        const styles = {
            ativo: 'bg-[#355130] text-white',
            reservado: 'bg-yellow-500 text-white',
            vendido: 'bg-blue-500 text-white',
            expirado: 'bg-red-500 text-white',
        };
        const labels = {
            ativo: 'ATIVO',
            reservado: 'RESERVADO',
            vendido: 'VENDIDO',
            expirado: 'EXPIRADO',
        };
        return (
            <span className={`absolute top-2 left-2 px-1.5 py-0.5 rounded text-[8px] font-bold ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    const filteredProducts = activeFilter === 'todos'
        ? products
        : products.filter(p => p.status === activeFilter.replace('s', ''));

    return (
        <div className="bg-gray-50">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <h1 className="text-base font-bold text-gray-800">Armazém</h1>
                <Link
                    to="/mobile/publish"
                    className="flex items-center gap-1 bg-[#355130] text-white px-3 py-1.5 rounded-lg text-xs font-bold"
                >
                    <Plus size={14} /> Novo Anúncio
                </Link>
            </div>

            {/* Filters */}
            <div className="bg-white px-3 py-2 border-b border-gray-100">
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${activeFilter === filter.id
                                ? 'bg-[#355130] text-white'
                                : 'bg-gray-100 text-gray-600'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product List */}
            <div className="p-3 space-y-3">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        <div className="flex gap-3">
                            {/* Image */}
                            <div className="w-24 h-full min-h-[140px] rounded-lg overflow-hidden relative flex-shrink-0">
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                                {getStatusBadge(product.status)}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-sm text-gray-800 truncate pr-2">{product.title}</h3>
                                    <span className="font-bold text-sm text-[#355130] whitespace-nowrap">{product.price}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-2">
                                    <span className="flex items-center gap-0.5">
                                        <Eye size={10} /> {product.views} visualizações
                                    </span>
                                    {product.date && <span>📅 {product.date}</span>}
                                </div>

                                {/* Actions */}
                                <div className="space-y-2">
                                    {/* Status dropdown - full width */}
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-gray-100 text-gray-600 text-xs font-bold px-3 py-2.5 pr-8 rounded-xl">
                                            <option>{product.status.charAt(0).toUpperCase() + product.status.slice(1)}</option>
                                            <option>Ativo</option>
                                            <option>Reservado</option>
                                            <option>Vendido</option>
                                        </select>
                                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>

                                    {/* Edit and Highlight buttons */}
                                    <div className="flex items-center gap-2">
                                        <button className="flex-1 h-11 flex items-center justify-center gap-1.5 bg-[#C9E26C] text-[#355130] text-xs font-bold rounded-xl active:scale-[0.98] transition-all">
                                            <Zap size={14} /> Destacar
                                        </button>
                                        <button className="h-11 w-11 flex items-center justify-center bg-white border border-gray-200 text-gray-500 rounded-xl active:scale-[0.98] transition-all">
                                            <Edit size={18} />
                                        </button>
                                        <button className="h-11 w-11 flex items-center justify-center bg-white border border-gray-200 text-gray-400 hover:text-red-500 rounded-xl active:scale-[0.98] transition-all">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredProducts.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-sm">Sem anúncios nesta categoria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileWarehouse;
