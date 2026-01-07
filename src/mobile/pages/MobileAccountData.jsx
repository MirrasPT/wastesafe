import { useState } from 'react';
import { ChevronLeft, Info, Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileAccountData = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: 'Renato Ferreira',
        companyName: 'WasteSafe Lda',
        email: 'renato@wastesafe.pt',
        phone: '+351 912 345 678',
        nif: '123456789'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center gap-3 sticky top-0 z-10">
                <button onClick={() => navigate(-1)} className="p-1">
                    <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <h1 className="text-base font-bold text-[#355130]">Dados da Conta</h1>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 pb-24">
                {/* Privacy Warning */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6 flex gap-3">
                    <Info size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-800 leading-relaxed">
                        Os dados de contacto (Morada, Telefone) estão ocultos por defeito para sua privacidade.
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-4 mb-8">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Nome Completo</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-800 outline-none focus:border-[#355130] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Nome da Empresa (Opcional)</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-800 outline-none focus:border-[#355130] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-800 outline-none focus:border-[#355130] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Telefone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-800 outline-none focus:border-[#355130] transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">NIF</label>
                        <input
                            type="text"
                            name="nif"
                            value={formData.nif}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-800 outline-none focus:border-[#355130] transition-colors"
                        />
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-[#FDFFE5] border border-[#E8F5BA] rounded-2xl p-5 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 shadow-sm flex-shrink-0">
                            <Check size={20} className="text-[#355130]" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-[#355130] mb-1">Selo de Confiança WasteSafe</h3>
                            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                                Transmita confiança aos compradores com o selo de empresa verificada. Aumenta a visibilidade em 30%.
                            </p>
                            <button className="bg-[#355130] text-white px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-1 active:scale-[0.98] transition-all">
                                Ativar por 14,99€ <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Action */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 z-20">
                <button className="w-full bg-[#355130] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#355130]/20 active:scale-[0.98] transition-all">
                    Guardar Alterações
                </button>
            </div>
        </div>
    );
};

export default MobileAccountData;
