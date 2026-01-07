import { ArrowRight, CheckCircle, Upload, MessageSquare, Truck, DollarSign, Package, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowToSell = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] font-sans">
            <div className="waste-container">

                {/* Hero Section */}
                <div className="bg-[#355130] rounded-[50px] p-8 md:p-16 mb-20 relative overflow-hidden text-center text-white">
                    <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="bg-[#C9E26C] text-[#355130] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">Guia do Vendedor</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Como Vender na WasteSafe?</h1>
                        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                            Transforme os seus excedentes têxteis em lucro em poucos passos simples. Um processo transparente, seguro e eficiente.
                        </p>
                        <Link to="/publicar" className="bg-[#F6EA37] text-[#355130] px-10 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2 btn-press">
                            Começar a Vender <ArrowRight size={24} />
                        </Link>
                    </div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {[
                        {
                            icon: Upload,
                            title: "1. Publique",
                            desc: "Tire fotos claras, descreva o produto e defina o preço. É rápido e fácil.",
                            color: "bg-blue-100 text-blue-600"
                        },
                        {
                            icon: MessageSquare,
                            title: "2. Negocie",
                            desc: "Responda a interessados através do nosso chat seguro e cheguem a acordo.",
                            color: "bg-orange-100 text-orange-600"
                        },
                        {
                            icon: Truck,
                            title: "3. Envie",
                            desc: "Prepare a encomenda e envie conforme o método acordado com o comprador.",
                            color: "bg-purple-100 text-purple-600"
                        },
                        {
                            icon: DollarSign,
                            title: "4. Receba",
                            desc: "Receba o pagamento de forma segura assim que a entrega for confirmada.",
                            color: "bg-green-100 text-green-600"
                        }
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-8 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group">
                            <div className={`w-16 h-16 ${step.color} rounded-3xl flex items-center justify-center mb-6 text-current shadow-sm group-hover:scale-110 transition-transform`}>
                                <step.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Why Sell With Us */}
                <div className="bg-white rounded-[50px] p-8 md:p-16 border border-gray-100 mb-20 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#355130] mb-8">Porquê escolher a WasteSafe?</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Alcance Especializado", desc: "A sua mercadoria exposta a milhares de profissionais do setor têxtil." },
                                    { title: "Pagamentos Seguros", desc: "Sistema de retenção de valor até confirmação de entrega." },
                                    { title: "Gestão Simplificada", desc: "Painel de controlo intuitivo para gerir stocks e encomendas." },
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle className="text-[#C9E26C]" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#C9E26C]/20 rounded-full blur-3xl"></div>
                            <div className="relative bg-gray-50 rounded-[40px] p-8 border border-gray-200">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <Package className="text-[#355130]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Total Vendido</p>
                                        <p className="text-2xl font-bold text-[#355130]">+ 1.2M €</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <Shield className="text-[#355130]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Taxa de Sucesso</p>
                                        <p className="text-2xl font-bold text-[#355130]">99.8%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#355130] mb-6">Pronto para começar?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/publicar" className="bg-[#355130] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2a4126] transition-all btn-press">
                            Publicar Primeiro Anúncio
                        </Link>
                        <Link to="/subscricoes" className="bg-white text-[#355130] px-8 py-4 rounded-full font-bold border border-gray-200 hover:bg-gray-50 transition-all btn-press">
                            Ver Planos de Subscrição
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HowToSell;
