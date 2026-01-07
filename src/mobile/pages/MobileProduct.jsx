import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart, MessageCircle, DollarSign, MapPin, Star, ShieldCheck, Share2, Package } from 'lucide-react';

const MobileProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    // Mock Product Data
    const product = {
        id: id || 1,
        title: "Pele Preta Premium 50M",
        price: "38.50€",
        description: "Lote de pele genuína de alta qualidade, excedente de produção de calçado de luxo. Perfeito para marroquinaria, estofos ou pequenos acessórios.",
        category: "Pele",
        type: "Matéria-Prima",
        condition: "Novo (Excedente)",
        stock: "50 Metros",
        location: "Porto, Portugal",
        composition: "100% Pele Genuína",
        quality: "Alta",
        shippingPolicy: "A cargo do Comprador",
        shippingCost: "5.00€",
        certificates: ["GOTS", "Fair Trade"],
        partialSale: true,
        seller: {
            name: "EcoTextil Lda",
            rating: 4.8,
            reviews: 124,
            verified: true,
        },
        images: [
            "/imagens/Produto_1.jpg",
            "/imagens/Produto_2.jpg",
            "/imagens/Produto_3.jpg"
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header with Back Button */}
            <div className="sticky top-0 bg-white/80 backdrop-blur-md z-30 px-3 py-2 flex items-center justify-between border-b border-gray-100">
                <button onClick={() => navigate(-1)} className="p-1.5 rounded-full hover:bg-gray-100">
                    <ChevronLeft size={20} className="text-gray-700" />
                </button>
                <div className="flex gap-2">
                    <button className="p-1.5 rounded-full hover:bg-gray-100">
                        <Share2 size={18} className="text-gray-600" />
                    </button>
                    <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="p-1.5 rounded-full hover:bg-gray-100"
                    >
                        <Heart size={18} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'} />
                    </button>
                </div>
            </div>

            {/* Image Gallery */}
            <div className="relative">
                <div className="aspect-square bg-gray-200">
                    <img
                        src={product.images[selectedImage]}
                        alt={product.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Image Thumbnails */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                    {product.images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${selectedImage === idx ? 'bg-[#355130] w-4' : 'bg-white/70'
                                }`}
                        />
                    ))}
                </div>
                {/* Type Badge */}
                <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-sm">
                    {product.type}
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Price & Title */}
                <div className="mb-4">
                    <span className="text-2xl font-bold text-[#355130]">{product.price}</span>
                    <h1 className="text-lg font-bold text-gray-800 mt-1">{product.title}</h1>
                    <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
                        <MapPin size={12} />
                        <span>{product.location}</span>
                    </div>
                </div>

                {/* Seller Card */}
                <Link to="/mobile/profile" className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 mb-4">
                    <div className="w-10 h-10 bg-[#C9E26C] rounded-full flex items-center justify-center text-[#355130] font-bold text-sm">
                        {product.seller.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-sm text-gray-800 truncate">{product.seller.name}</span>
                            {product.seller.verified && <ShieldCheck size={14} className="text-blue-500 flex-shrink-0" fill="currentColor" />}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Star size={10} className="text-amber-500" fill="currentColor" />
                            <span className="font-bold text-amber-500">{product.seller.rating}</span>
                            <span>({product.seller.reviews})</span>
                        </div>
                    </div>
                    <ChevronLeft size={16} className="text-gray-400 rotate-180" />
                </Link>

                {/* Description */}
                <div className="mb-4">
                    <h3 className="font-bold text-sm text-gray-800 mb-2">Descrição</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Details Grid */}
                <div className="mb-4">
                    <h3 className="font-bold text-sm text-gray-800 mb-2">Detalhes</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white p-2.5 rounded-lg border border-gray-100">
                            <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Composição</span>
                            <span className="block font-bold text-xs text-gray-800">{product.composition}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-gray-100">
                            <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Qualidade</span>
                            <span className="block font-bold text-xs text-gray-800">{product.quality}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-gray-100">
                            <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Envio</span>
                            <span className="block font-bold text-xs text-gray-800">{product.shippingPolicy}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-gray-100">
                            <span className="block text-[9px] text-gray-400 uppercase tracking-wider">Custo Envio</span>
                            <span className="block font-bold text-xs text-gray-800">{product.shippingCost}</span>
                        </div>
                    </div>
                </div>

                {/* Certificates */}
                {product.certificates.length > 0 && (
                    <div className="mb-4">
                        <h3 className="font-bold text-sm text-gray-800 mb-2">Certificados</h3>
                        <div className="flex gap-2">
                            {product.certificates.map((cert, i) => (
                                <span key={i} className="px-2.5 py-1 bg-green-50 text-[#355130] text-[10px] font-bold rounded-full border border-green-100">
                                    {cert}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Store Reviews */}
                <div className="mb-4 pt-4 border-t border-gray-100">
                    <h3 className="font-bold text-sm text-gray-800 mb-3">Avaliações da Loja</h3>
                    <div className="space-y-2">
                        {[
                            { id: 1, user: "Ana M.", rating: 5, date: "2 dias", text: "Excelente qualidade! Envio rápido." },
                            { id: 2, user: "Carlos S.", rating: 5, date: "1 sem", text: "Tudo conforme descrito." },
                        ].map(review => (
                            <div key={review.id} className="bg-white p-2.5 rounded-lg border border-gray-100">
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[9px] font-bold text-gray-500">
                                            {review.user.charAt(0)}
                                        </div>
                                        <span className="font-bold text-xs text-gray-800">{review.user}</span>
                                    </div>
                                    <span className="text-[9px] text-gray-400">{review.date}</span>
                                </div>
                                <div className="flex text-amber-500 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={10} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                                    ))}
                                </div>
                                <p className="text-[10px] text-gray-600">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* More from Seller */}
                <div className="mb-4 pt-4 border-t border-gray-100">
                    <h3 className="font-bold text-sm text-gray-800 mb-3">Mais de {product.seller.name}</h3>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2">
                        {[
                            { id: 10, title: "Tecido Rosa", price: "12.00€", image: "/imagens/Produto_2.jpg" },
                            { id: 11, title: "Algodão Branco", price: "15.00€", image: "/imagens/Produto_1.jpg" },
                            { id: 12, title: "Tecido Azul", price: "8.90€", image: "/imagens/Produto_3.jpg" },
                        ].map(item => (
                            <Link to={`/mobile/product/${item.id}`} key={item.id} className="min-w-[100px] bg-white rounded-lg p-1.5 shadow-sm border border-gray-100 active:scale-95 transition-transform">
                                <div className="aspect-square bg-gray-100 rounded-md mb-1 overflow-hidden">
                                    <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                                </div>
                                <h4 className="font-bold text-gray-800 text-[9px] line-clamp-1">{item.title}</h4>
                                <p className="text-[#355130] font-bold text-[9px]">{item.price}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Recommended Products */}
                <div className="mb-8 pt-4 border-t border-gray-100">
                    <h3 className="font-bold text-sm text-gray-800 mb-3">Artigos Recomendados</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { id: 20, title: "Rolos Diversos", price: "24.50€", image: "/imagens/Produto_4.jpg" },
                            { id: 21, title: "Linho Natural", price: "22.00€", image: "/imagens/Produto_2.jpg" },
                            { id: 22, title: "Seda Vermelha", price: "45.00€", image: "/imagens/Produto_3.jpg" },
                            { id: 23, title: "Lã Merino", price: "30.00€", image: "/imagens/Produto_4.jpg" },
                        ].map(item => (
                            <Link to={`/mobile/product/${item.id}`} key={item.id} className="bg-white rounded-lg p-1.5 shadow-sm border border-gray-100 active:scale-95 transition-transform">
                                <div className="aspect-square bg-gray-100 rounded-md mb-1 overflow-hidden">
                                    <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                                </div>
                                <h4 className="font-bold text-gray-800 text-[10px] line-clamp-1">{item.title}</h4>
                                <p className="text-[#355130] font-bold text-[10px]">{item.price}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Action Bar */}
            <div className="fixed bottom-24 left-0 right-0 mx-auto max-w-[355px] px-4 z-30">
                <div className="flex gap-2">
                    <Link
                        to={`/mobile/chat/${id}?action=offer`}
                        className="flex-1 bg-[#C9E26C] text-[#355130] py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition-all"
                    >
                        <DollarSign size={16} /> Fazer Oferta
                    </Link>
                    <Link
                        to={`/mobile/chat/${id}`}
                        className="flex-1 bg-[#355130] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition-all"
                    >
                        <MessageCircle size={16} /> Contactar
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileProduct;
