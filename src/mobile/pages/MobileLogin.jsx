import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckSquare, Square } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const MobileLogin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login
        navigate('/mobile/profile');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center p-6 relative overflow-hidden">
            {/* Background Shape */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F4F9E4] rounded-full z-0" />

            <div className="relative z-10 w-full max-w-sm mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-[#355130] mb-3">Bem-vindo de volta!</h1>
                    <p className="text-gray-500 text-sm">Insira os seus dados para aceder à sua conta.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">

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

                    {/* Password */}
                    <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-[#355130] ml-1">Password</label>
                        <div className="relative">
                            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-11 pr-11 py-3.5 text-sm outline-none focus:border-[#355130] transition-colors placeholder:text-gray-400 text-gray-700"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => setRememberMe(!rememberMe)}
                            className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700"
                        >
                            {rememberMe ? (
                                <CheckSquare size={16} className="text-[#355130]" />
                            ) : (
                                <Square size={16} className="text-gray-300" />
                            )}
                            Manter sessão iniciada
                        </button>
                        <Link to="#" className="text-xs font-bold text-[#355130] hover:underline">
                            Esqueceu-se da password?
                        </Link>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#355130] text-white py-4 rounded-full font-bold text-sm shadow-xl shadow-[#355130]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
                    >
                        Entrar <ArrowRight size={18} />
                    </button>

                </form>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-xs text-gray-500">
                        Não tem conta?{' '}
                        <Link to="/mobile/register" className="font-bold text-[#355130] hover:underline">
                            Registar agora
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MobileLogin;
