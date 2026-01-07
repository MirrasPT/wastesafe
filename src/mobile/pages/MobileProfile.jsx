import { Package, DollarSign, Heart, MessageCircle, Crown, Settings, LogOut, ChevronRight, Star, ChevronLeft, User, Shield, MapPin, CreditCard, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MobileProfile = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const navigate = useNavigate();

    // Settings submenu
    if (showSettings) {
        return (
            <div className="bg-white">
                {/* Settings Header */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                    <button onClick={() => setShowSettings(false)} className="p-1">
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <h1 className="text-base font-bold text-gray-800">Definições</h1>
                </div>

                {/* Settings Menu */}
                <div className="pt-2">
                    <Link to="/mobile/account-data" className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50">
                        <User size={20} className="text-gray-400" />
                        <span className="flex-1 text-sm text-gray-700">Dados da Conta</span>
                        <ChevronRight size={16} className="text-gray-300" />
                    </Link>
                    <Link to="/mobile/security" className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50">
                        <Shield size={20} className="text-gray-400" />
                        <span className="flex-1 text-sm text-gray-700">Segurança</span>
                        <ChevronRight size={16} className="text-gray-300" />
                    </Link>
                    <Link to="/mobile/addresses" className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50">
                        <MapPin size={20} className="text-gray-400" />
                        <span className="flex-1 text-sm text-gray-700">Moradas</span>
                        <ChevronRight size={16} className="text-gray-300" />
                    </Link>
                    <Link to="/mobile/payments" className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50">
                        <CreditCard size={20} className="text-gray-400" />
                        <span className="flex-1 text-sm text-gray-700">Métodos de Pagamento</span>
                        <ChevronRight size={16} className="text-gray-300" />
                    </Link>
                    <button
                        onClick={() => setShowDeleteModal(true)}
                        className="w-full flex items-center gap-3 px-4 py-3 active:bg-red-50 text-left"
                    >
                        <Trash2 size={20} className="text-red-400" />
                        <span className="flex-1 text-sm text-red-500">Eliminar Conta</span>
                    </button>
                </div>

                {/* Delete Modal */}
                {showDeleteModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/40" onClick={() => setShowDeleteModal(false)} />
                        <div className="relative bg-white rounded-2xl p-4 w-full max-w-[280px] text-center">
                            <h3 className="font-bold text-gray-800 mb-1">Eliminar Conta?</h3>
                            <p className="text-xs text-gray-500 mb-4">Esta ação é irreversível.</p>
                            <div className="flex gap-2">
                                <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-3.5 bg-gray-100 rounded-xl text-gray-600 font-bold text-xs">
                                    Cancelar
                                </button>
                                <button onClick={() => setShowDeleteModal(false)} className="flex-1 py-3.5 bg-red-500 text-white rounded-xl font-bold text-xs">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Profile Header */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Renato+Ferreira&background=C9E26C&color=355130" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <h1 className="text-base font-bold text-gray-800">Renato F.</h1>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                        {[1, 2, 3, 4, 5].map(i => (
                            <Star key={i} size={10} className="text-gray-300" />
                        ))}
                        <span className="ml-1 font-bold">0</span>
                        <span>(0)</span>
                    </div>
                    <p className="text-[10px] text-gray-400">Na WasteSafe desde 2025</p>
                </div>
            </div>

            {/* Main Menu */}
            <div className="pt-2">
                <Link to="/mobile/warehouse" className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50">
                    <Package size={20} className="text-gray-400" />
                    <span className="flex-1 text-sm text-gray-700">Armazém</span>
                    <ChevronRight size={16} className="text-gray-300" />
                </Link>
                <Link to="/mobile/negotiations" className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50">
                    <DollarSign size={20} className="text-gray-400" />
                    <span className="flex-1 text-sm text-gray-700">Negociações</span>
                    <ChevronRight size={16} className="text-gray-300" />
                </Link>
                <Link to="/mobile/favorites" className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50">
                    <Heart size={20} className="text-gray-400" />
                    <span className="flex-1 text-sm text-gray-700">Favoritos</span>
                    <ChevronRight size={16} className="text-gray-300" />
                </Link>
                <Link to="/mobile/inbox" className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50">
                    <MessageCircle size={20} className="text-gray-400" />
                    <span className="flex-1 text-sm text-gray-700">Mensagens</span>
                    <ChevronRight size={16} className="text-gray-300" />
                </Link>
                <Link to="/mobile/subscription" className="flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50">
                    <Crown size={20} className="text-gray-400" />
                    <span className="flex-1 text-sm text-gray-700">Subscrição</span>
                    <ChevronRight size={16} className="text-gray-300" />
                </Link>
                <button
                    onClick={() => setShowSettings(true)}
                    className="w-full flex items-center gap-3 px-4 py-3 border-b border-gray-50 active:bg-gray-50 text-left"
                >
                    <Settings size={20} className="text-gray-400" />
                    <span className="flex-1 text-sm text-gray-700">Definições</span>
                    <ChevronRight size={16} className="text-gray-300" />
                </button>
            </div>

            {/* Logout */}
            <div className="pt-4 pb-4">
                <button
                    onClick={() => setShowLogoutModal(true)}
                    className="w-full flex items-center gap-3 px-4 py-3 active:bg-gray-50 text-left"
                >
                    <LogOut size={20} className="text-gray-400" />
                    <span className="flex-1 text-sm text-gray-700">Terminar Sessão</span>
                </button>
            </div>

            {/* Logout Modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setShowLogoutModal(false)} />
                    <div className="relative bg-white rounded-2xl p-4 w-full max-w-[280px] text-center">
                        <h3 className="font-bold text-gray-800 mb-1">Terminar Sessão?</h3>
                        <p className="text-xs text-gray-500 mb-4">Tem a certeza que pretende sair?</p>
                        <div className="flex gap-2">
                            <button onClick={() => setShowLogoutModal(false)} className="flex-1 py-3.5 bg-gray-100 rounded-xl text-gray-600 font-bold text-xs">
                                Cancelar
                            </button>
                            <button onClick={() => navigate('/mobile/login')} className="flex-1 py-3.5 bg-[#355130] text-white rounded-xl font-bold text-xs">
                                Sair
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileProfile;
