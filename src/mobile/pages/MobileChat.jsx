import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Send, DollarSign, X, Image, MoreVertical } from 'lucide-react';

const MobileChat = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const isOffer = searchParams.get('action') === 'offer';

    const [message, setMessage] = useState('');
    const [showOfferModal, setShowOfferModal] = useState(isOffer);
    const [offerAmount, setOfferAmount] = useState('');
    const messagesEndRef = useRef(null);

    // Mock conversation data
    const conversation = {
        id: id,
        seller: {
            name: "EcoTextil Lda",
            avatar: "E",
            online: true,
        },
        product: {
            title: "Pele Preta Premium 50M",
            price: "38.50€",
            image: "/imagens/Produto_1.jpg",
        },
        messages: [
            { id: 1, sender: 'seller', text: "Olá! Obrigado pelo interesse no produto.", time: "10:30" },
            { id: 2, sender: 'me', text: "Bom dia! O produto ainda está disponível?", time: "10:32" },
            { id: 3, sender: 'seller', text: "Sim, está disponível! Posso ajudar com mais alguma informação?", time: "10:33" },
        ]
    };

    const [messages, setMessages] = useState(conversation.messages);

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        // Only auto-scroll after user has sent a message, not on initial load
        if (hasScrolled) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, hasScrolled]);

    const handleSend = () => {
        if (!message.trim()) return;
        setMessages([...messages, {
            id: messages.length + 1,
            sender: 'me',
            text: message,
            time: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
        }]);
        setMessage('');
        setHasScrolled(true);
    };

    const handleSendOffer = () => {
        if (!offerAmount) return;
        setMessages([...messages, {
            id: messages.length + 1,
            sender: 'me',
            text: `💰 Oferta: ${offerAmount}€`,
            isOffer: true,
            time: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
        }]);
        setShowOfferModal(false);
        setOfferAmount('');
    };

    return (
        <div className="h-full bg-gray-50 flex flex-col">
            {/* Security Warning */}
            <div className="bg-amber-50 border-b border-amber-100 px-3 py-2">
                <div className="flex gap-2">
                    <span className="text-amber-500 text-lg">⚠️</span>
                    <div>
                        <p className="text-[10px] text-amber-800">
                            <span className="font-bold">Aviso de Segurança:</span> O pagamento é realizado fora da plataforma. Nunca partilhe dados bancários, passwords ou efetue pagamentos adiantados sem garantias.
                        </p>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="sticky top-0 bg-white z-30 px-3 py-2 flex items-center gap-3 border-b border-gray-100">
                <button onClick={() => navigate(-1)} className="p-1.5 rounded-full hover:bg-gray-100">
                    <ChevronLeft size={20} className="text-gray-700" />
                </button>
                <div className="w-9 h-9 rounded-full bg-[#C9E26C] flex items-center justify-center text-[#355130] font-bold text-xs">
                    {conversation.seller.avatar}
                </div>
                <div className="flex-1 min-w-0">
                    <h1 className="font-bold text-sm text-gray-800 truncate">{conversation.seller.name}</h1>
                    <span className="text-[10px] text-green-500 font-medium">
                        {conversation.seller.online ? '● Online' : 'Offline'}
                    </span>
                </div>
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                    <MoreVertical size={18} className="text-gray-500" />
                </button>
            </div>

            {/* Product Context Card */}
            <div className="bg-white px-3 py-2 border-b border-gray-100 flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100">
                    <img src={conversation.product.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-800 truncate">{conversation.product.title}</p>
                    <p className="text-xs font-bold text-[#355130]">{conversation.product.price}</p>
                </div>
                <button
                    onClick={() => setShowOfferModal(true)}
                    className="px-2.5 py-1.5 bg-[#C9E26C] text-[#355130] rounded-lg text-[10px] font-bold flex items-center gap-1"
                >
                    <DollarSign size={12} /> Oferta
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 pb-20">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[75%] px-3 py-2 rounded-2xl ${msg.sender === 'me'
                            ? msg.isOffer
                                ? 'bg-[#C9E26C] text-[#355130]'
                                : 'bg-[#355130] text-white'
                            : 'bg-white border border-gray-100 text-gray-800'
                            }`}>
                            <p className="text-xs">{msg.text}</p>
                            <p className={`text-[9px] mt-1 ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-400'
                                }`}>{msg.time}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="fixed bottom-20 left-0 right-0 mx-auto max-w-[355px] bg-white border-t border-gray-100 px-3 py-2 z-30">
                <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Image size={20} />
                    </button>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Escreva uma mensagem..."
                        className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-xs outline-none"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!message.trim()}
                        className={`p-2 rounded-full transition-colors ${message.trim() ? 'bg-[#355130] text-white' : 'bg-gray-100 text-gray-400'
                            }`}
                    >
                        <Send size={16} />
                    </button>
                </div>
            </div>

            {/* Offer Modal */}
            {showOfferModal && (
                <div className="fixed inset-0 z-50 flex items-end justify-center">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowOfferModal(false)} />
                    <div className="relative bg-white rounded-t-3xl w-full max-w-[375px] p-4 pb-8 animate-in slide-in-from-bottom duration-300">
                        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-base font-bold text-gray-800">Fazer Oferta</h2>
                            <button onClick={() => setShowOfferModal(false)} className="p-1 bg-gray-100 rounded-full">
                                <X size={16} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Product Info */}
                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl mb-4">
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200">
                                <img src={conversation.product.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-800">{conversation.product.title}</p>
                                <p className="text-sm font-bold text-[#355130]">Preço: {conversation.product.price}</p>
                            </div>
                        </div>

                        {/* Offer Input */}
                        <div className="mb-4">
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                                A sua oferta (€)
                            </label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="number"
                                    value={offerAmount}
                                    onChange={(e) => setOfferAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full bg-gray-50 p-3 pl-10 rounded-xl text-lg font-bold outline-none focus:ring-2 focus:ring-[#355130]/20"
                                />
                            </div>
                        </div>

                        {/* Quick Offers */}
                        <div className="flex gap-2 mb-6">
                            {['30', '35', '38'].map(amount => (
                                <button
                                    key={amount}
                                    onClick={() => setOfferAmount(amount)}
                                    className="flex-1 py-3 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                                >
                                    {amount}€
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={handleSendOffer}
                            disabled={!offerAmount}
                            className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${offerAmount
                                ? 'bg-[#355130] text-white shadow-lg active:scale-[0.98]'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <DollarSign size={16} /> Enviar Oferta
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileChat;
