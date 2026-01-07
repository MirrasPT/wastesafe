import { Leaf, Recycle, Globe, Users, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] relative z-10 w-full animate-in fade-in duration-500 font-sans">
            <div className="waste-container">

                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#C9E26C]/20 text-[#355130] text-sm font-bold mb-4">
                        Our Mission
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#355130] mb-6 leading-tight">
                        We transform textile waste into <span className="relative inline-block">
                            opportunity
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F6EA37] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>.
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                        WasteSafe was born to close the loop in the textile industry, connecting industrial surplus with creatives and companies that give them a new life.
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
                            "There is no waste, only resources in the wrong place."
                        </p>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            icon: Recycle,
                            title: "Circular Economy",
                            text: "We promote the reuse of materials, reducing the need for virgin raw materials and natural resource extraction."
                        },
                        {
                            icon: Globe,
                            title: "Positive Impact",
                            text: "Every meter of fabric saved is less water used, less CO2 emitted, and less waste in landfills."
                        },
                        {
                            icon: Users,
                            title: "Community",
                            text: "We empower a network of designers, artisans, and small brands that value sustainability and quality."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Waste Problem</h2>
                        <div className="space-y-6 text-white/80 text-lg">
                            <p>
                                The textile industry is one of the most polluting in the world. Every year, tons of production leftovers, rolls with minor defects, and end-of-collection items are discarded or incinerated.
                            </p>
                            <p>
                                These materials are new, ready to use, and full of potential. That's where we come in.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                                <span className="block text-3xl font-bold text-[#F6EA37]">92M</span>
                                <span className="text-sm">Tons of textile waste/year</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                                <span className="block text-3xl font-bold text-[#F6EA37]">&lt;1%</span>
                                <span className="text-sm">Recycled into new clothing</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 lg:pl-12">
                        <div className="bg-white text-[#355130] p-8 rounded-[30px] shadow-xl">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-[#355130]" /> The WasteSafe Solution
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Simple and transparent digital platform",
                                    "Seller quality verification",
                                    "Facilitated logistics between companies",
                                    "Environmental impact traceability"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-[#C9E26C] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#355130]">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/registar" className="mt-8 w-full bg-[#355130] text-white py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#2a4126] transition-colors">
                                Join the Movement <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Team / Contact CTA */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#355130] mb-4">Ready to make a difference?</h2>
                    <p className="text-gray-500 mb-8">
                        Whether you are a factory with surplus or a creator looking for unique materials, you belong here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/catalogo" className="bg-[#C9E26C] text-[#355130] px-8 py-3 rounded-full font-bold hover:brightness-105 transition-all">
                            View Catalog
                        </Link>
                        <Link to="/registar" className="bg-white text-[#355130] border-2 border-[#355130]/10 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all">
                            Create Free Account
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
