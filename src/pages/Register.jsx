import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, Mail, Lock, User } from 'lucide-react';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] relative z-10 w-full animate-in fade-in duration-500 font-sans flex items-center justify-center">

            <div className="w-[95%] max-w-[700px]">
                <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-lg border border-gray-100 relative overflow-hidden">

                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#F6EA37]/20 rounded-bl-[150px] pointer-events-none" />

                    <div className="text-center mb-10 relative z-10">
                        <h1 className="text-4xl font-bold text-[#355130] mb-3">Criar Conta</h1>
                        <p className="text-gray-500 text-lg">Junte-se à comunidade WasteSafe.</p>
                    </div>

                    <form className="space-y-6 relative z-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Input */}
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Nome</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="João Silva ou EcoTextil Lda"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* NIF Input */}
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">NIF</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold text-xs">NIF</span>
                                    <input
                                        type="text"
                                        placeholder="123456789"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Phone Input */}
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">Telemóvel</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold text-xs">+351</span>
                                    <input
                                        type="tel"
                                        placeholder="912 345 678"
                                        className="w-full pl-14 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        placeholder="exemplo@email.com"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Address Input */}
                            <div className="space-y-1 md:col-span-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Morada / Localidade</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Porto, Portugal"
                                        className="w-full pl-6 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-12 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#355130] transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Input */}
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-gray-700 ml-1">Confirmar Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#355130]/20 focus:border-[#355130] transition-all font-medium"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-3 mt-4">
                            <input type="checkbox" id="terms" className="mt-1 w-5 h-5 rounded border-gray-300 text-[#355130] focus:ring-[#355130] accent-[#355130]" />
                            <label htmlFor="terms" className="text-sm text-gray-500">
                                Li e aceito os <Link to="/termos" className="text-[#355130] font-bold hover:underline">Termos e Condições</Link> e a <Link to="/privacidade" className="text-[#355130] font-bold hover:underline">Política de Privacidade</Link>.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-[#355130] hover:bg-[#2a4126] text-white py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group mt-4">
                            Criar Conta
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                    </form>

                    <div className="mt-8 text-center relative z-10">
                        <p className="text-gray-500">
                            Já tem conta? <Link to="/login" className="font-bold text-[#355130] hover:underline">Entrar</Link>
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Register;
