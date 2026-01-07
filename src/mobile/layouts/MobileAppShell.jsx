import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Heart, PlusCircle, MessageCircle, User } from 'lucide-react';
import { useEffect, useRef } from 'react';

const MobileAppShell = () => {
    const location = useLocation();
    const mainRef = useRef(null);

    // Scroll to top on route change
    useEffect(() => {
        if (mainRef.current) {
            mainRef.current.scrollTo(0, 0);
        }
    }, [location.pathname]);

    const isActive = (path) => {
        return location.pathname === path || (path !== '/mobile' && location.pathname.startsWith(path));
    };

    const navItems = [
        { icon: Home, label: 'Início', path: '/mobile' },
        { icon: Heart, label: 'Favoritos', path: '/mobile/favorites' },
        { icon: PlusCircle, label: '', path: '/mobile/publish', isSpecial: true },
        { icon: MessageCircle, label: 'Mensagens', path: '/mobile/inbox' },
        { icon: User, label: 'Profile', path: '/mobile/profile' },
    ];

    const isAuthPage = location.pathname.includes('/login') || location.pathname.includes('/register');

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 md:py-8 font-sans">
            {/* Phone Frame Container */}
            <div className="relative w-full max-w-md md:max-w-[375px] md:h-[750px] bg-white md:rounded-[45px] md:border-[10px] md:border-gray-900 shadow-2xl overflow-hidden flex flex-col md:transform-gpu">

                {/* Notch / Dynamic Island (Desktop Only) */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-50 pointer-events-none"></div>

                {/* Status Bar Mockup */}
                <div className="h-10 bg-white flex justify-between items-end px-5 pb-1.5 shrink-0 select-none z-40">
                    <span className="text-[11px] font-bold text-gray-900">9:41</span>
                    <div className="flex gap-1 items-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-gray-900/10 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                        </div>
                        <div className="w-4 h-2.5 border border-gray-300 rounded-[2px] relative">
                            <div className="absolute inset-0 bg-gray-900 w-[60%]"></div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <main ref={mainRef} className={`flex-1 overflow-y-auto no-scrollbar bg-gray-50 relative ${isAuthPage ? 'pb-0' : 'pb-20'}`}>
                    <Outlet />
                </main>

                {/* Bottom Home Indicator (Desktop Only) */}
                <div className="hidden md:block absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-900/20 rounded-full z-50 pointer-events-none"></div>

                {/* Bottom Navigation */}
                {!isAuthPage && (
                    <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-3 py-2 pb-5 flex justify-around items-end z-40">
                        {navItems.map((item) => {
                            const active = isActive(item.path);
                            const Icon = item.icon;

                            if (item.isSpecial) {
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className="relative -top-4"
                                    >
                                        <div className="bg-[#355130] text-white p-3.5 rounded-full shadow-lg shadow-[#355130]/30 transform active:scale-95 transition-all">
                                            <Icon size={22} strokeWidth={2} />
                                        </div>
                                    </Link>
                                );
                            }

                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex flex-col items-center gap-1 transition-colors duration-200 ${active ? 'text-[#355130]' : 'text-gray-400'}`}
                                >
                                    {/* Icon with circle background when active */}
                                    <div className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${active ? 'bg-[#C9E26C]' : ''}`}>
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className={`text-[9px] ${active ? 'font-bold text-[#355130]' : 'font-medium text-gray-400'}`}>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                )}
            </div>
        </div>
    );
};

export default MobileAppShell;
