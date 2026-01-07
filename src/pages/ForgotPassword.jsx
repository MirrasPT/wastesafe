import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, ArrowRight } from 'lucide-react';

const ForgotPassword = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] relative z-10 w-full animate-in fade-in duration-500 font-sans flex items-center justify-center">

            <div className="w-[95%] max-w-[450px]">
                <div className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-100 relative overflow-hidden">

                    {/* Decorative Blob */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#F6EA37]/20 rounded-bl-[150px] pointer-events-none" />

                    <div className="text-center mb-10 relative z-10">
                        <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#355130] mb-6 transition-colors">
                            <ArrowLeft size={16} /> Voltar ao Login
                        </Link>
                        <h1 className="text-3xl font-bold text-[#355130] mb-3">Recuperar Password</h1>
                        <p className="text-gray-500 text-lg">Insira o seu email para receber instruções de recuperação.</p>
                    </div>

                    <form className="space-y-6 relative z-10">

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

                        {/* Submit Button */}
                        <button className="w-full bg-[#355130] hover:bg-[#2a4126] text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group">
                            Enviar Email
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                    </form>

                </div>
            </div>

        </div>
    );
};

export default ForgotPassword;
