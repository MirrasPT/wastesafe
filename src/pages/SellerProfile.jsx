import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, ShieldCheck, MessageCircle, Calendar, Package, Filter, Search, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const SellerProfile = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('products');
    const [showFilters, setShowFilters] = useState(false);

    // Mock Seller Data
    const seller = {
        id: id || 1,
        name: "EcoTextil Lda",
        type: "Company", // or User
        rating: 4.8,
        reviewsCount: 124,
        verified: true,
        joinDate: "January 2023",
        location: "Porto, Portugal",
        description: "Family textile company dedicated to sustainability. We sell high-quality production surpluses, from leather to technical fabrics. Our goal is to reduce textile waste in Portugal.",
        stats: {
            sold: 1450,
            active: 42,
            responseProps: "Replies in 1h"
        }
    };

    // Filters State
    const [activeFilters, setActiveFilters] = useState({
        categories: [],
        conditions: [],
        qualities: [],
        certificates: [],
        minPrice: '',
        maxPrice: ''
    });

    // Mock Seller Products
    const allProducts = [
        { id: 1, title: "Black Leather 50M", price: "38.50€", category: "Leather", quality: "High", condition: "New", certificates: ["GOTS"], image: "/imagens/Produto_1.jpg" },
        { id: 2, title: "Pink Fabric", price: "12.00€", category: "Printed", quality: "Medium", condition: "Used", certificates: [], image: "/imagens/Produto_2.jpg" },
        { id: 3, title: "Blue Fabric", price: "8.90€", category: "Synthetic", quality: "Low", condition: "Defective", certificates: [], image: "/imagens/Produto_3.jpg" },
        { id: 4, title: "Various Rolls", price: "24.50€", category: "Mixed", quality: "Medium", condition: "New", certificates: ["GOTS", "Oeko-Tex"], image: "/imagens/Produto_4.jpg" },
        { id: 5, title: "White Cotton", price: "15.00€", category: "Cotton", quality: "High", condition: "New", certificates: ["Oeko-Tex"], image: "/imagens/Produto_1.jpg" },
        { id: 6, title: "Natural Linen", price: "22.00€", category: "Linen", quality: "High", condition: "Used", certificates: [], image: "/imagens/Produto_2.jpg" },
    ];

    // Simple Filtering Logic
    const PRODUCTS = useMemo(() => {
        return allProducts.filter(p => {
            if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(p.category)) return false;
            if (activeFilters.conditions.length > 0 && !activeFilters.conditions.includes(p.condition)) return false;
            if (activeFilters.qualities.length > 0 && !activeFilters.qualities.includes(p.quality)) return false;
            if (activeFilters.certificates.length > 0 && !p.certificates.some(c => activeFilters.certificates.includes(c))) return false;
            if (activeFilters.minPrice && parseFloat(p.price.replace('€', '')) < parseFloat(activeFilters.minPrice)) return false;
            if (activeFilters.maxPrice && parseFloat(p.price.replace('€', '')) > parseFloat(activeFilters.maxPrice)) return false;
            return true;
        });
    }, [activeFilters]);

    const reviews = [
        { id: 1, user: "Ana M.", rating: 5, date: "2 days ago", text: "Excellent leather quality! Shipping was very fast. Highly recommend." },
        { id: 2, user: "Carlos S.", rating: 5, date: "1 week ago", text: "Everything as described. Very attentive seller." },
        { id: 3, user: "Beatriz L.", rating: 4, date: "2 weeks ago", text: "The fabric is great, but the color is slightly different from the photo." },
    ];

    const toggleFilter = (type, value) => {
        setActiveFilters(prev => {
            const list = prev[type];
            return {
                ...prev,
                [type]: list.includes(value) ? list.filter(item => item !== value) : [...list, value]
            };
        });
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] relative z-10 w-full animate-in fade-in duration-500 font-sans">
            <div className="waste-container">

                {/* Banner / Header Area */}
                <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 mb-12 relative overflow-hidden">
                    {/* Decorative bg */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9E26C]/10 rounded-bl-[300px] pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-5xl font-bold text-gray-400">
                                {seller.name.charAt(0)}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-[#355130] flex items-center gap-2 mb-2">
                                        {seller.name}
                                        {seller.verified && <ShieldCheck size={28} className="text-blue-500" fill="currentColor" />}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1 text-amber-500 font-bold bg-gray-50 px-2 py-1 rounded-full">
                                            <Star size={14} fill="currentColor" /> {seller.rating} ({seller.reviewsCount} reviews)
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={16} /> {seller.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={16} /> Member since {seller.joinDate}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Link to={`/chat/${seller.id}?context=seller`} className="flex-1 md:flex-none px-6 py-3 bg-[#355130] hover:bg-[#2a4126] text-white rounded-full font-bold shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                                        <MessageCircle size={18} />
                                        Contact
                                    </Link>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
                                {seller.description}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 text-center">
                                    <span className="block text-2xl font-bold text-[#355130]">{seller.stats.sold}</span>
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Sales</span>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 text-center">
                                    <span className="block text-2xl font-bold text-[#355130]">{seller.stats.active}</span>
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Products</span>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 text-center">
                                    <span className="block text-2xl font-bold text-[#355130] flex items-center justify-center gap-1">
                                        {seller.rating} <Star size={16} fill="currentColor" className="text-amber-500" />
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Average Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Tabs */}
                <div className="flex items-center gap-8 mb-8 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`pb-4 text-lg font-bold transition-colors relative ${activeTab === 'products' ? 'text-[#355130]' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        Products for Sale ({PRODUCTS.length})
                        {activeTab === 'products' && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F6EA37] rounded-full" />}
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`pb-4 text-lg font-bold transition-colors relative ${activeTab === 'reviews' ? 'text-[#355130]' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        Reviews
                        {activeTab === 'reviews' && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F6EA37] rounded-full" />}
                    </button>
                </div>

                {/* Products Tab */}
                {activeTab === 'products' && (
                    <div className="animate-in slide-in-from-bottom-4 duration-500">


                        {/* Search/Filter Bar */}
                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="relative w-full md:w-96">
                                    <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search in this store..."
                                        className="w-full pl-12 pr-4 py-3 bg-white rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20"
                                    />
                                </div>
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={`flex items-center gap-2 font-bold px-6 py-3 rounded-full border transition-colors ${showFilters ? 'bg-[#355130] text-white border-[#355130]' : 'bg-white text-[#355130] border-gray-200 hover:bg-gray-50'}`}
                                >
                                    <Filter size={18} /> Filters
                                </button>
                            </div>

                            {/* Filters Panel */}
                            {showFilters && (
                                <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 animate-in slide-in-from-top-2 duration-200">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        <div>
                                            <h4 className="font-bold text-[#355130] mb-3 text-sm">Categories</h4>
                                            <div className="space-y-2">
                                                {['Leather', 'Printed', 'Synthetic', 'Cotton', 'Linen', 'Mixed'].map(cat => (
                                                    <label key={cat} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#355130]">
                                                        <input
                                                            type="checkbox"
                                                            className="rounded border-gray-300 text-[#355130] focus:ring-[#355130]"
                                                            checked={activeFilters.categories.includes(cat)}
                                                            onChange={() => toggleFilter('categories', cat)}
                                                        />
                                                        {cat}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#355130] mb-3 text-sm">Quality & Condition</h4>
                                            <div className="space-y-2">
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Quality</p>
                                                {['High', 'Medium', 'Low'].map(q => (
                                                    <label key={q} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#355130]">
                                                        <input
                                                            type="checkbox"
                                                            className="rounded border-gray-300 text-[#355130] focus:ring-[#355130]"
                                                            checked={activeFilters.qualities.includes(q)}
                                                            onChange={() => toggleFilter('qualities', q)}
                                                        />
                                                        {q}
                                                    </label>
                                                ))}
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-3 mb-1">Condition</p>
                                                {['New', 'Used', 'Defective'].map(cond => (
                                                    <label key={cond} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#355130]">
                                                        <input
                                                            type="checkbox"
                                                            className="rounded border-gray-300 text-[#355130] focus:ring-[#355130]"
                                                            checked={activeFilters.conditions.includes(cond)}
                                                            onChange={() => toggleFilter('conditions', cond)}
                                                        />
                                                        {cond}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#355130] mb-3 text-sm">Certifications</h4>
                                            <div className="space-y-2">
                                                {['GOTS', 'Oeko-Tex', 'GRS'].map(cert => (
                                                    <label key={cert} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#355130]">
                                                        <input
                                                            type="checkbox"
                                                            className="rounded border-gray-300 text-[#355130] focus:ring-[#355130]"
                                                            checked={activeFilters.certificates.includes(cert)}
                                                            onChange={() => toggleFilter('certificates', cert)}
                                                        />
                                                        {cert}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#355130] mb-3 text-sm">Price</h4>
                                            <div className="flex items-center gap-2 mb-4">
                                                <input
                                                    type="number"
                                                    placeholder="Min"
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                                    value={activeFilters.minPrice}
                                                    onChange={(e) => setActiveFilters({ ...activeFilters, minPrice: e.target.value })}
                                                />
                                                <span className="text-gray-400">-</span>
                                                <input
                                                    type="number"
                                                    placeholder="Max"
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                                    value={activeFilters.maxPrice}
                                                    onChange={(e) => setActiveFilters({ ...activeFilters, maxPrice: e.target.value })}
                                                />
                                            </div>
                                            <button
                                                onClick={() => setActiveFilters({ categories: [], conditions: [], qualities: [], certificates: [], minPrice: '', maxPrice: '' })}
                                                className="w-full text-sm font-bold text-gray-400 hover:text-[#355130] border border-gray-200 rounded-lg py-2 hover:bg-gray-50"
                                            >
                                                Clear Filters
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {PRODUCTS.map(p => (
                                <ProductCard key={p.id} {...p} />
                            ))}
                        </div>
                        {PRODUCTS.length === 0 && (
                            <div className="text-center py-12 text-gray-500">
                                No products found with these filters.
                            </div>
                        )}
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl">
                        <div className="space-y-6">
                            {reviews.map(review => (
                                <div key={review.id} className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 flex gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-gray-500">
                                        {review.user.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-bold text-[#355130]">{review.user}</h4>
                                            <span className="text-sm text-gray-400">{review.date}</span>
                                        </div>
                                        <div className="flex text-amber-500 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                                            ))}
                                        </div>
                                        <p className="text-gray-600">{review.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default SellerProfile;
