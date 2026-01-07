import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, Mail, Lock } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login logic here if needed
        navigate('/perfil');
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] relative z-10 w-full animate-in fade-in duration-500 font-sans flex items-center justify-center">

            <div className="w-[95%] max-w-[450px]">
                <div className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-100 relative overflow-hidden">

                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9E26C]/20 rounded-bl-[150px] pointer-events-none" />

                    <div className="text-center mb-10 relative z-10">
                        <h1 className="text-3xl font-bold text-[#355130] mb-3">Welcome back!</h1>
                        <p className="text-gray-500 text-lg">Enter your details to access your account.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                        {/* Email Input */}
                        <div className="space-y-1">
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
                            <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#355130] focus:ring-[#355130] accent-[#355130]" />
                                    <span className="text-sm text-gray-500">Keep me signed in</span>
                                </label>
                                <Link to="/recuperar-password" class="text-xs font-bold text-[#355130] hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-[#355130] hover:bg-[#2a4126] text-white py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                            Login
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                    </form>

                    <div className="mt-8 text-center relative z-10">
                        <p className="text-gray-500">
                            Don't have an account? <Link to="/registar" className="font-bold text-[#355130] hover:underline">Register now</Link>
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;
