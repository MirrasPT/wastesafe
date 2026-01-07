import { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { Send, AlertTriangle, ChevronLeft, ShieldCheck, DollarSign } from 'lucide-react';

const Chat = () => {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! Is this item still available?", sender: "me", time: "10:30" },
        { id: 2, text: "Yes, I still have 50 meters available. Do you need all of it?", sender: "seller", time: "10:32" }
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [offerAmount, setOfferAmount] = useState("");
    const [offerQuantity, setOfferQuantity] = useState("1"); // Default quantity
    const [showOfferModal, setShowOfferModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("Make Offer");

    useEffect(() => {
        if (searchParams.get('action') === 'offer') {
            setShowOfferModal(true);
            // Optional: Clear the param so refreshing doesn't re-open it, or keep it.
            // setSearchParams({}); 
        }
    }, [searchParams]);

    const isSellerContext = searchParams.get('context') === 'seller';

    // Mock Product Data (In a real app, fetch based on ID)
    const product = {
        id: id || 1,
        title: "Black Leather Premium 50M",
        price: "38.50€",
        image: "/imagens/Produto_1.jpg",
        seller: "EcoTextil Lda"
    };

    // Initial messages logic
    useEffect(() => {
        if (isSellerContext) {
            setMessages([
                { id: 1, text: `Hello! I would like to speak with ${product.seller}.`, sender: "me", time: "10:30" },
                { id: 2, text: "Hello! How can I help?", sender: "seller", time: "10:32" }
            ]);
        }
        // else keep default or fetch product messages
    }, [isSellerContext]);


    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const msg = {
            id: messages.length + 1,
            text: newMessage,
            sender: "me",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, msg]);
        setNewMessage("");
    };

    const handleSendOffer = (e) => {
        e.preventDefault();
        if (!offerAmount) return;

        const msg = {
            id: messages.length + 1,
            text: `Offer sent: ${offerAmount}€ for ${offerQuantity} unit(s)`,
            isOffer: true,
            amount: offerAmount,
            quantity: offerQuantity,
            sender: "me",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, msg]);
        setShowOfferModal(false);
        setOfferAmount("");
        setOfferQuantity("1"); // Reset quantity
    };

    return (
        <div className="pt-24 pb-12 min-h-screen bg-[#F9F9F9] font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-140px)] flex flex-col">

                {/* Header / Breadcrumbs */}
                <div className="mb-4 flex items-center gap-2">
                    <Link to={isSellerContext ? `/vendedor/${id}` : `/produto/${id}`} className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors">
                        <ChevronLeft size={20} className="text-[#355130]" />
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-lg font-bold text-[#355130]">Chat with {product.seller}</h1>
                        {!isSellerContext && <p className="text-xs text-gray-500 truncate">Regarding: {product.title}</p>}
                    </div>
                </div>

                {/* Safety Warning */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex items-start gap-3">
                    <AlertTriangle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm font-bold text-amber-800">Security Warning</h4>
                        <p className="text-xs text-amber-700">
                            For your safety, arrange payment and shipping directly with the seller.
                            <span className="font-bold"> The platform does not process payments.</span>
                            Be wary of advanced payment requests without guarantees.
                        </p>
                    </div>
                </div>

                {/* Chat Container */}
                <div className="flex-1 bg-white rounded-[30px] shadow-sm border border-gray-100 overflow-hidden flex flex-col relative">

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[75%] rounded-2xl p-4 ${msg.sender === 'me'
                                    ? 'bg-[#355130] text-white rounded-br-none'
                                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                    }`}>
                                    {msg.isOffer ? (
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                <DollarSign size={20} className="text-white" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Price Offer</p>
                                                <p className="text-lg font-bold">{msg.amount}€ <span className="text-xs font-normal text-white/70">x {msg.quantity || 1}</span></p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-sm">{msg.text}</p>
                                    )}
                                    <span className={`text-[10px] block text-right mt-1 ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-400'}`}>
                                        {msg.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center gap-3">
                        {!isSellerContext && (
                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setShowOfferModal(true); setModalTitle("Make Offer"); }}
                                    className="px-4 py-3 rounded-full bg-[#C9E26C] hover:bg-[#D4E680] text-[#355130] font-bold transition-colors btn-press flex items-center gap-2 whitespace-nowrap"
                                >
                                    <DollarSign size={20} />
                                    Make Offer
                                </button>
                                <button
                                    onClick={() => { setShowOfferModal(true); setModalTitle("Counter Offer"); }} // reusing modal for demo
                                    className="px-4 py-3 rounded-full bg-white border-2 border-[#C9E26C] text-[#355130] font-bold transition-colors btn-press flex items-center gap-2 whitespace-nowrap hover:bg-[#C9E26C]/20"
                                >
                                    <DollarSign size={20} />
                                    Counter Offer
                                </button>
                            </div>
                        )}
                        <form onSubmit={handleSendMessage} className="flex-1 flex items-center gap-2">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-white border border-gray-200 rounded-full px-4 py-3 focus:outline-none focus:border-[#355130] focus:ring-1 focus:ring-[#355130] transition-all"
                            />
                            <button
                                type="submit"
                                className="p-3 rounded-full bg-[#355130] hover:bg-[#2a4126] text-white transition-colors btn-press shadow-md"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Offer Modal */}
                    {showOfferModal && (
                        <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                            <div className="bg-white rounded-[30px] p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200">
                                <h3 className="text-lg font-bold text-[#355130] mb-2">Make Offer</h3>
                                <p className="text-sm text-gray-500 mb-4">Propose a new price for this item. Current price is {product.price}.</p>

                                <form onSubmit={handleSendOffer}>
                                    <div className="flex gap-4 mb-6">
                                        <div className="flex-1">
                                            <label className="block text-xs font-bold text-gray-500 mb-1">Proposed Price</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">€</span>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={offerAmount}
                                                    onChange={(e) => setOfferAmount(e.target.value)}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-8 pr-4 text-lg font-bold text-[#355130] focus:outline-none focus:border-[#355130]"
                                                    placeholder="0.00"
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/3">
                                            <label className="block text-xs font-bold text-gray-500 mb-1">Qty</label>
                                            <input
                                                type="number"
                                                min="1"
                                                value={offerQuantity}
                                                onChange={(e) => setOfferQuantity(e.target.value)}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-lg font-bold text-[#355130] focus:outline-none focus:border-[#355130] text-center"
                                                placeholder="1"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setShowOfferModal(false)}
                                            className="flex-1 py-3 rounded-xl border border-gray-200 font-bold text-gray-500 hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 py-3 rounded-xl bg-[#355130] text-white font-bold hover:bg-[#2a4126] transition-colors shadow-lg"
                                        >
                                            Send Offer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chat;
