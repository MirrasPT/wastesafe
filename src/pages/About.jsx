import { Leaf, Recycle, Globe, Users, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] relative z-10 w-full animate-in fade-in duration-500 font-sans">
            <div className="waste-container">

                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#C9E26C]/20 text-[#355130] text-sm font-bold mb-4">
                        A Nossa Missão
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#355130] mb-6 leading-tight">
                        Transformamos o desperdício têxtil em <span className="relative inline-block">
                            oportunidade
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F6EA37] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>.
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                        A WasteSafe nasceu para fechar o ciclo da indústria têxtil, ligando excedentes industriais a criativos e empresas que lhes dão uma nova vida.
                    </p>
                </div>

                {/* Main Image / Video Placeholder */}
                <div className="w-full h-[400px] md:h-[500px] bg-gray-200 rounded-[40px] overflow-hidden shadow-sm mb-24 relative group">
                    <img
                        src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2000&auto=format&fit=crop"
                        alt="Têxteis Sustentáveis"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8 md:p-12">
                        <p className="text-white text-xl md:text-2xl font-bold max-w-2xl">
                            "Não existe lixo, apenas recursos no lugar errado."
                        </p>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            icon: Recycle,
                            title: "Economia Circular",
                            text: "Promovemos a reutilização de materiais, reduzindo a necessidade de novas matérias-primas e a extração de recursos naturais."
                        },
                        {
                            icon: Globe,
                            title: "Impacto Positivo",
                            text: "Cada metro de tecido salvo é menos água gasta, menos CO2 emitido e menos resíduos em aterros sanitários."
                        },
                        {
                            icon: Users,
                            title: "Comunidade",
                            text: "Impulsionamos uma rede de designers, artesãos e pequenas marcas que valorizam a sustentabilidade e a qualidade."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[30px] border border-gray-100 hover:border-[#355130]/30 transition-all hover:shadow-lg group">
                            <div className="w-14 h-14 bg-[#F6EA37]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-[#355130]">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#355130] mb-3">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* The Problem & Solution Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 bg-[#355130] rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 0 C 30 10 70 10 100 0 V 100 H 0 Z" fill="white" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">O Problema do Desperdício</h2>
                        <div className="space-y-6 text-white/80 text-lg">
                            <p>
                                A indústria têxtil é uma das mais poluentes do mundo. Todos os anos, toneladas de sobras de produção, rolos com pequenos defeitos e fins de coleção são descartados ou incinerados.
                            </p>
                            <p>
                                Estes materiais estão novos, prontos a usar e cheios de potencial. É aqui que entramos.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                                <span className="block text-3xl font-bold text-[#F6EA37]">92M</span>
                                <span className="text-sm">Toneladas de lixo têxtil/ano</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                                <span className="block text-3xl font-bold text-[#F6EA37]">&lt;1%</span>
                                <span className="text-sm">Reciclado em nova roupa</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 lg:pl-12">
                        <div className="bg-white text-[#355130] p-8 rounded-[30px] shadow-xl">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-[#355130]" /> A Solução WasteSafe
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Plataforma digital simples e transparente",
                                    "Verificação de qualidade de vendedores",
                                    "Logística facilitada entre empresas",
                                    "Rastreabilidade do impacto ambiental"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-[#C9E26C] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#355130]">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/registar" className="mt-8 w-full bg-[#355130] text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#2a4126] transition-colors">
                                Juntar-me ao Movimento <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Team / Contact CTA */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#355130] mb-4">Pronto para fazer a diferença?</h2>
                    <p className="text-gray-500 mb-8">
                        Seja uma fábrica com excedentes ou um criador à procura de materiais únicos, o seu lugar é aqui.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/catalogo" className="bg-[#C9E26C] text-[#355130] px-8 py-3 rounded-full font-bold hover:brightness-105 transition-all">
                            Ver Catálogo
                        </Link>
                        <Link to="/registar" className="bg-white text-[#355130] border-2 border-[#355130]/10 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all">
                            Criar Conta Gratuita
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
