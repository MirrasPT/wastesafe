import { useState } from 'react';
import {
    User, Package, MessageSquare, Settings, LogOut, Heart, MapPin,
    Lock, CreditCard, Trash2, Edit2, Plus, ChevronRight, Archive,
    CheckCircle, AlertCircle, ShoppingBag, DollarSign, Send, ArrowLeft,
    Zap, Check, Crown, Eye, RotateCcw, Building, X, Megaphone, AlertTriangle, Upload, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const [activeTab, setActiveTab] = useState('ads');
    const [settingsSection, setSettingsSection] = useState('account');
    const [adFilter, setAdFilter] = useState('all'); // 'all' | 'active' | 'reserved' | 'sold' | 'expired'
    const [selectedChat, setSelectedChat] = useState(null);
    const [highlightModalOpen, setHighlightModalOpen] = useState(false);
    const [disputeModalOpen, setDisputeModalOpen] = useState(false);

    // Mock Data: Ads
    const [myAds, setMyAds] = useState([
        { id: 1, title: "Linen Fabric Roll", price: "120.00 €", status: "active", views: 45, image: "/imagens/Produto_1.jpg" },
        { id: 2, title: "Raw Cotton Surplus", price: "85.00 €", status: "reserved", views: 12, image: "/imagens/Produto_2.jpg" },
        { id: 3, title: "Polyester Threads (Lot)", price: "40.00 €", status: "sold", views: 128, image: "/imagens/Produto_3.jpg", date: "Oct 12, 2024" },
        { id: 4, title: "Silk Scraps", price: "25.00 €", status: "expired", views: 5, image: "/imagens/Produto_2.jpg", date: "Sep 01, 2024" },
    ]);

    // Mock Data: Messages
    const chats = [
        {
            id: 1,
            type: 'selling',
            product: 'Linen Fabric Roll',
            otherUser: 'Ana Beatriz',
            lastMessage: 'Is it still available? I am interested in the whole lot.',
            time: '10:30',
            unread: true,
            avatar: 'A'
        },
        {
            id: 2,
            type: 'buying',
            product: 'Vintage Buttons',
            otherUser: 'Carlos Têxteis',
            lastMessage: 'Perfect, I can send it tomorrow morning.',
            time: 'Yesterday',
            unread: false,
            avatar: 'C'
        }
    ];

    const [messageInput, setMessageInput] = useState('');

    // Helper for Status Badge
    const getStatusBadge = (status) => {
        switch (status) {
            case 'active': return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-green-200">Active</span>;
            case 'reserved': return <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-orange-200">Reserved</span>;
            case 'sold': return <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-gray-200">Sold</span>;
            case 'expired': return <span className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-red-100">Expired</span>;
            default: return null;
        }
    };

    const filteredAds = myAds.filter(ad => {
        if (adFilter === 'all') return true;
        return ad.status === adFilter;
    });

    const handleChangeAdStatus = (adId, newStatus) => {
        setMyAds(prevAds =>
            prevAds.map(ad =>
                ad.id === adId ? { ...ad, status: newStatus } : ad
            )
        );
    };

    // Components for Settings Sections
    const SettingsAccount = () => (
        <div className="space-y-6 animate-in fade-in duration-300">
            <h3 className="text-xl font-bold text-[#355130]">Account Details</h3>
            <p className="text-sm text-gray-500 bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-2">
                <AlertCircle size={18} className="text-blue-500 shrink-0" />
                Contact details (Address, Phone) are hidden by default for your privacy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-600 ml-1">Full Name</label>
                    <input type="text" defaultValue="Renato Ferreira" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9E26C] transition-all" />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-600 ml-1">Company Name (Optional)</label>
                    <input type="text" defaultValue="WasteSafe Lda" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9E26C] transition-all" />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-600 ml-1">Email</label>
                    <input type="email" defaultValue="renato@wastesafe.pt" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9E26C] transition-all" />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-600 ml-1">Phone</label>
                    <input type="tel" defaultValue="+351 912 345 678" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9E26C] transition-all" />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-semibold text-gray-600 ml-1">Tax ID (NIF)</label>
                    <input type="text" defaultValue="123456789" className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9E26C] transition-all" />
                </div>
            </div>

            {/* Company Verification Section */}
            <div className="bg-[#FDFFE5] p-6 rounded-2xl border border-[#C9E26C] mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full shadow-sm text-[#355130]">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#355130] text-lg">WasteSafe Trust Seal</h4>
                        <p className="text-sm text-gray-600 max-w-md">
                            Convey trust to buyers with the verified company seal. Increases visibility by 30%.
                        </p>
                    </div>
                </div>
                <button className="whitespace-nowrap bg-[#355130] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2a4126] transition-all btn-press flex items-center gap-2">
                    Activate for 14.99€ <ChevronRight size={16} />
                </button>
            </div>

            <div className="flex justify-end pt-4">
                <button className="bg-[#355130] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2a4126] transition-all btn-press">
                    Save Changes
                </button>
            </div>
        </div>
    );

    const SettingsSecurity = () => (
        <div className="space-y-8 animate-in fade-in duration-300">
            <div>
                <h3 className="text-xl font-bold text-[#355130] mb-6">Change Password</h3>
                <div className="space-y-4 max-w-md">
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="password" placeholder="Current Password" className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9E26C]" />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="password" placeholder="New Password" className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9E26C]" />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input type="password" placeholder="Confirm New Password" className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9E26C]" />
                    </div>
                    <button className="w-full bg-[#355130] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2a4126] transition-all mt-4 btn-press">
                        Update Password
                    </button>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-red-600 mb-2">Danger Zone</h3>
                <p className="text-gray-500 text-sm mb-6">Once you delete your account, there is no going back. All ads and data will be lost.</p>
                <button className="flex items-center gap-2 text-red-600 border-2 border-red-100 px-6 py-3 rounded-xl hover:bg-red-50 font-bold transition-all btn-press">
                    <Trash2 size={18} />
                    Delete Account
                </button>
            </div>
        </div>
    );

    const SettingsAddresses = () => (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-[#355130]">My Addresses</h3>
                <button className="text-[#355130] font-bold text-sm bg-[#C9E26C]/20 px-4 py-2 rounded-full hover:bg-[#C9E26C]/40 transition-colors btn-press">
                    + Add New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Address Card 1 */}
                <div className="border border-[#C9E26C] bg-[#FDFFE5] p-5 rounded-2xl relative">
                    <div className="absolute top-4 right-4 text-[#355130]">
                        <CheckCircle size={20} fill="#C9E26C" />
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <MapPin size={18} className="text-[#355130]" />
                        <span className="font-bold text-[#355130]">Main Warehouse</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Rua da Indústria Têxtil, 456<br />
                        Zona Industrial da Maia<br />
                        4470-123 Maia, Portugal
                    </p>
                    <div className="flex gap-3 mt-4 pt-4 border-t border-[#355130]/10">
                        <button className="text-xs font-bold text-gray-500 hover:text-[#355130]">Edit</button>
                        <button className="text-xs font-bold text-red-400 hover:text-red-600">Remove</button>
                    </div>
                </div>

                {/* Address Card 2 */}
                <div className="border border-gray-100 bg-white p-5 rounded-2xl hover:border-gray-200 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                        <MapPin size={18} className="text-gray-400" />
                        <span className="font-bold text-gray-700">Center Store</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Avenida dos Aliados, 20<br />
                        Loja 3<br />
                        4000-000 Porto, Portugal
                    </p>
                    <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                        <button className="text-xs font-bold text-gray-500 hover:text-[#355130]">Edit</button>
                        <button className="text-xs font-bold text-red-400 hover:text-red-600">Remove</button>
                        <button className="ml-auto text-xs font-bold text-[#355130]">Set as Default</button>
                    </div>
                </div>
            </div>
        </div>
    );

    const SettingsPayments = () => (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-[#355130]">Payment Methods</h3>
                <button className="text-[#355130] font-bold text-sm bg-[#C9E26C]/20 px-4 py-2 rounded-full hover:bg-[#C9E26C]/40 transition-colors btn-press">
                    + Add Card
                </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-[24px] max-w-sm shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                <div className="flex justify-between items-start mb-8">
                    <div className="bg-white/10 px-3 py-1 rounded bg-blur-sm text-xs font-mono">Mastercard</div>
                    <CreditCard size={24} className="opacity-80" />
                </div>
                <div className="mb-6">
                    <div className="text-xs opacity-60 mb-1">Card Number</div>
                    <div className="font-mono text-xl tracking-wider">•••• •••• •••• 8842</div>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-xs opacity-60 mb-1">Holder</div>
                        <div className="font-medium">RENATO FERREIRA</div>
                    </div>
                    <div>
                        <div className="text-xs opacity-60 mb-1">Expires</div>
                        <div className="font-mono">09/28</div>
                    </div>
                </div>
                {/* Delete Overlay */}
                <div className="absolute inset-0 bg-red-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm cursor-pointer">
                    <div className="flex items-center gap-2 font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Trash2 size={20} /> Remove Card
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 border border-dashed border-gray-300 rounded-[24px] p-6 flex flex-col items-center justify-center text-center gap-3 hover:bg-gray-100 transition-colors cursor-pointer group max-w-sm h-48">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 group-hover:scale-110 transition-transform">
                    <Plus size={24} />
                </div>
                <span className="font-bold text-gray-500">Add new method</span>
            </div>

            {/* Transaction History */}
            <div className="pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-[#355130] mb-6">Transaction History</h3>
                <div className="bg-white rounded-[24px] border border-gray-100 overflow-hidden">
                    <table className="w-full text-left hidden md:table">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
                            <tr>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Description</th>
                                <th className="px-6 py-4">Method</th>
                                <th className="px-6 py-4 text-right">Amount</th>
                                <th className="px-6 py-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { date: 'Dec 10, 2024', desc: 'Pro Subscription Renewal', method: 'Mastercard •••• 8842', amount: '29.00 €', status: 'Paid' },
                                { date: 'Dec 05, 2024', desc: 'Ad Highlight #1234', method: 'Mastercard •••• 8842', amount: '4.99 €', status: 'Paid' },
                                { date: 'Nov 01, 2024', desc: 'Verification Seal (Annual)', method: 'MB WAY', amount: '14.99 €', status: 'Paid' },
                            ].map((tx, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-600">{tx.date}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-[#355130]">{tx.desc}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{tx.method}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-right text-gray-900">{tx.amount}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">{tx.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Mobile View for Transactions */}
                    <div className="md:hidden divide-y divide-gray-100">
                        {[
                            { date: '10 Dez 2024', desc: 'Renovação Subscrição Pro', amount: '29.00 €' },
                            { date: '05 Dez 2024', desc: 'Destaque Anúncio #1234', amount: '4.99 €' },
                        ].map((tx, i) => (
                            <div key={i} className="p-4 flex justify-between items-center">
                                <div>
                                    <div className="font-bold text-[#355130] text-sm">{tx.desc}</div>
                                    <div className="text-xs text-gray-500">{tx.date}</div>
                                </div>
                                <span className="font-bold">{tx.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const SettingsSubscription = () => (
        <div className="space-y-8 animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto mb-8">
                <h3 className="text-2xl font-bold text-[#355130] mb-2">My Subscription</h3>
                <p className="text-gray-500">Manage your plan and billing.</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[30px] p-8 shadow-sm max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div>
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 inline-block">Current Plan</span>
                        <h4 className="text-3xl font-bold text-[#355130]">Basic (Free)</h4>
                        <p className="text-gray-500 mt-1">Active since Nov 12, 2024</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-2xl font-bold text-[#355130]">0.00 €</p>
                        <p className="text-xs text-gray-400">/month</p>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h5 className="font-bold text-gray-700 mb-4">Plan Features:</h5>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle size={16} className="text-[#C9E26C]" /> Up to 3 active ads
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle size={16} className="text-[#C9E26C]" /> Access to public contacts
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle size={16} className="text-[#C9E26C]" /> Basic Support
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <Link to="/subscricoes" className="w-full bg-[#355130] text-white font-bold py-4 rounded-full text-center hover:bg-[#2a4126] transition-all btn-press flex items-center justify-center gap-2">
                        <Zap size={20} className="fill-[#F6EA37] text-[#F6EA37]" />
                        Upgrade to Pro
                    </Link>
                    <button className="w-full text-red-400 font-bold py-2 text-sm hover:text-red-600 transition-colors">
                        Cancel Subscription
                    </button>
                </div>
            </div>

            {/* Billing History Link or Section could go here, already covered in Payments tab partially */}
        </div>
    );

    return (
        <>
            <div className="pt-32 pb-24 min-h-screen bg-[#F9F9F9] relative z-10 w-full animate-in fade-in duration-500 font-sans">
                <div className="waste-container">
                    {/* Profile Header Card */}
                    <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 mb-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#C9E26C]/20 via-transparent to-transparent pointer-events-none" />

                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#C9E26C] shadow-lg relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                                alt="User Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left relative z-10">
                            <h1 className="text-3xl font-bold text-[#355130] mb-2">Renato Ferreira</h1>
                            <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 mb-4">
                                <MapPin size={18} />
                                Porto, Portugal
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <span className="bg-[#C9E26C]/20 text-[#355130] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                                    <CheckCircle size={14} /> Verified Seller
                                </span>
                                <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold">
                                    Member since 2024
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                        {/* Sidebar Navigation (Desktop Only) */}
                        <div className="hidden lg:block lg:col-span-1 space-y-4">
                            <nav className="bg-white p-4 rounded-[30px] shadow-sm border border-gray-100 sticky top-28">
                                {[
                                    { id: 'ads', label: 'Digital Warehouse', icon: Package },
                                    { id: 'offers', label: 'Negotiations', icon: DollarSign, badge: 2 }, // New Item
                                    { id: 'favorites', label: 'Favorites', icon: Heart },
                                    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 1 },
                                    { id: 'settings', label: 'Settings', icon: Settings },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setActiveTab(item.id); setSelectedChat(null); }}
                                        className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all font-semibold mb-2 ${activeTab === item.id
                                            ? 'bg-[#355130] text-white shadow-md'
                                            : 'text-gray-500 hover:bg-gray-50'
                                            } btn-press`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon size={20} />
                                            {item.label}
                                        </div>
                                        {item.badge && activeTab !== item.id && (
                                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
                                        )}
                                    </button>
                                ))}
                                <div className="h-px bg-gray-100 my-2 mx-4"></div>
                                <Link to="/login" className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-semibold transition-all btn-press">
                                    <LogOut size={20} />
                                    Logout
                                </Link>
                            </nav>

                            {/* External Ad Space (Placeholder) - RF_1003 */}
                            <div className="bg-gray-100 rounded-[30px] h-64 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 p-4 relative overflow-hidden group">
                                <div className="absolute top-2 right-2 text-[10px] bg-gray-200 px-2 py-0.5 rounded text-gray-500">Advertisement</div>
                                <Megaphone size={32} className="mb-2 opacity-50" />
                                <p className="text-center text-sm font-medium">Space Reserved for<br />External Ads</p>
                                <button className="mt-4 text-xs bg-white px-3 py-1 rounded-full shadow-sm hover:shadow text-gray-500">Learn More</button>
                            </div>
                        </div>



                        {/* Main Content Area */}
                        <div className="lg:col-span-3">

                            {/* ARMALZÉM DIGITAL (ADS TAB) */}
                            {activeTab === 'ads' && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        {/* Desktop Filters (Pills) */}
                                        <div className="hidden sm:flex flex-wrap gap-2">
                                            {[
                                                { id: 'all', label: 'All' },
                                                { id: 'active', label: 'Active' },
                                                { id: 'reserved', label: 'Reserved' },
                                                { id: 'sold', label: 'Sold' },
                                                { id: 'expired', label: 'Expired' }
                                            ].map(status => (
                                                <button
                                                    key={status.id}
                                                    onClick={() => setAdFilter(status.id)}
                                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${adFilter === status.id ? 'bg-[#355130] text-white border-[#355130] shadow-sm' : 'bg-white text-gray-500 border-gray-100 hover:border-[#355130]/30 hover:text-[#355130]'}`}
                                                >
                                                    {status.label}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Mobile Filters (Dropdown) */}
                                        <div className="w-full sm:hidden relative">
                                            <select
                                                value={adFilter}
                                                onChange={(e) => setAdFilter(e.target.value)}
                                                className="w-full appearance-none bg-white border border-gray-200 text-[#355130] font-bold py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:border-[#C9E26C] focus:ring-2 focus:ring-[#C9E26C]/20 transition-all"
                                            >
                                                <option value="all">All Ads</option>
                                                <option value="active">Active</option>
                                                <option value="reserved">Reserved</option>
                                                <option value="sold">Sold</option>
                                                <option value="expired">Expired</option>
                                            </select>
                                            <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                        <Link to="/publicar" className="bg-[#C9E26C] text-[#355130] w-full sm:w-auto justify-center px-6 py-3 rounded-full font-bold hover:brightness-105 transition-all text-sm flex items-center gap-2 btn-press shrink-0">
                                            <Plus size={18} /> New Ad
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        {filteredAds.map((ad) => (
                                            <div key={ad.id} className="bg-white p-4 rounded-[24px] border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 group hover:shadow-md transition-shadow relative">
                                                <div className="w-full sm:w-32 h-48 sm:h-32 rounded-2xl overflow-hidden bg-gray-200 relative shrink-0">
                                                    <img src={ad.image} alt="" className="w-full h-full object-cover" />
                                                    <div className="absolute top-2 left-2">
                                                        {getStatusBadge(ad.status)}
                                                    </div>
                                                </div>
                                                <div className="flex-1 flex flex-col justify-between py-1">
                                                    <div>
                                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                                            <h3 className="font-bold text-[#355130] text-lg">{ad.title}</h3>
                                                            <span className="font-bold text-[#355130] bg-[#C9E26C]/20 px-3 py-1 rounded-full text-sm w-fit mt-1 sm:mt-0">{ad.price}</span>
                                                        </div>
                                                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                                            <span className="flex items-center gap-1"><Eye size={14} /> {ad.views} views</span>
                                                            {ad.date && <span className="flex items-center gap-1"><Archive size={14} /> {ad.date}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4 sm:mt-0">
                                                        <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                                                            {/* Status Selector */}
                                                            <div className="relative flex-1 sm:flex-none">
                                                                <select
                                                                    value={ad.status}
                                                                    onChange={(e) => handleChangeAdStatus(ad.id, e.target.value)}
                                                                    className="w-full sm:w-auto appearance-none bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:border-[#C9E26C] cursor-pointer"
                                                                >
                                                                    <option value="active">Active</option>
                                                                    <option value="reserved">Reserved</option>
                                                                    <option value="sold">Sold</option>
                                                                    <option value="expired">Expired</option>
                                                                </select>
                                                                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                            </div>

                                                            {/* Mobile Trash Icon - Beside Status */}
                                                            <button className="sm:hidden p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all btn-press bg-gray-50 border border-gray-100">
                                                                <Trash2 size={18} />
                                                            </button>
                                                        </div>

                                                        <div className="h-6 w-px bg-gray-200 mx-2 hidden sm:block"></div>

                                                        <div className="grid grid-cols-2 gap-3 sm:flex sm:gap-2">
                                                            <button className="px-4 py-3 sm:py-2 bg-gray-100 text-[#355130] rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 btn-press">
                                                                <Edit2 size={16} /> <span className="sm:inline">Edit</span>
                                                            </button>
                                                            <button
                                                                onClick={() => setHighlightModalOpen(true)}
                                                                className="px-4 py-3 sm:py-2 bg-[#F6EA37] text-[#355130] rounded-xl text-sm font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 btn-press"
                                                            >
                                                                <Zap size={16} /> <span className="sm:inline">Highlight</span>
                                                            </button>
                                                        </div>

                                                        {/* Desktop Trash Icon */}
                                                        <button className="hidden sm:block px-4 py-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all btn-press ml-auto">
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {filteredAds.length === 0 && (
                                            <div className="text-center py-12 text-gray-500 bg-white rounded-[30px] border border-gray-100 border-dashed">
                                                <Package className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                                <p>No ads found with this status.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* FAVORITES TAB */}
                            {activeTab === 'favorites' && (
                                <div className="flex flex-col items-center justify-center h-64 bg-white rounded-[30px] text-center border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500 p-6">
                                    <Heart className="w-12 h-12 text-gray-300 mb-4" />
                                    <h3 className="text-lg font-bold text-gray-500">You have no favorites yet</h3>
                                    <p className="text-gray-400 text-sm">Explore the catalog to find treasures!</p>
                                    <Link to="/catalogo" className="mt-6 w-full sm:w-auto px-6 py-3 bg-[#355130] text-white rounded-full font-bold text-sm hover:bg-[#2a4126] transition-all btn-press">
                                        Explore Catalog
                                    </Link>
                                </div>
                            )}

                            {/* OFFERS TAB */}
                            {activeTab === 'offers' && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-2xl font-bold text-[#355130]">Offers Received</h2>

                                    <div className="bg-white rounded-[30px] border border-gray-100 p-6 shadow-sm">
                                        {/* Mock Offer 1 */}
                                        <div className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-100 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                                            <div className="w-20 h-20 rounded-2xl bg-gray-200 shrink-0 overflow-hidden">
                                                <img src="/imagens/Produto_1.jpg" alt="Product" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 w-full">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="font-bold text-[#355130] text-lg">Linen Fabric Roll</h3>
                                                        <p className="text-sm text-gray-500">From: <span className="font-bold text-gray-700">João Silva</span></p>
                                                    </div>
                                                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Pending</span>
                                                </div>

                                                <div className="flex items-center gap-4 my-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                    <div>
                                                        <p className="text-xs text-gray-400 font-bold uppercase">Original Price</p>
                                                        <p className="text-gray-500 line-through font-medium">38.50 €</p>
                                                    </div>
                                                    <div className="w-px h-8 bg-gray-200"></div>
                                                    <div>
                                                        <p className="text-xs text-gray-400 font-bold uppercase">Offer</p>
                                                        <p className="text-2xl font-bold text-[#355130]">30.00 €</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col md:flex-row gap-3 mt-4">
                                                    <button className="w-full md:flex-1 bg-[#355130] text-white py-3 md:py-2 rounded-xl font-bold hover:bg-[#2a4126] transition-all shadow-md btn-press">
                                                        Accept
                                                    </button>
                                                    <button className="w-full md:flex-1 bg-white border-2 border-[#C9E26C] text-[#355130] py-3 md:py-2 rounded-xl font-bold hover:bg-[#C9E26C]/20 transition-all btn-press">
                                                        Counter-offer
                                                    </button>
                                                    <button className="w-full md:w-auto px-4 py-3 md:py-2 text-red-400 font-bold hover:text-red-600 transition-colors">
                                                        Reject
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mock Offer 2 */}
                                        <div className="flex flex-col md:flex-row gap-6 items-start">
                                            <div className="w-20 h-20 rounded-2xl bg-gray-200 shrink-0 overflow-hidden">
                                                <img src="/imagens/Produto_2.jpg" alt="Product" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1 w-full">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="font-bold text-[#355130] text-lg">Vintage Buttons</h3>
                                                        <p className="text-sm text-gray-500">From: <span className="font-bold text-gray-700">Maria Santos</span></p>
                                                    </div>
                                                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Accepted</span>
                                                </div>

                                                <div className="flex items-center gap-4 my-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                    <div>
                                                        <p className="text-xs text-gray-400 font-bold uppercase">Original Price</p>
                                                        <p className="text-gray-500 line-through font-medium">12.00 €</p>
                                                    </div>
                                                    <div className="w-px h-8 bg-gray-200"></div>
                                                    <div>
                                                        <p className="text-xs text-gray-400 font-bold uppercase">Offer</p>
                                                        <p className="text-2xl font-bold text-[#355130]">10.00 €</p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-3 mt-2">
                                                    <Link to="/chat/2" className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl font-bold hover:bg-gray-200 transition-all text-center">
                                                        View Chat
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* MESSAGES TAB */}
                            {activeTab === 'messages' && (
                                <div className="bg-white rounded-[30px] border border-gray-100 overflow-hidden shadow-sm w-full max-w-full mx-auto md:w-full h-[80dvh] md:h-[600px] flex animate-in fade-in slide-in-from-bottom-4 duration-500 relative">

                                    {/* Chat List */}
                                    <div className={`w-full md:w-1/3 border-r border-gray-100 flex flex-col ${selectedChat ? 'hidden md:flex' : 'flex'}`}>
                                        <div className="p-4 border-b border-gray-100">
                                            <h3 className="font-bold text-[#355130]">My Conversations</h3>
                                        </div>
                                        <div className="flex-1 overflow-y-auto">
                                            {chats.map(chat => (
                                                <button
                                                    key={chat.id}
                                                    onClick={() => setSelectedChat(chat.id)}
                                                    className={`w-full p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors text-left flex gap-3 ${selectedChat === chat.id ? 'bg-[#F9F9F9] border-l-4 border-l-[#C9E26C]' : ''}`}
                                                >
                                                    <div className="relative">
                                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${chat.type === 'selling' ? 'bg-[#355130]' : 'bg-[#C9E26C] text-[#355130]'}`}>
                                                            {chat.avatar}
                                                        </div>
                                                        {chat.unread && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex justify-between items-baseline mb-1">
                                                            <span className="font-bold text-gray-800 truncate">{chat.otherUser}</span>
                                                            <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap ml-1">{chat.time}</span>
                                                        </div>
                                                        <p className="text-xs font-medium text-gray-500 flex items-center gap-1 mb-1">
                                                            {chat.type === 'selling' ? <ShoppingBag size={10} className="text-[#C9E26C]" /> : <DollarSign size={10} className="text-[#355130]" />}
                                                            <span className="truncate">{chat.product}</span>
                                                        </p>
                                                        <p className={`text-sm truncate ${chat.unread ? 'font-bold text-gray-800' : 'text-gray-400'}`}>
                                                            {chat.lastMessage}
                                                        </p>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Chat Window */}
                                    <div className={`flex-1 flex-col bg-[#F9F9F9] ${selectedChat ? 'flex' : 'hidden md:flex'}`}>
                                        {selectedChat ? (
                                            <>
                                                {/* Chat Header */}
                                                <div className="flex flex-col bg-white border-b border-gray-100 z-10 shadow-sm">
                                                    {/* Safety Warning */}
                                                    <div className="bg-orange-50 px-4 py-2 flex items-start gap-2 border-b border-orange-100">
                                                        <AlertCircle size={16} className="text-orange-500 mt-0.5" />
                                                        <p className="text-xs text-orange-700 leading-tight">
                                                            <strong>Security Warning:</strong> Payment is made off-platform. Never share bank details, passwords or make advance payments without guarantees.
                                                        </p>
                                                    </div>

                                                    <div className="p-4 flex items-center gap-3">
                                                        <button onClick={() => setSelectedChat(null)} className="md:hidden p-2 -ml-2 text-gray-500 btn-press">
                                                            <ArrowLeft size={20} />
                                                        </button>
                                                        <div className="w-10 h-10 rounded-full bg-gray-200 hidden md:flex items-center justify-center font-bold text-gray-500">
                                                            {chats.find(c => c.id === selectedChat).avatar}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex justify-between items-start">
                                                                <div>
                                                                    <h3 className="font-bold text-gray-800 text-lg">{chats.find(c => c.id === selectedChat).otherUser}</h3>
                                                                    <button
                                                                        onClick={() => alert('Contacto: +351 912 345 678\nEmail: user@example.com')}
                                                                        className="text-[10px] bg-[#C9E26C]/20 text-[#355130] px-2 py-0.5 rounded-full font-bold mt-1 hover:bg-[#C9E26C]/40 transition-colors"
                                                                    >
                                                                        View Contact (Pro)
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            {/* Product Context Card */}
                                                            <div className="mt-3 bg-gray-50 border border-gray-100 rounded-xl p-2 flex items-center justify-between gap-3">
                                                                <div className="flex items-center gap-3 overflow-hidden">
                                                                    <div className="w-10 h-10 rounded-lg bg-gray-200 shrink-0 border border-gray-300">
                                                                        {/* Placeholder for product image */}
                                                                        <img src="/icons/Logo_Nav_Verde.svg" className="w-full h-full object-contain p-1 opacity-50" alt="Product" />
                                                                    </div>
                                                                    <div className="min-w-0">
                                                                        <p className="text-xs text-gray-500 font-medium">Regarding:</p>
                                                                        <p className="font-bold text-[#355130] text-sm truncate">{chats.find(c => c.id === selectedChat).product}</p>
                                                                    </div>
                                                                </div>
                                                                <Link
                                                                    to="/produto/1"
                                                                    className="bg-white border border-gray-200 text-[#355130] text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-gray-50 hover:border-[#355130]/30 transition-colors whitespace-nowrap"
                                                                >
                                                                    View Ad
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="relative group">
                                                            <button className="text-gray-400 hover:text-red-500 btn-press transition-colors p-2">
                                                                <AlertTriangle size={20} />
                                                            </button>
                                                            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden hidden group-hover:block z-20">
                                                                <button
                                                                    onClick={() => setDisputeModalOpen(true)}
                                                                    className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 font-bold flex items-center gap-2"
                                                                >
                                                                    <AlertTriangle size={16} /> Report Issue
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Chat Messages Area */}
                                                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                                                    <div className="flex justify-center">
                                                        <span className="bg-gray-200 text-gray-500 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                                                            Conversation started
                                                        </span>
                                                    </div>
                                                    {/* Simulated Conversation History */}
                                                    <div className="flex gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                                                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] text-sm text-gray-700">
                                                            Olá! Vi o anúncio do {chats.find(c => c.id === selectedChat).product}. Ainda está disponível?
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3 flex-row-reverse">
                                                        <div className="bg-[#355130] text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%] text-sm">
                                                            Sim, está disponível! Tem interesse em alguma quantidade específica?
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
                                                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] text-sm text-gray-700">
                                                            {chats.find(c => c.id === selectedChat).lastMessage}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Input Area */}
                                                <div className="p-4 bg-white border-t border-gray-100">
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Type a message..."
                                                            className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-[#C9E26C] transition-colors"
                                                            value={messageInput}
                                                            onChange={(e) => setMessageInput(e.target.value)}
                                                        />
                                                        <button className="bg-[#355130] text-white p-3 rounded-full hover:bg-[#2a4126] transition-colors btn-press">
                                                            <Send size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
                                                <MessageSquare size={48} className="mb-4 opacity-20" />
                                                <h3 className="text-lg font-bold text-gray-500 mb-2">Your Conversations</h3>
                                                <p className="text-sm">Select a conversation to view details or start negotiating.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* SETTINGS TAB */}
                            {activeTab === 'settings' && (
                                <div className="bg-white rounded-[30px] border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col md:flex-row min-h-[500px] overflow-hidden">

                                    {/* Settings Navigation */}
                                    <div className="w-full md:w-64 bg-gray-50/50 p-6 space-y-2 border-b md:border-b-0 md:border-r border-gray-100">
                                        {[
                                            { id: 'account', label: 'Account Details', icon: User },
                                            { id: 'security', label: 'Security', icon: Lock },
                                            { id: 'addresses', label: 'Addresses', icon: MapPin },
                                            { id: 'payments', label: 'Payments', icon: CreditCard },
                                            { id: 'subscription', label: 'Subscription', icon: Crown },
                                        ].map(item => (
                                            <button
                                                key={item.id}
                                                onClick={() => setSettingsSection(item.id)}
                                                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all font-semibold ${settingsSection === item.id ? 'bg-white shadow-sm text-[#355130]' : 'text-gray-500 hover:bg-gray-100'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <item.icon size={18} />
                                                    <span className="text-sm">{item.label}</span>
                                                </div>
                                                {settingsSection === item.id && <ChevronRight size={14} />}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Settings Content */}
                                    <div className="flex-1 p-8">
                                        {settingsSection === 'account' && <SettingsAccount />}
                                        {settingsSection === 'security' && <SettingsSecurity />}
                                        {settingsSection === 'addresses' && <SettingsAddresses />}
                                        {settingsSection === 'payments' && <SettingsPayments />}
                                        {settingsSection === 'subscription' && <SettingsSubscription />}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Highlight Modal */}
                {highlightModalOpen && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white rounded-[40px] p-8 max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-200">
                            <button
                                onClick={() => setHighlightModalOpen(false)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 btn-press"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center mb-8">
                                <div className="bg-[#F6EA37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <Zap size={32} className="text-[#355130]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#355130] mb-2">Highlight Ad</h3>
                                <p className="text-gray-500">Increase your ad visibility and sell up to 4x faster!</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="border-2 border-[#C9E26C] bg-[#FDFFE5] p-4 rounded-2xl flex items-center justify-between cursor-pointer relative shadow-md">
                                    <div className="absolute -top-3 left-4 bg-[#355130] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Recommended</div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border-2 border-[#355130] flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#355130]"></div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#355130]">15 Days</p>
                                            <p className="text-xs text-[#355130]/70">Homepage Highlight</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-xl text-[#355130]">7.99€</span>
                                </div>

                                <div className="border border-gray-100 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-gray-200 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                                        <div>
                                            <p className="font-bold text-gray-600">7 Days</p>
                                            <p className="text-xs text-gray-400">Top of Category</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-xl text-gray-600">4.99€</span>
                                </div>

                                <div className="border border-gray-100 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-gray-200 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                                        <div>
                                            <p className="font-bold text-gray-600">30 Days</p>
                                            <p className="text-xs text-gray-400">Maximum Exposure</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-xl text-gray-600">12.99€</span>
                                </div>
                            </div>

                            <button
                                onClick={() => { setHighlightModalOpen(false); alert('Redirecting to payment...'); }}
                                className="w-full bg-[#355130] text-white py-4 rounded-full font-bold text-lg hover:bg-[#2a4126] transition-all shadow-lg btn-press flex items-center justify-center gap-2"
                            >
                                Pay and Highlight <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                )}

                {/* Dispute Modal */}
                {disputeModalOpen && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white rounded-[40px] p-8 max-w-lg w-full relative shadow-2xl animate-in zoom-in-95 duration-200">
                            <button
                                onClick={() => setDisputeModalOpen(false)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 btn-press"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center mb-6">
                                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    <AlertTriangle size={32} className="text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Report Issue</h3>
                                <p className="text-gray-500 text-sm">Opening dispute for transaction: <span className="font-bold text-gray-800">{selectedChat ? chats.find(c => c.id === selectedChat)?.product : 'Product'}</span></p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Reason for Dispute</label>
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors">
                                        <option>Product not as described</option>
                                        <option>Item not received</option>
                                        <option>Fraud attempt</option>
                                        <option>Abusive behavior</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Detailed Description</label>
                                    <textarea
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                        placeholder="Describe the issue in as much detail as possible..."
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Evidence (Optional)</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer">
                                        <Upload size={24} className="mb-2" />
                                        <span className="text-xs font-bold">Click to upload photos or documents</span>
                                    </div>
                                </div>

                                <div className="bg-red-50 p-4 rounded-xl flex gap-3 items-start">
                                    <AlertCircle size={20} className="text-red-500 mt-0.5 shrink-0" />
                                    <p className="text-xs text-red-700 leading-relaxed">
                                        <strong>Attention:</strong> By opening a dispute, the chat with this user will be temporarily blocked for analysis by the WasteSafe support team.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setDisputeModalOpen(false)}
                                    className="flex-1 bg-gray-100 text-gray-600 py-4 rounded-full font-bold hover:bg-gray-200 transition-all btn-press"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => { setDisputeModalOpen(false); alert('Dispute submitted. Our team will contact you.'); }}
                                    className="flex-1 bg-red-500 text-white py-4 rounded-full font-bold hover:bg-red-600 transition-all shadow-md btn-press"
                                >
                                    Submit Dispute
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Bottom Navigation Bar - Fixed (Moved Outside to Break Stacking Context) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-2 z-40 flex justify-around items-center safe-area-pb shadow-[0_-5px_10px_rgba(0,0,0,0.02)]">
                {[
                    { id: 'ads', label: 'Warehouse', icon: Package },
                    { id: 'offers', label: 'Negotiations', icon: DollarSign, badge: 2 },
                    { id: 'favorites', label: 'Favorites', icon: Heart },
                    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 1 },
                    { id: 'settings', label: 'Settings', icon: Settings },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => { setActiveTab(item.id); setSelectedChat(null); }}
                        className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all relative ${activeTab === item.id
                            ? 'text-[#355130] font-bold'
                            : 'text-gray-400 font-medium'
                            }`}
                    >
                        <div className={`p-1.5 rounded-full ${activeTab === item.id ? 'bg-[#C9E26C]/20' : 'bg-transparent'}`}>
                            <item.icon size={24} fill={activeTab === item.id && item.id === 'favorites' ? "currentColor" : "none"} />
                        </div>
                        <span className="text-[10px]">{item.label}</span>
                        {item.badge && (
                            <span className="absolute top-1 right-2 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                                {item.badge}
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </>
    );
};

export default MyProfile;
