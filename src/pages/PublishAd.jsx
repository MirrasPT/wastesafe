import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, DollarSign, MapPin, Check, Info, ArrowRight, X, Zap, ChevronRight } from 'lucide-react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const PublishAd = () => {
    const [images, setImages] = useState([]);
    const [dragActive, setDragActive] = useState(false);
    const [parent] = useAutoAnimate();
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const [showPromoteModal, setShowPromoteModal] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        location: '',
        description: '',
        productType: '',
        composition: '',
        quality: '',
        condition: '',
        certificates: [],
        partialSale: false,
        shippingPolicy: "Buyer's Responsibility",
        shippingCost: ''
    });

    // Sections Visibility State
    const [visibleSections, setVisibleSections] = useState({
        details: false,
        photos: false,
        shipping: false,
        submit: false
    });

    // Updates visibility based on form progress
    useEffect(() => {
        const basicInfoComplete = formData.title && formData.price && formData.location && formData.description;
        const detailsComplete = basicInfoComplete && formData.productType && formData.composition && formData.quality && formData.condition;
        const photosComplete = detailsComplete && images.length > 0;
        const shippingComplete = photosComplete && formData.shippingPolicy && formData.shippingCost;

        setVisibleSections({
            details: basicInfoComplete,
            photos: detailsComplete,
            shipping: photosComplete,
            submit: shippingComplete
        });

    }, [images, formData]);

    // Handle Global Drag Events
    useEffect(() => {
        const handleWindowDragOver = (e) => {
            e.preventDefault();
            e.stopPropagation();
            // Only show overlay if we drag file
            if (e.dataTransfer.types.includes('Files')) {
                setDragActive(true);
            }
        };

        const handleWindowDrop = (e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                const newFiles = Array.from(e.dataTransfer.files).map(file => URL.createObjectURL(file));
                setImages(prev => [...prev, ...newFiles]);
            }
        };

        const handleWindowDragLeave = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.relatedTarget === null || e.currentTarget === document) {
                setDragActive(false);
            }
        };

        window.addEventListener('dragenter', handleWindowDragOver);
        window.addEventListener('dragover', handleWindowDragOver);
        window.addEventListener('dragleave', handleWindowDragLeave);
        window.addEventListener('drop', handleWindowDrop);

        return () => {
            window.removeEventListener('dragenter', handleWindowDragOver);
            window.removeEventListener('dragover', handleWindowDragOver);
            window.removeEventListener('dragleave', handleWindowDragLeave);
            window.removeEventListener('drop', handleWindowDrop);
        };
    }, []);


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleCertificateChange = (cert) => {
        setFormData(prev => {
            const certs = prev.certificates.includes(cert)
                ? prev.certificates.filter(c => c !== cert)
                : [...prev.certificates, cert];
            return { ...prev, certificates: certs };
        });
    };

    const handleImageUpload = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            const newFiles = Array.from(e.target.files).map(file => URL.createObjectURL(file));
            setImages([...images, ...newFiles]);
        }
    };

    // Trigger file input click
    const openFileDialog = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPromoteModal(true);
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] relative z-10 w-full animate-in fade-in duration-500 font-sans flex justify-center">

            {/* Full Screen Drag Overlay */}
            {dragActive && (
                <div
                    className="fixed inset-0 z-[60] bg-[#355130]/95 backdrop-blur-md flex flex-col items-center justify-center text-white cursor-pointer transition-all animate-in fade-in duration-300"
                    onClick={() => { openFileDialog(); setDragActive(false); }}
                    onDragLeave={(e) => {
                        e.preventDefault();
                        // Close if we leave the window
                        if (!e.relatedTarget) setDragActive(false);
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDragActive(false);
                        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                            const newFiles = Array.from(e.dataTransfer.files).map(file => URL.createObjectURL(file));
                            setImages(prev => [...prev, ...newFiles]);
                        }
                    }}
                >
                    <div className="pointer-events-none flex flex-col items-center">
                        <Upload className="w-24 h-24 mb-6" />
                        <h2 className="text-4xl font-bold mb-2">Drop images here</h2>
                        <p className="text-xl opacity-80 mt-2">or click anywhere to select</p>
                    </div>
                </div>
            )}

            <div className="waste-container">
                <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-lg border border-gray-100 relative overflow-hidden transition-all duration-500 ease-in-out">

                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-[#355130] mb-3">Publish Ad</h1>
                        <p className="text-gray-500 text-lg">Give your textile surplus a new life.</p>
                    </div>

                    <form ref={parent} className="space-y-12" onSubmit={handleSubmit}>
                        {/* Hidden Input for Global Access */}
                        <input ref={fileInputRef} type="file" className="hidden" multiple onChange={handleImageUpload} />

                        {/* Section 1: Basic Info (Always Visible) */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#355130] border-b border-gray-100 pb-4 flex items-center gap-3">
                                1. Basic Information
                            </h2>

                            {/* Title */}
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">Ad Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Ex: Organic Cotton Roll 50m"
                                    className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Price */}
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Price (€)</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            placeholder="0.00"
                                            className="w-full pl-10 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                {/* Location */}
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            placeholder="City, Country"
                                            className="w-full pl-10 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">Description</label>
                                <textarea
                                    rows="4"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Describe your product in detail..."
                                    className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* Section 2: Details */}
                        {visibleSections.details && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-[#355130] border-b border-gray-100 pb-4 flex items-center gap-3">
                                    2. Product Details
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Type */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Product Type</label>
                                        <select
                                            name="productType"
                                            value={formData.productType}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium text-gray-600 cursor-pointer appearance-none"
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="materia_prima">Raw Material</option>
                                            <option value="resto_colecao">Collection Leftover</option>
                                            <option value="defeito">Defective Item</option>
                                        </select>
                                    </div>

                                    {/* Composition */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Composition</label>
                                        <input
                                            type="text"
                                            name="composition"
                                            value={formData.composition}
                                            onChange={handleInputChange}
                                            placeholder="Ex: 100% Cotton"
                                            className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                        />
                                    </div>

                                    {/* Quality */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Quality</label>
                                        <select
                                            name="quality"
                                            value={formData.quality}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium text-gray-600 cursor-pointer appearance-none"
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="alta">High</option>
                                            <option value="media">Medium</option>
                                            <option value="baixa">Low</option>
                                            <option value="fim_vida">End of Life</option>
                                        </select>
                                    </div>

                                    {/* Condition */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Condition</label>
                                        <select
                                            name="condition"
                                            value={formData.condition}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium text-gray-600 cursor-pointer appearance-none"
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="novo">New</option>
                                            <option value="usado">Used</option>
                                            <option value="com_defeito">Defective</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Certificates */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Certificates</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['GOTS', 'Oeko-Tex', 'GRS', 'Fair Trade', 'Better Cotton'].map((cert) => (
                                            <label key={cert} className="inline-flex items-center cursor-pointer select-none">
                                                <input
                                                    type="checkbox"
                                                    className="peer hidden"
                                                    checked={formData.certificates.includes(cert)}
                                                    onChange={() => handleCertificateChange(cert)}
                                                />
                                                <span className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-sm font-medium transition-all peer-checked:bg-[#355130] peer-checked:text-white peer-checked:border-[#355130] hover:bg-gray-50 hover:border-gray-300">
                                                    {cert}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Section 3: Photos */}
                        {visibleSections.photos && (
                            <div className="space-y-4 transition-all duration-500">
                                <label className="text-2xl font-bold text-[#355130] flex items-center gap-3">
                                    3. Photos <span className="text-sm font-normal text-gray-400">(Required)</span>
                                </label>

                                <div
                                    className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-[30px] bg-gray-50 hover:border-[#355130] hover:bg-gray-100 transition-all cursor-pointer group"
                                    onClick={openFileDialog}
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                                            <Upload className="w-7 h-7 text-[#355130]" />
                                        </div>
                                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold text-[#355130]">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-400">You can drag anywhere on the screen</p>
                                    </div>
                                </div>

                                {/* Image Previews */}
                                {images.length > 0 && (
                                    <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-4">
                                        {images.map((img, index) => (
                                            <div key={index} className="relative aspect-square rounded-xl overflow-hidden group shadow-md border border-gray-100">
                                                <img src={img} alt="Preview" className="w-full h-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => setImages(images.filter((_, i) => i !== index))}
                                                    className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-500 cursor-pointer"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Section 4: Sales & Shipping */}
                        {visibleSections.shipping && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-[#355130] border-b border-gray-100 pb-4 flex items-center gap-3">
                                    4. Sale and Shipping
                                </h2>

                                {/* Allow Partial Sale */}
                                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-[#355130]/30 transition-colors">
                                    <div>
                                        <h3 className="font-bold text-gray-700">Allow Partial Sale?</h3>
                                        <p className="text-sm text-gray-500">Accept selling only a part of the lot.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="partialSale"
                                            checked={formData.partialSale}
                                            onChange={handleInputChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#C9E26C]/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#355130]"></div>
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Shipping Policy */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Shipping Policy</label>
                                        <select
                                            name="shippingPolicy"
                                            value={formData.shippingPolicy}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium text-gray-600 cursor-pointer appearance-none"
                                        >
                                            <option>Buyer's Responsibility</option>
                                            <option>Seller's Responsibility</option>
                                            <option>To be agreed</option>
                                        </select>
                                    </div>

                                    {/* Shipping Cost */}
                                    <div className="space-y-1">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Estimated Shipping Cost (€)</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                            <input
                                                type="number"
                                                name="shippingCost"
                                                value={formData.shippingCost}
                                                onChange={handleInputChange}
                                                placeholder="0.00"
                                                className="w-full pl-10 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        {visibleSections.submit && (
                            <div className="pt-4">
                                <button type="submit" className="w-full bg-[#355130] hover:bg-[#2a4126] text-white py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                                    Publish Ad
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}

                    </form>
                </div>
            </div>

            {/* Promote Modal */}
            {showPromoteModal && (
                <div className="fixed inset-0 bg-black/60 z-[70] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-[40px] p-8 max-w-lg w-full relative shadow-2xl animate-in zoom-in-95 duration-200">
                        {/* Close button handled as 'publish without promotion' essentially, or just close modal */}
                        <button
                            onClick={() => setShowPromoteModal(false)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 btn-press"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center mb-8">
                            <div className="bg-[#F6EA37] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap size={40} className="text-[#355130]" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#355130] mb-2">Ad Almost Ready!</h3>
                            <p className="text-gray-500 font-medium">Boost your sales by promoting your ad.</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="border-2 border-[#C9E26C] bg-[#FDFFE5] p-5 rounded-2xl flex items-center justify-between cursor-pointer relative shadow-md transform hover:scale-[1.02] transition-all">
                                <div className="absolute -top-3 left-4 bg-[#355130] text-white text-[10px] font-bold px-3 py-1 rounded-full">Recommended</div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-[#355130] text-[#355130]">
                                        <Zap size={20} fill="#355130" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#355130] text-lg">Pro Highlight</p>
                                        <p className="text-xs text-[#355130]/70">15 days on Homepage</p>
                                    </div>
                                </div>
                                <span className="font-bold text-2xl text-[#355130]">7,99€</span>
                            </div>

                            <div className="border border-gray-100 p-5 rounded-2xl flex items-center justify-between cursor-pointer hover:border-gray-200 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                        <ArrowRight size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-600 text-lg">Quick Boost</p>
                                        <p className="text-xs text-gray-400">7 days at top of category</p>
                                    </div>
                                </div>
                                <span className="font-bold text-xl text-gray-600">4,99€</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => { setShowPromoteModal(false); alert('Redirecting to payment...'); navigate('/perfil'); }}
                                className="w-full bg-[#355130] text-white py-4 rounded-full font-bold text-lg hover:bg-[#2a4126] transition-all btn-press flex items-center justify-center gap-2"
                            >
                                Pay and Highlight <ChevronRight size={20} />
                            </button>

                            <button
                                onClick={() => { setShowPromoteModal(false); navigate('/perfil'); }}
                                className="w-full bg-transparent text-gray-500 py-3 rounded-full font-bold hover:bg-gray-50 transition-all btn-press"
                            >
                                Publish without highlight
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default PublishAd;
