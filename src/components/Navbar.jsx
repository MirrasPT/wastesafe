import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileVenderOpen, setMobileVenderOpen] = useState(false);
    const location = useLocation();

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Also close menu on route change
            setIsOpen(false);
        }
    }, [isOpen, location]);

    return (
        <>
            <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl flex items-center gap-3 md:gap-4 font-sans text-sm font-medium">

                {/* Balloon 1: Logo & Links (Desktop) / Hamburger (Mobile) - White #FFFFFF */}
                <div className="flex-1 bg-white rounded-full h-14 md:h-16 px-6 flex items-center justify-between shadow-sm">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src="/icons/Logo_Nav_Verde.svg" alt="WasteSafe" className="h-6 md:h-8 max-w-[150px]" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 text-waste-green-900 ml-auto mr-8">
                        <Link to="/catalogo" className="flex items-center gap-1 link-underline pb-1">
                            Buy <ChevronDown size={16} />
                        </Link>

                        {/* Dropdown for Vender */}
                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 link-underline pb-1 focus:outline-none"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Sell <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <div className="p-2 flex flex-col gap-1">
                                    <Link to="/como-vender" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#355130] rounded-xl transition-colors font-medium text-center">
                                        How to Sell?
                                    </Link>
                                    <Link to="/subscricoes" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#355130] rounded-xl transition-colors font-medium text-center">
                                        Subscriptions
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link to="/sobre" className="link-underline pb-1">
                            About Us
                        </Link>
                    </div>

                    {/* Mobile Hamburger Trigger */}
                    <button
                        className="lg:hidden text-[#355130] p-2 btn-press"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>

                {/* Balloon 2: Publicar Anúncio (Desktop Only) */}
                <Link to="/publicar" className="hidden md:flex bg-[#F6EA37] hover:bg-yellow-300 text-waste-green-900 rounded-full h-14 md:h-16 px-6 items-center gap-2 shadow-sm transition-transform whitespace-nowrap cursor-pointer btn-press">
                    <span className="font-semibold hidden md:inline">Post Ad</span>
                    <span className="font-semibold md:hidden">Post</span>
                    <img src="/icons/Add.svg" alt="" className="w-5 h-5" />
                </Link>

                {/* Balloon 3: Profile (Desktop Only) */}
                <Link to="/login" className="hidden md:flex bg-[#C9E26C] hover:bg-lime-300 text-waste-green-900 rounded-full h-14 md:h-16 w-14 md:w-16 items-center justify-center shadow-sm transition-transform cursor-pointer btn-press">
                    <img src="/icons/Profile.svg" alt="Profile" className="w-5 h-5 md:w-6 md:h-6" />
                </Link>

            </nav>

            {/* Mobile Full Page Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-[#355130] text-white flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>

                {/* Menu Header - Positioned exactly like Navbar to prevent jump */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-[70]">
                    <div className="bg-white rounded-full h-14 md:h-16 px-6 flex items-center justify-between shadow-sm">
                        <div className="flex items-center">
                            <img src="/icons/Logo_Nav_Verde.svg" alt="WasteSafe" className="h-6 md:h-8 max-w-[150px]" />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-[#355130] p-2 hover:bg-black/5 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Menu Content */}
                <div className={`flex flex-col flex-1 p-6 transition-all duration-700 delay-100 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <div className="flex flex-col gap-8 items-center text-center text-3xl font-bold flex-1 justify-center w-full">
                        <Link to="/catalogo" className="hover:text-[#C9E26C] transition-colors" onClick={() => setIsOpen(false)}>Buy</Link>

                        {/* Mobile Vender Accordion */}
                        <div className="flex flex-col items-center w-full">
                            <button
                                onClick={() => setMobileVenderOpen(!mobileVenderOpen)}
                                className="flex items-center gap-2 hover:text-[#C9E26C] transition-colors"
                            >
                                Sell
                                <ChevronDown
                                    size={24}
                                    className={`transition-transform duration-300 ${mobileVenderOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col items-center gap-4 ${mobileVenderOpen ? 'max-h-[200px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <Link
                                    to="/como-vender"
                                    className="text-xl text-white/70 hover:text-[#C9E26C] font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Guide: How to Sell
                                </Link>
                                <Link
                                    to="/subscricoes"
                                    className="text-xl text-white/70 hover:text-[#C9E26C] font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Plans and Pricing
                                </Link>
                            </div>
                        </div>

                        <Link to="/sobre" className="hover:text-[#C9E26C] transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
                    </div>

                    <div className="flex flex-col gap-4 mt-auto mb-8">
                        <Link to="/publicar" className="bg-[#F6EA37] text-[#355130] w-full py-4 rounded-full font-bold text-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                            Post Ad
                            <img src="/icons/Add.svg" alt="" className="w-5 h-5" />
                        </Link>
                        <Link to="/login" className="bg-[#C9E26C] text-[#355130] w-full py-4 rounded-full font-bold text-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                            My Account
                            <img src="/icons/Profile.svg" alt="" className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Navbar;
