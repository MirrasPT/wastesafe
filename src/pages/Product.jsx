import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, Star, ShieldCheck, ChevronRight, Package, Heart, DollarSign } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Product = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);

    // Mock Product Data
    const product = {
        id: id || 1,
        title: "Black Leather Premium 50M",
        price: "38.50€",

        description: "Lot of high quality genuine leather, surplus from luxury footwear production. Perfect for leather goods, upholstery or small accessories.",
        category: "Leather",
        type: "Raw Material",
        condition: "New (Surplus)",
        stock: "50 Meters",
        location: "Porto, Portugal",

        // New Fields from PublishAd
        composition: "100% Genuine Leather",
        quality: "High",
        shippingPolicy: "Buyer's Responsibility",
        shippingCost: "5.00€",
        certificates: ["GOTS", "Fair Trade"],
        partialSale: true,

        seller: {
            name: "EcoTextil Lda",
            rating: 4.8,
            reviews: 124,
            verified: true,
            joinDate: "2023"
        },
        images: [
            "/imagens/Produto_1.jpg",
            "/imagens/Produto_2.jpg",
            "/imagens/Produto_3.jpg"
        ]
    };

    // ... (rest of the file until the specs section)

    // Inside the JSX, replacing the previous specs section:


    // Mock Recommended Data
    const moreFromSeller = [
        { id: 2, title: "Pink Fabric", price: "12.00€", oldPrice: null, category: "Printed", image: "/imagens/Produto_2.jpg" },
        { id: 5, title: "White Cotton", price: "15.00€", oldPrice: "18.00€", category: "Cotton", image: "/imagens/Produto_1.jpg" },
        { id: 3, title: "Blue Fabric", price: "8.90€", oldPrice: "15.00€", category: "Synthetic", image: "/imagens/Produto_3.jpg" },
        { id: 4, title: "Mixed Rolls", price: "24.50€", oldPrice: null, category: "Mixed", image: "/imagens/Produto_4.jpg" },
    ];

    const recommended = [
        { id: 4, title: "Mixed Rolls", price: "24.50€", oldPrice: null, category: "Mixed", image: "/imagens/Produto_4.jpg" },
        { id: 6, title: "Natural Linen", price: "22.00€", oldPrice: null, category: "Linen", image: "/imagens/Produto_2.jpg" },
        { id: 7, title: "Red Silk", price: "45.00€", oldPrice: "60.00€", category: "Silk", image: "/imagens/Produto_3.jpg" },
        { id: 8, title: "Merino Wool", price: "30.00€", oldPrice: null, category: "Wool", image: "/imagens/Produto_4.jpg" },
    ];

    return (
        <div className="pt-24 pb-12 min-h-screen bg-[#F9F9F9] relative z-10 w-full animate-in fade-in duration-500 font-sans">
            <div className="waste-container">

                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap">
                    <Link to="/" className="hover:text-[#355130]">Home</Link>
                    <ChevronRight size={14} />
                    <Link to="/catalogo" className="hover:text-[#355130]">Catalog</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#355130] font-semibold truncate">{product.title}</span>
                </nav>

                {/* Main Product Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 items-start">

                    {/* Left Column: Images (Sticky Desktop) */}
                    <div className="space-y-4 lg:sticky lg:top-28 z-10">
                        <div className="aspect-[4/3] w-full rounded-[20px] lg:rounded-[30px] overflow-hidden shadow-sm relative bg-white group">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-1 hide-scrollbar">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-[#355130] ring-2 ring-[#355130]/20' : 'border-transparent opacity-70 hover:opacity-100'} btn-press`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col min-w-0">

                        {/* Header */}
                        <div className="mb-4">

                            <h1 className="text-2xl md:text-4xl font-bold text-waste-green-900 mb-1 leading-tight">
                                {product.title}
                            </h1>
                            <div className="flex items-center gap-2 text-gray-500 text-xs">

                                <span>{product.location}</span>
                            </div>
                        </div>

                        {/* Price & Stock */}
                        <div className="flex items-end gap-4 mb-6 border-b border-gray-100 pb-6">
                            <div className="flex flex-col">
                                <span className="text-3xl md:text-4xl font-bold text-[#355130]">{product.price}</span>
                            </div>
                            <div className="ml-auto flex flex-col items-end">
                                <span className="text-[#355130] font-bold text-sm flex items-center gap-1">
                                    <Package size={16} /> Stock Available
                                </span>
                                <span className="text-gray-600 text-sm">{product.stock}</span>
                            </div>
                        </div>

                        {/* Seller Card (Compact) */}
                        <div className="bg-white p-4 rounded-[20px] border border-[#C9E26C]/30 flex items-center gap-4 relative overflow-hidden mb-6">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#C9E26C]/10 rounded-bl-[60px] pointer-events-none" />
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-400 flex-shrink-0">
                                {product.seller.name.charAt(0)}
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-bold text-base text-[#355130] flex items-center gap-1 truncate">
                                    {product.seller.name}
                                    {product.seller.verified && <ShieldCheck size={16} className="text-blue-500 flex-shrink-0" fill="currentColor" />}
                                </h4>
                                <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                                    <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                                        <Star size={12} fill="currentColor" /> {product.seller.rating}
                                    </span>
                                    <span>({product.seller.reviews})</span>
                                </div>
                            </div>
                            <Link to="/vendedor/1" className="ml-auto text-[#355130] font-semibold text-xs hover:underline whitespace-nowrap">
                                View Profile
                            </Link>
                        </div>

                        <div className="flex gap-3 mb-10">
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className="flex-1 bg-[#355130] hover:bg-[#2a4126] text-white py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 btn-press hover-glow"
                            >
                                <Heart size={18} className={isFavorite ? "fill-white" : ""} />
                                {isFavorite ? "Remove" : "Favorites"}
                            </button>
                            <Link
                                to={`/chat/${product.id}?action=offer`}
                                className="flex-1 bg-[#C9E26C] hover:bg-[#D4E680] text-[#355130] py-3 rounded-full font-bold text-base shadow-sm hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 btn-press hover-glow"
                            >
                                <DollarSign size={18} />
                                Make Offer
                            </Link>
                            <Link
                                to={`/chat/${product.id}`}
                                className="flex-1 bg-[#F6EA37] hover:bg-yellow-300 text-[#355130] py-3 rounded-full font-bold text-base shadow-sm hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 btn-press hover-glow"
                            >
                                <MessageCircle size={18} />
                                Contact
                            </Link>
                        </div>

                        {/* Description & Specs (Compact) */}
                        <h3 className="text-[#355130] font-bold text-lg mb-2">Ad Details</h3>
                        <p className="leading-relaxed mb-6 text-sm bg-white p-4 rounded-2xl border border-gray-100">{product.description}</p>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                            <div className="bg-white p-3 rounded-xl border border-gray-100">
                                <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Condition</span>
                                <span className="block font-semibold text-sm text-gray-800">{product.condition}</span>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-gray-100">
                                <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Composition</span>
                                <span className="block font-semibold text-sm text-gray-800">{product.composition}</span>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-gray-100">
                                <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Quality</span>
                                <span className="block font-semibold text-sm text-gray-800">{product.quality}</span>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-gray-100">
                                <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Shipping</span>
                                <span className="block font-semibold text-sm text-gray-800">{product.shippingPolicy}</span>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-gray-100">
                                <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Shipping Cost</span>
                                <span className="block font-semibold text-sm text-gray-800">{product.shippingCost}</span>
                            </div>
                            <div className="bg-white p-3 rounded-xl border border-gray-100">
                                <span className="block text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Partial Sale</span>
                                <span className="block font-semibold text-sm text-gray-800">{product.partialSale ? "Yes" : "No"}</span>
                            </div>
                        </div>

                        {/* Certificates */}
                        {product.certificates.length > 0 && (
                            <div className="mt-4">
                                <h4 className="text-[#355130] font-bold text-sm mb-2">Certificates</h4>
                                <div className="flex flex-wrap gap-2">
                                    {product.certificates.map((cert, i) => (
                                        <span key={i} className="px-3 py-1 bg-green-50 text-[#355130] text-xs font-bold rounded-full border border-green-100">
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}


                        {/* Store Reviews */}
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h3 className="text-[#355130] font-bold text-lg mb-4">Store Reviews</h3>
                            <div className="space-y-4">
                                {[
                                    { id: 1, user: "Ana M.", rating: 5, date: "2 days ago", text: "Excellent leather quality! Shipping was very fast." },
                                    { id: 2, user: "Carlos S.", rating: 5, date: "1 week ago", text: "Everything as described. Very attentive seller." },
                                    { id: 3, user: "Beatriz L.", rating: 4, date: "2 weeks ago", text: "Fabric is great, but color is slightly different." },
                                ].map(review => (
                                    <div key={review.id} className="bg-white p-4 rounded-xl border border-gray-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                                                    {review.user.charAt(0)}
                                                </div>
                                                <span className="font-bold text-sm text-[#355130]">{review.user}</span>
                                            </div>
                                            <span className="text-xs text-gray-400">{review.date}</span>
                                        </div>
                                        <div className="flex text-amber-500 mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-600">{review.text}</p>
                                    </div>
                                ))}
                            </div>
                            <Link to="/vendedor/1" className="block text-center text-[#355130] font-bold text-sm mt-4 hover:underline">
                                View all reviews
                            </Link>
                        </div>
                    </div>
                </div>

                {/* New Section: More from Seller (Boxed) */}
                <div className="bg-white p-6 md:p-8 rounded-[30px] shadow-sm border border-gray-100 mb-16 relative overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9E26C]/10 rounded-bl-[200px] pointer-events-none -z-0" />

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl font-bold text-gray-400 shadow-sm border border-white">
                                {product.seller.name.charAt(0)}
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-[#355130] mb-1">More from {product.seller.name}</h2>
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <span className="flex items-center gap-1 text-amber-500 font-bold bg-white px-2 py-0.5 rounded-full shadow-sm border border-gray-100">
                                        <Star size={12} fill="currentColor" /> {product.seller.rating}
                                    </span>
                                    <span>({product.seller.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>
                        <Link to="/vendedor/1" className="px-6 py-3 rounded-full border-2 border-[#355130]/10 text-[#355130] font-bold hover:bg-[#355130] hover:text-white transition-all text-sm whitespace-nowrap bg-white/50 backdrop-blur-sm btn-press hover-glow">
                            View Store Profile
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
                        {moreFromSeller.map(p => (
                            <div key={p.id}>
                                <ProductCard {...p} id={p.id} className="h-[280px]" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* New Section: Recommended */}
                <div className="mb-32">
                    <h2 className="text-2xl font-bold text-[#355130] mb-6">Recommended Items</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {recommended.map(p => (
                            <ProductCard key={p.id} {...p} id={p.id} className="h-[280px]" />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;
