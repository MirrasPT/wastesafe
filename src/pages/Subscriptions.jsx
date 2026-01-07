import { ArrowRight, Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Subscriptions = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] font-sans">
            <div className="waste-container">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-[#C9E26C] text-[#355130] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">Plans for Sellers</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#355130] mb-6">Choose the perfect plan for your business</h1>
                    <p className="text-xl text-gray-500">
                        From occasional sellers to large companies. No loyalty period, cancel whenever you want.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

                    {/* Free Tier */}
                    <div className="bg-white rounded-[40px] p-8 border border-gray-100 flex flex-col hover:scale-[1.01] transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="mb-6">
                            <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">Beginner</span>
                        </div>
                        <h3 className="text-3xl font-bold text-[#355130] mb-2">Basic</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-5xl font-bold text-[#355130]">0€</span>
                            <span className="text-gray-400 font-medium">/month</span>
                        </div>
                        <p className="text-gray-500 mb-8 text-sm">Ideal for those starting to sell their first surplus.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                                Up to 3 active ads
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                                Access to public contacts
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                                Email support (48h)
                            </li>
                        </ul>

                        <Link to="/publicar" className="w-full border-2 border-[#355130] text-[#355130] font-bold py-4 rounded-full hover:bg-[#355130] hover:text-white transition-all text-center btn-press">
                            Start for Free
                        </Link>
                    </div>

                    {/* Pro Tier (Featured) */}
                    <div className="bg-[#FDFFE5] rounded-[40px] p-8 border-2 border-[#C9E26C] flex flex-col hover:scale-[1.01] transition-all duration-300 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#C9E26C] text-[#355130] px-6 py-2 rounded-bl-3xl font-bold text-sm">
                            Most Popular
                        </div>

                        <div className="mb-6">
                            <span className="bg-[#355130] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">Professional</span>
                        </div>
                        <h3 className="text-3xl font-bold text-[#355130] mb-2">Pro</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-5xl font-bold text-[#355130]">29€</span>
                            <span className="text-gray-400 font-medium">/month</span>
                        </div>
                        <p className="text-[#355130]/70 mb-8 text-sm">For regular sellers who want to maximize visibility.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-[#355130] font-semibold">
                                <div className="p-1 bg-[#C9E26C] rounded-full text-[#355130]"><Check size={14} /></div>
                                Unlimited Ads
                            </li>
                            <li className="flex items-start gap-3 text-[#355130] font-semibold">
                                <div className="p-1 bg-[#C9E26C] rounded-full text-[#355130]"><Check size={14} /></div>
                                <span className="underline decoration-[#C9E26C] decoration-2 underline-offset-2">See Direct Contacts</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#355130] font-semibold">
                                <div className="p-1 bg-[#C9E26C] rounded-full text-[#355130]"><Check size={14} /></div>
                                Priority on Homepage
                            </li>
                            <li className="flex items-start gap-3 text-[#355130] font-semibold">
                                <div className="p-1 bg-[#C9E26C] rounded-full text-[#355130]"><Check size={14} /></div>
                                "Pro Seller" Badge
                            </li>
                            <li className="flex items-start gap-3 text-[#355130] font-semibold">
                                <div className="p-1 bg-[#C9E26C] rounded-full text-[#355130]"><Check size={14} /></div>
                                Early access to stocks
                            </li>
                        </ul>

                        <button className="w-full bg-[#355130] text-white font-bold py-4 rounded-full hover:bg-[#2a4126] transition-all text-center flex items-center justify-center gap-2 btn-press">
                            Subscribe Now <Zap size={20} className="fill-[#F6EA37] text-[#F6EA37]" />
                        </button>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="bg-white rounded-[40px] p-8 border border-gray-100 flex flex-col hover:scale-[1.01] transition-all duration-300 shadow-sm hover:shadow-xl">
                        <div className="mb-6">
                            <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">Enterprise</span>
                        </div>
                        <h3 className="text-3xl font-bold text-[#355130] mb-2">Corporate</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-bold text-[#355130]">On Request</span>
                        </div>
                        <p className="text-gray-500 mb-8 text-sm">Tailored solutions for large volumes and integrations.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                                Stock Integration API
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                                Dedicated Account Manager
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                                Integrated Logistics
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Check size={14} /></div>
                                Unified Monthly Invoicing
                            </li>
                        </ul>

                        <button className="w-full border-2 border-gray-200 text-gray-600 font-bold py-4 rounded-full hover:border-[#355130] hover:text-[#355130] transition-all text-center btn-press">
                            Contact Sales
                        </button>
                    </div>

                </div>

                {/* FAQ / Info */}
                <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 text-center">
                    <h3 className="text-2xl font-bold text-[#355130] mb-4">Questions about which plan to choose?</h3>
                    <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                        Our support team is available to help you find the best solution for your business.
                    </p>
                    <Link to="/sobre" className="text-[#355130] font-bold hover:underline">Contact Us</Link>
                </div>

            </div>
        </div>
    );
};

export default Subscriptions;
