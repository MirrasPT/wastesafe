import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const MobileNegotiations = () => {
    const [offers, setOffers] = useState([
        {
            id: 1,
            product: "Pele Preta Premium 50M",
            image: "/imagens/Produto_1.jpg",
            buyer: "João Silva",
            originalPrice: "38.50€",
            offerPrice: "30.00€",
            status: "pendente"
        },
        {
            id: 2,
            product: "Tecido Rosa",
            image: "/imagens/Produto_2.jpg",
            buyer: "Maria Santos",
            originalPrice: "12.00€",
            offerPrice: "10.00€",
            status: "aceite"
        },
        {
            id: 3,
            product: "Fios de Algodão",
            image: "/imagens/Produto_3.jpg",
            buyer: "Carlos Pereira",
            originalPrice: "25.00€",
            offerPrice: "18.00€",
            status: "rejeitada"
        },
    ]);

    const getStatusBadge = (status) => {
        const styles = {
            pendente: 'bg-yellow-500 text-white',
            aceite: 'bg-[#355130] text-white',
            rejeitada: 'bg-red-500 text-white',
        };
        const labels = {
            pendente: 'PENDENTE',
            aceite: 'ACEITE',
            rejeitada: 'REJEITADA',
        };
        return (
            <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${styles[status]}`}>
                {labels[status]}
            </span>
        );
    };

    const handleAccept = (id) => {
        setOffers(offers.map(o => o.id === id ? { ...o, status: 'aceite' } : o));
    };

    const handleReject = (id) => {
        setOffers(offers.map(o => o.id === id ? { ...o, status: 'rejeitada' } : o));
    };

    return (
        <div className="bg-gray-50">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100">
                <h1 className="text-base font-bold text-[#355130]">Ofertas Recebidas</h1>
            </div>

            {/* Offers List */}
            <div className="p-3 space-y-3">
                {offers.map(offer => (
                    <div key={offer.id} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        {/* Header with product info */}
                        <div className="flex gap-3 mb-3">
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={offer.image} alt={offer.product} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-sm text-gray-800">{offer.product}</h3>
                                        <p className="text-[10px] text-gray-400">De: <span className="font-medium text-gray-600">{offer.buyer}</span></p>
                                    </div>
                                    {getStatusBadge(offer.status)}
                                </div>
                            </div>
                        </div>

                        {/* Price comparison */}
                        <div className="flex gap-4 mb-3 bg-gray-50 rounded-lg p-2">
                            <div>
                                <span className="block text-[9px] font-bold text-gray-400 uppercase">Preço Original</span>
                                <span className="text-xs text-gray-500 line-through">{offer.originalPrice}</span>
                            </div>
                            <div className="border-l border-gray-200 pl-4">
                                <span className="block text-[9px] font-bold text-gray-400 uppercase">Oferta</span>
                                <span className="text-base font-bold text-[#355130]">{offer.offerPrice}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        {offer.status === 'pendente' ? (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleAccept(offer.id)}
                                    className="flex-1 h-11 bg-[#355130] text-white rounded-xl font-bold text-xs active:scale-[0.98] transition-all"
                                >
                                    Aceitar
                                </button>
                                <button className="flex-1 h-11 bg-white border-2 border-[#C9E26C] text-[#355130] rounded-xl font-bold text-xs active:scale-[0.98] transition-all">
                                    Contra-proposta
                                </button>
                                <button
                                    onClick={() => handleReject(offer.id)}
                                    className="h-11 px-4 text-red-500 font-bold text-xs active:scale-[0.98] transition-all"
                                >
                                    Rejeitar
                                </button>
                            </div>
                        ) : (
                            <Link
                                to={`/mobile/chat/${offer.id}`}
                                className="flex items-center justify-center gap-2 h-11 bg-gray-100 rounded-xl text-gray-600 font-bold text-xs active:scale-[0.98] transition-all"
                            >
                                <MessageCircle size={14} /> Ver Conversa
                            </Link>
                        )}
                    </div>
                ))}

                {offers.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-sm">Sem ofertas recebidas.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileNegotiations;
