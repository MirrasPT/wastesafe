import { useState } from 'react';
import { User, FileText, Phone, Mail, MapPin, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MobileRegister = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        // Simulate registration
        navigate('/mobile/profile');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col p-6 relative overflow-x-hidden">
            {/* Background Shape */}
            <div className="absolute -top-10 -right-20 w-48 h-48 bg-[#FDFFE5] rounded-full z-0" />

            <div className="relative z-10 w-full max-w-sm mx-auto flex-1 flex flex-col">
                {/* Header */}
                <div className="text-center mb-8 mt-4">
                    <h1 className="text-3xl font-extrabold text-[#355130] mb-2">Criar Conta</h1>
                    <p className="text-gray-500 text-sm">Junte-se à comunidade WasteSafe.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleRegister} className="space-y-4 flex-1">

                    {/* Nome */}
                    <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#355130] ml-1">Nome</label>
                        <div className="relative">
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="João Silva ou EcoTextil Lda"
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400 text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {/* NIF */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-[#355130] ml-1">NIF</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400">NIF</span>
                                <input
                                    type="text"
                                    placeholder="123456789"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400 text-gray-700"
                                />
                            </div>
                        </div>

                        {/* Telemóvel */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-[#355130] ml-1">Telemóvel</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400">+351</span>
                                <input
                                    type="tel"
                                    placeholder="912 345 678"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-3.5 text-sm outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400 text-gray-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#355130] ml-1">Email</label>
                        <div className="relative">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                placeholder="exemplo@email.com"
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400 text-gray-700"
                            />
                        </div>
                    </div>

                    {/* Morada */}
                    <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#355130] ml-1">Morada / Localidade</label>
                        <div className="relative">
                            <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Porto, Portugal"
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400 text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {/* Password */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-[#355130] ml-1">Password</label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-8 py-3.5 text-sm outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400 text-gray-700"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-[#355130] ml-1">Confirmar</label>
                            <div className="relative">
                                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-8 py-3.5 text-sm outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400 text-gray-700"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                >
                                    {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3 mt-4">
                        <input type="checkbox" className="mt-1 w-4 h-4 text-[#355130] rounded border-gray-300 focus:ring-[#355130]" />
                        <span className="text-xs text-gray-500 leading-tight">
                            Li e aceito os <Link to="#" className="font-bold text-[#355130]">Termos e Condições</Link> e a <Link to="#" className="font-bold text-[#355130]">Política de Privacidade</Link>.
                        </span>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#355130] text-white py-4 rounded-full font-bold text-sm shadow-xl shadow-[#355130]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6"
                    >
                        Criar Conta <ArrowRight size={18} />
                    </button>

                </form>

                {/* Footer */}
                <div className="text-center mt-6 pb-6">
                    <p className="text-xs text-gray-500">
                        Já tem conta?{' '}
                        <Link to="/mobile/login" className="font-bold text-[#355130] hover:underline">
                            Entrar agora
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MobileRegister;
