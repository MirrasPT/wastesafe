import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, ChevronRight, ChevronLeft, X, DollarSign, MapPin, Zap, Check, Sparkles } from 'lucide-react';

const MobilePublish = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [images, setImages] = useState([]);
    const [selectedPromo, setSelectedPromo] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const totalSteps = 5;

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
        shippingPolicy: 'A cargo do Comprador',
        shippingCost: ''
    });

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
        if (e.target.files && e.target.files[0]) {
            const newFiles = Array.from(e.target.files).map(file => URL.createObjectURL(file));
            setImages([...images, ...newFiles]);
        }
    };

    const openFileDialog = () => {
        fileInputRef.current?.click();
    };

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return formData.title && formData.price && formData.location && formData.description;
            case 2:
                return formData.productType && formData.composition && formData.quality && formData.condition;
            case 3:
                return images.length > 0;
            case 4:
                return formData.shippingCost;
            case 5:
                return true;
            default:
                return false;
        }
    };

    const nextStep = () => {
        if (currentStep < totalSteps && canProceed()) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handlePublish = () => {
        navigate('/mobile/profile');
    };

    const stepLabels = ['Info', 'Detalhes', 'Fotos', 'Envio', 'Destaque'];

    return (
        <div className="h-full bg-gray-50 flex flex-col">
            {/* Compact Header with Progress */}
            <div className="bg-white px-3 py-2 shadow-sm sticky top-0 z-20">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-1">
                        {currentStep > 1 && (
                            <button onClick={prevStep} className="p-0.5 rounded-full hover:bg-gray-100">
                                <ChevronLeft size={18} className="text-[#355130]" />
                            </button>
                        )}
                        <h1 className="text-sm font-bold text-[#355130]">
                            {currentStep === 5 ? 'Destaque' : `Passo ${currentStep}`}
                        </h1>
                    </div>
                    <span className="text-[10px] font-medium text-gray-400">{currentStep}/{totalSteps}</span>
                </div>
                <div className="flex gap-0.5">
                    {stepLabels.map((label, index) => (
                        <div key={index} className="flex-1">
                            <div
                                className={`h-1 w-full rounded-full transition-colors ${index + 1 <= currentStep ? 'bg-[#355130]' : 'bg-gray-200'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 px-3 py-2 overflow-y-auto pb-20">
                <input ref={fileInputRef} type="file" className="hidden" multiple onChange={handleImageUpload} />

                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                    <div className="space-y-2 animate-in slide-in-from-right duration-300">
                        <h2 className="text-sm font-bold text-gray-800 mb-2">Informação Básica</h2>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Título do Anúncio</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Ex: Rolo de Algodão 50m"
                                className="w-full bg-white p-2.5 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm"
                            />
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Preço (€)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={12} />
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        placeholder="0.00"
                                        className="w-full bg-white p-2.5 pl-7 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Localização</label>
                                <div className="relative">
                                    <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={12} />
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        placeholder="Cidade"
                                        className="w-full bg-white p-2.5 pl-7 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Descrição</label>
                            <textarea
                                rows="2"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Descreva o produto..."
                                className="w-full bg-white p-2.5 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm resize-none"
                            ></textarea>
                        </div>
                    </div>
                )}

                {/* Step 2: Details */}
                {currentStep === 2 && (
                    <div className="space-y-3 animate-in slide-in-from-right duration-300">
                        <h2 className="text-sm font-bold text-gray-800 mb-3">Detalhes do Produto</h2>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Tipo de Produto</label>
                            <select
                                name="productType"
                                value={formData.productType}
                                onChange={handleInputChange}
                                className="w-full bg-white p-3 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm appearance-none"
                            >
                                <option value="" disabled>Selecione...</option>
                                <option value="materia_prima">Matéria Prima</option>
                                <option value="resto_colecao">Resto de Coleção</option>
                                <option value="defeito">Peça com Defeito</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Composição</label>
                            <input
                                type="text"
                                name="composition"
                                value={formData.composition}
                                onChange={handleInputChange}
                                placeholder="Ex: 100% Algodão"
                                className="w-full bg-white p-3 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm"
                            />
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Qualidade</label>
                                <select
                                    name="quality"
                                    value={formData.quality}
                                    onChange={handleInputChange}
                                    className="w-full bg-white p-3 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm appearance-none"
                                >
                                    <option value="" disabled>Selecione...</option>
                                    <option value="alta">Alta</option>
                                    <option value="media">Média</option>
                                    <option value="baixa">Baixa</option>
                                    <option value="fim_vida">Fim de Vida</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Estado</label>
                                <select
                                    name="condition"
                                    value={formData.condition}
                                    onChange={handleInputChange}
                                    className="w-full bg-white p-3 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm appearance-none"
                                >
                                    <option value="" disabled>Selecione...</option>
                                    <option value="novo">Novo</option>
                                    <option value="usado">Usado</option>
                                    <option value="com_defeito">Defeito</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Certificados</label>
                            <div className="flex flex-wrap gap-1.5">
                                {['GOTS', 'Oeko-Tex', 'GRS', 'Fair Trade'].map((cert) => (
                                    <button
                                        key={cert}
                                        type="button"
                                        onClick={() => handleCertificateChange(cert)}
                                        className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold border transition-colors ${formData.certificates.includes(cert)
                                            ? 'bg-[#355130] text-white border-[#355130]'
                                            : 'bg-white text-gray-600 border-gray-200'
                                            }`}
                                    >
                                        {cert}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Photos */}
                {currentStep === 3 && (
                    <div className="space-y-3 animate-in slide-in-from-right duration-300">
                        <h2 className="text-sm font-bold text-gray-800 mb-2">Fotografias</h2>
                        <p className="text-xs text-gray-500 mb-3">Adicione pelo menos uma foto.</p>

                        <div className="grid grid-cols-3 gap-2">
                            <button
                                type="button"
                                onClick={openFileDialog}
                                className="aspect-square bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 gap-0.5 active:scale-95 transition-transform"
                            >
                                <Camera size={22} />
                                <span className="text-[9px] font-bold">Adicionar</span>
                            </button>

                            {images.map((img, index) => (
                                <div key={index} className="aspect-square bg-gray-200 rounded-xl relative overflow-hidden">
                                    <img src={img} className="w-full h-full object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => setImages(images.filter((_, i) => i !== index))}
                                        className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-0.5"
                                    >
                                        <X size={12} />
                                    </button>
                                    {index === 0 && (
                                        <span className="absolute bottom-1 left-1 bg-[#355130] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                                            Principal
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 4: Shipping */}
                {currentStep === 4 && (
                    <div className="space-y-3 animate-in slide-in-from-right duration-300">
                        <h2 className="text-sm font-bold text-gray-800 mb-3">Envio e Venda</h2>

                        <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-100">
                            <span className="text-xs font-bold text-gray-700">Venda Parcial?</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="partialSale"
                                    checked={formData.partialSale}
                                    onChange={handleInputChange}
                                    className="sr-only peer"
                                />
                                <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#355130]"></div>
                            </label>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Transporte</label>
                            <select
                                name="shippingPolicy"
                                value={formData.shippingPolicy}
                                onChange={handleInputChange}
                                className="w-full bg-white p-3 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm appearance-none"
                            >
                                <option>A cargo do Comprador</option>
                                <option>A cargo do Vendedor</option>
                                <option>A combinar</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Custo Estimado (€)</label>
                            <input
                                type="number"
                                name="shippingCost"
                                value={formData.shippingCost}
                                onChange={handleInputChange}
                                placeholder="0.00"
                                className="w-full bg-white p-3 rounded-xl border border-gray-200 outline-none focus:border-[#355130] text-gray-800 font-medium text-sm"
                            />
                        </div>
                    </div>
                )}

                {/* Step 5: Promote */}
                {currentStep === 5 && (
                    <div className="space-y-3 animate-in slide-in-from-right duration-300">
                        <div className="text-center mb-4">
                            <div className="inline-flex bg-gradient-to-br from-[#F6EA37] to-[#f0d000] w-12 h-12 rounded-full items-center justify-center mb-3 shadow-lg shadow-[#F6EA37]/30">
                                <Sparkles size={24} className="text-[#355130]" />
                            </div>
                            <h2 className="text-base font-bold text-gray-800">Destaque o seu anúncio</h2>
                            <p className="text-xs text-gray-500 mt-1">Venda mais rápido com maior visibilidade</p>
                        </div>

                        <div className="space-y-2">
                            <button
                                type="button"
                                onClick={() => setSelectedPromo('pro')}
                                className={`w-full p-3 rounded-xl border-2 transition-all text-left ${selectedPromo === 'pro'
                                    ? 'border-[#355130] bg-[#355130]/5'
                                    : 'border-gray-200 bg-white'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-[#355130] flex items-center gap-1.5 text-sm">
                                        <Zap size={14} /> Destaque Pro
                                    </span>
                                    <span className="font-bold text-[#355130] text-sm">7,99€</span>
                                </div>
                                <p className="text-[10px] text-gray-500">7 dias no topo • Badge especial • 5x mais visualizações</p>
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedPromo('boost')}
                                className={`w-full p-3 rounded-xl border-2 transition-all text-left ${selectedPromo === 'boost'
                                    ? 'border-[#355130] bg-[#355130]/5'
                                    : 'border-gray-200 bg-white'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-gray-700 text-sm">Boost Rápido</span>
                                    <span className="font-bold text-gray-700 text-sm">4,99€</span>
                                </div>
                                <p className="text-[10px] text-gray-500">3 dias em destaque • 2x mais visualizações</p>
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedPromo(null)}
                                className={`w-full p-3 rounded-xl border-2 transition-all text-left ${selectedPromo === null
                                    ? 'border-[#355130] bg-[#355130]/5'
                                    : 'border-gray-200 bg-white'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-600 text-sm">Sem destaque</span>
                                    <span className="font-medium text-gray-400 text-sm">Grátis</span>
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-20 left-0 right-0 mx-auto max-w-[355px] p-3 z-30">
                {currentStep < totalSteps ? (
                    <button
                        onClick={nextStep}
                        disabled={!canProceed()}
                        className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 transition-all ${canProceed()
                            ? 'bg-[#355130] text-white shadow-lg shadow-[#355130]/30 active:scale-[0.98]'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        Seguinte <ChevronRight size={16} />
                    </button>
                ) : (
                    <button
                        onClick={handlePublish}
                        className="w-full bg-[#355130] text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-[#355130]/30 active:scale-[0.98] transition-all"
                    >
                        <Check size={16} /> Publicar Anúncio
                    </button>
                )}
            </div>
        </div>
    );
};

export default MobilePublish;
