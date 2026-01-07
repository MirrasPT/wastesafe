import { useState } from 'react';
import { ChevronLeft, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileSecurity = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center gap-3 sticky top-0 z-10">
                <button onClick={() => navigate(-1)} className="p-1">
                    <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <h1 className="text-base font-bold text-[#355130]">Segurança</h1>
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-[#355130] mb-6">Alterar Password</h2>

                <div className="space-y-4 mb-8">
                    {/* Current Password */}
                    <div className="relative">
                        <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            name="currentPassword"
                            placeholder="Password Atual"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium text-gray-800 outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400"
                        />
                    </div>

                    {/* New Password */}
                    <div className="relative">
                        <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="Nova Password"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium text-gray-800 outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirmar Nova Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium text-gray-800 outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <button className="w-full bg-[#355130] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#355130]/20 active:scale-[0.98] transition-all">
                    Atualizar Password
                </button>
            </div>
        </div>
    );
};

export default MobileSecurity;
