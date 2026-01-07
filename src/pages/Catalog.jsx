import { useState } from 'react';
import { Filter, X, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Catalog = () => {
    // Sample Product Data with Types
    const allProducts = [
        { id: 1, title: "Black Leather 50M", price: "38.50€", oldPrice: "40.50€", category: "Leather", type: "Raw Material", image: "/imagens/Produto_1.jpg", location: "Porto", quality: "High", condition: "New", certificates: ["Oeko-Tex"] },
        { id: 2, title: "Pink Fabric", price: "12.00€", oldPrice: null, category: "Printed", type: "Collection Leftovers", image: "/imagens/Produto_2.jpg", location: "Lisbon", quality: "Medium", condition: "Used", certificates: [] },
        { id: 3, title: "Blue Fabric", price: "8.90€", oldPrice: "15.00€", category: "Synthetic", type: "Defective Items", image: "/imagens/Produto_3.jpg", location: "Braga", quality: "Low", condition: "Defective", certificates: ["GRS"] },
        { id: 4, title: "Various Rolls", price: "24.50€", oldPrice: null, category: "Mixed", type: "Collection Leftovers", image: "/imagens/Produto_4.jpg", location: "Porto", quality: "Medium", condition: "New", certificates: [] },
        { id: 5, title: "White Cotton", price: "15.00€", oldPrice: "18.00€", category: "Cotton", type: "Raw Material", image: "/imagens/Produto_1.jpg", location: "Guimarães", quality: "High", condition: "New", certificates: ["GOTS", "Better Cotton"] },
        { id: 6, title: "Natural Linen", price: "22.00€", oldPrice: null, category: "Linen", type: "Raw Material", image: "/imagens/Produto_2.jpg", location: "Lisbon", quality: "High", condition: "New", certificates: ["Fair Trade"] },
        { id: 7, title: "Red Silk", price: "45.00€", oldPrice: "60.00€", category: "Silk", type: "Raw Material", image: "/imagens/Produto_3.jpg", location: "Porto", quality: "High", condition: "New", certificates: ["Oeko-Tex"] },
        { id: 8, title: "Merino Wool", price: "30.00€", oldPrice: null, category: "Wool", type: "Collection Leftovers", image: "/imagens/Produto_4.jpg", location: "Covilhã", quality: "High", condition: "Used", certificates: ["RWS"] },
    ];

    const [products, setProducts] = useState(allProducts);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [animationParent] = useAutoAnimate();

    const [activeFilters, setActiveFilters] = useState({
        type: 'All',
        category: 'All',
        condition: 'All',
        quality: 'All',
        location: 'All',
        certificates: [],
        minPrice: '',
        maxPrice: '',
    });

    // Mobile temp filters state
    const [tempFilters, setTempFilters] = useState(activeFilters);

    // Extract filtering logic
    const filterProducts = (filters) => {
        let filtered = allProducts;
        if (filters.type !== 'All') filtered = filtered.filter(p => p.type === filters.type);
        if (filters.category !== 'All') filtered = filtered.filter(p => p.category === filters.category);
        if (filters.condition !== 'All') filtered = filtered.filter(p => p.condition === filters.condition);
        if (filters.quality !== 'All') filtered = filtered.filter(p => p.quality === filters.quality);
        if (filters.location !== 'All') filtered = filtered.filter(p => p.location === filters.location);

        if (filters.certificates.length > 0) {
            filtered = filtered.filter(p =>
                p.certificates.some(cert => filters.certificates.includes(cert))
            );
        }

        setProducts(filtered);
    };

    // Desktop: Apply immediately
    const handleFilterChange = (key, value) => {
        const newFilters = { ...activeFilters, [key]: value };
        setActiveFilters(newFilters);
        filterProducts(newFilters);
    };

    // Handle Certificate Changes (Multi-select)
    const handleCertificateChange = (cert, isMobile = false) => {
        const currentFilters = isMobile ? tempFilters : activeFilters;
        const currentCerts = currentFilters.certificates;

        let newCerts;
        if (currentCerts.includes(cert)) {
            newCerts = currentCerts.filter(c => c !== cert);
        } else {
            newCerts = [...currentCerts, cert];
        }

        if (isMobile) {
            setTempFilters({ ...tempFilters, certificates: newCerts });
        } else {
            const newFilters = { ...activeFilters, certificates: newCerts };
            setActiveFilters(newFilters);
            filterProducts(newFilters);
        }
    };

    // Mobile: Update temp only
    const handleMobileFilterChange = (key, value) => {
        setTempFilters({ ...tempFilters, [key]: value });
    };

    const applyMobileFilters = () => {
        setActiveFilters(tempFilters);
        filterProducts(tempFilters);
        setMobileFiltersOpen(false);
    };

    const openMobileFilters = () => {
        setTempFilters(activeFilters);
        setMobileFiltersOpen(true);
    };

    // Filter Options
    const types = ["All", "Raw Material", "Collection Leftovers", "Defective Items"];
    const categories = ["All", "Leather", "Printed", "Synthetic", "Mixed", "Cotton", "Linen", "Silk", "Wool"];
    const conditions = ["All", "New", "Used", "Defective"];
    const qualities = ["All", "High", "Medium", "Low"];
    const locations = ["All", "Porto", "Lisbon", "Braga", "Guimarães", "Covilhã"];
    const allCertificates = ["GOTS", "Oeko-Tex", "GRS", "Fair Trade", "Better Cotton", "RWS"];

    // Reusable Radio Filter Section
    const RadioFilterSection = ({ title, options, activeValue, name, onChange }) => (
        <div className="mb-8">
            <h4 className="font-semibold text-waste-green-900 mb-4">{title}</h4>
            <div className="space-y-2">
                {options.map(opt => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="radio"
                            name={name}
                            className="w-4 h-4 accent-[#355130] cursor-pointer"
                            checked={activeValue === opt}
                            onChange={() => onChange(opt)}
                        />
                        <span className={`text-sm ${activeValue === opt ? 'text-[#355130] font-bold' : 'text-gray-500 group-hover:text-[#355130] transition-colors'}`}>
                            {opt}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );

    return (
        <div className="pt-32 pb-24 min-h-screen bg-transparent relative z-10 w-full animate-in fade-in duration-500">
            <div className="waste-container">

                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-waste-green-900 mb-4">Product Catalog</h1>
                    <p className="text-gray-500 max-w-2xl">Explore our complete selection of textile surplus and dead stock.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Filters Sidebar (Desktop) */}
                    <aside className="hidden lg:block w-72 flex-shrink-0 space-y-8">
                        <div className="bg-white p-6 rounded-[30px] shadow-sm border border-gray-100 sticky top-32 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
                            <h3 className="flex items-center gap-2 font-bold text-xl text-waste-green-900 mb-6 sticky top-0 bg-white z-10 py-2 border-b border-gray-50">
                                <Filter size={20} /> Filters
                            </h3>

                            <RadioFilterSection
                                title="Product Type"
                                options={types}
                                activeValue={activeFilters.type}
                                name="desktop_type"
                                onChange={(val) => handleFilterChange('type', val)}
                            />

                            <RadioFilterSection
                                title="Material / Category"
                                options={categories}
                                activeValue={activeFilters.category}
                                name="desktop_category"
                                onChange={(val) => handleFilterChange('category', val)}
                            />

                            <RadioFilterSection
                                title="Condition"
                                options={conditions}
                                activeValue={activeFilters.condition}
                                name="desktop_condition"
                                onChange={(val) => handleFilterChange('condition', val)}
                            />

                            <RadioFilterSection
                                title="Quality"
                                options={qualities}
                                activeValue={activeFilters.quality}
                                name="desktop_quality"
                                onChange={(val) => handleFilterChange('quality', val)}
                            />

                            <RadioFilterSection
                                title="Location"
                                options={locations}
                                activeValue={activeFilters.location}
                                name="desktop_location"
                                onChange={(val) => handleFilterChange('location', val)}
                            />

                            {/* Certificates (Checkbox) */}
                            <div className="mb-8">
                                <h4 className="font-semibold text-waste-green-900 mb-4">Certification</h4>
                                <div className="space-y-2">
                                    {allCertificates.map(cert => (
                                        <label key={cert} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${activeFilters.certificates.includes(cert) ? 'bg-[#355130] border-[#355130]' : 'border-gray-300 bg-white'}`}>
                                                {activeFilters.certificates.includes(cert) && <Check size={10} className="text-white" />}
                                            </div>
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={activeFilters.certificates.includes(cert)}
                                                onChange={() => handleCertificateChange(cert)}
                                            />
                                            <span className={`text-sm ${activeFilters.certificates.includes(cert) ? 'text-[#355130] font-bold' : 'text-gray-500 group-hover:text-[#355130]'}`}>
                                                {cert}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="pb-4">
                                <h4 className="font-semibold text-waste-green-900 mb-4">Price (€)</h4>
                                <div className="flex gap-2">
                                    <input type="number" placeholder="Min" className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#355130]" />
                                    <input type="number" placeholder="Max" className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#355130]" />
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-6 flex justify-between items-center">
                        <button
                            onClick={openMobileFilters}
                            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm text-waste-green-900 font-bold"
                        >
                            <Filter size={18} /> Filters
                        </button>
                        <span className="text-gray-500 text-sm">{products.length} Products</span>
                    </div>

                    {/* Mobile Filter Overlay (Full Page) */}
                    {mobileFiltersOpen && (
                        <div className="fixed inset-0 z-[60] bg-white lg:hidden animate-in slide-in-from-bottom duration-300 flex flex-col">
                            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                                <h3 className="font-bold text-2xl text-waste-green-900">Filters</h3>
                                <button onClick={() => setMobileFiltersOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                    <X size={28} className="text-gray-500" />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto flex-1 pb-32">
                                {/* Mobile Filters Content */}
                                <div className="space-y-8">
                                    {/* Helper Component for Mobile Radios */}
                                    {[
                                        { title: "Product Type", options: types, val: tempFilters.type, key: 'type' },
                                        { title: "Material / Category", options: categories, val: tempFilters.category, key: 'category' },
                                        { title: "Condition", options: conditions, val: tempFilters.condition, key: 'condition' },
                                        { title: "Quality", options: qualities, val: tempFilters.quality, key: 'quality' },
                                        { title: "Location", options: locations, val: tempFilters.location, key: 'location' },
                                    ].map(section => (
                                        <div key={section.key} className="mb-4">
                                            <h4 className="font-bold text-lg text-waste-green-900 mb-4">{section.title}</h4>
                                            <div className="space-y-3">
                                                {section.options.map(opt => (
                                                    <label key={opt} className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50/50 active:scale-[0.98] transition-all">
                                                        <span className={`text-base ${section.val === opt ? 'text-[#355130] font-bold' : 'text-gray-600'}`}>{opt}</span>
                                                        <input
                                                            type="radio"
                                                            name={`mobile_${section.key}`}
                                                            className="w-5 h-5 accent-[#355130]"
                                                            checked={section.val === opt}
                                                            onChange={() => handleMobileFilterChange(section.key, opt)}
                                                        />
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Mobile Certificates */}
                                    <div className="mb-4">
                                        <h4 className="font-bold text-lg text-waste-green-900 mb-4">Certification</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {allCertificates.map(cert => (
                                                <button
                                                    key={cert}
                                                    onClick={() => handleCertificateChange(cert, true)}
                                                    className={`px-4 py-2 rounded-full border text-sm font-bold transition-all ${tempFilters.certificates.includes(cert)
                                                        ? 'bg-[#355130] text-white border-[#355130]'
                                                        : 'bg-white text-gray-600 border-gray-200'
                                                        }`}
                                                >
                                                    {cert}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div>
                                        <h4 className="font-bold text-lg text-waste-green-900 mb-4">Price (€)</h4>
                                        <div className="flex gap-4">
                                            <input type="number" placeholder="Min" className="w-full bg-gray-50 rounded-xl px-4 py-3 text-base outline-none focus:ring-1 focus:ring-[#355130]" />
                                            <input type="number" placeholder="Max" className="w-full bg-gray-50 rounded-xl px-4 py-3 text-base outline-none focus:ring-1 focus:ring-[#355130]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sticky Bottom Actions */}
                            <div className="p-6 border-t border-gray-100 bg-white">
                                <button
                                    onClick={applyMobileFilters}
                                    className="w-full bg-[#355130] text-white font-bold py-4 rounded-full text-lg shadow-lg hover:bg-[#2a4126] transition-colors btn-press"
                                >
                                    View Results
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" ref={animationParent}>
                            {products.map(p => (
                                <ProductCard key={p.id} {...p} />
                            ))}
                        </div>
                        {products.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                No products found with these filters.
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Catalog;
