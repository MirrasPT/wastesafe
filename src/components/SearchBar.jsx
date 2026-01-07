import { Search, MapPin, Tag, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const tabs = [
    { id: 'materia-prima', label: 'Raw Material' },
    { id: 'restos', label: 'Collection Leftovers' },
    { id: 'defeitos', label: 'Defective Items' },
];

const SearchBar = () => {
    const [activeTab, setActiveTab] = useState('materia-prima');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef([]);

    useEffect(() => {
        const currentTab = tabs.findIndex(tab => tab.id === activeTab);
        const el = tabsRef.current[currentTab];
        if (el) {
            setIndicatorStyle({
                left: el.offsetLeft,
                width: el.offsetWidth
            });
        }
    }, [activeTab]);

    return (
        <div className="w-full shadow-xl relative z-30 rounded-[30px] overflow-hidden">
            {/* Tabs - Olive Green Background (#AFC463) - Desktop Only */}
            <div className="hidden md:flex bg-[#AFC463] px-8 py-2 md:px-10 md:py-3 overflow-x-auto scrollbar-hide relative items-center">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        ref={el => tabsRef.current[index] = el}
                        onClick={() => setActiveTab(tab.id)}
                        className={`mr-8 py-2 text-sm md:text-base font-semibold transition-colors duration-300 relative z-10
                            ${activeTab === tab.id
                                ? 'text-[#355130]'
                                : 'text-[#355130]/60 hover:text-[#355130]'}`}
                    >
                        {tab.label}
                    </button>
                ))}

                {/* Sliding Indicator */}
                <div
                    className="absolute bottom-0 h-[3px] bg-[#355130] rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                        left: `${indicatorStyle.left}px`,
                        width: `${indicatorStyle.width}px`
                    }}
                />
            </div>

            {/* Search Inputs - Light Green Background (#C9E26C) */}
            <div className="bg-[#C9E26C] p-4 md:p-5 flex flex-col md:flex-row gap-3">

                {/* Product Input */}
                <div className="flex-[1.5] flex items-center bg-[#F9F9F9] rounded-full px-6 py-3 md:py-4 transition-all hover:bg-white/90">
                    <Tag className="text-[#355130]/50 mr-3" size={20} />
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="bg-transparent w-full outline-none text-[#355130] placeholder-[#355130]/50 font-medium"
                    />
                </div>

                {/* Location Input */}
                <div className="flex-1 flex items-center bg-[#F9F9F9] rounded-full px-6 py-3 md:py-4 transition-all hover:bg-white/90">
                    <MapPin className="text-[#355130]/50 mr-3" size={20} />
                    <input
                        type="text"
                        placeholder="Location"
                        className="bg-transparent w-full outline-none text-[#355130] placeholder-[#355130]/50 font-medium"
                    />
                </div>

                {/* Mobile Category Dropdown (3rd Place) */}
                <div className="md:hidden flex items-center bg-[#F9F9F9] rounded-full px-6 py-3 md:py-4 transition-all hover:bg-white/90 relative">
                    <Tag className="text-[#355130]/50 mr-3" size={20} />
                    <select
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                        className="bg-transparent w-full outline-none text-[#355130] font-medium appearance-none z-10 relative bg-none"
                    >
                        {tabs.map(tab => (
                            <option key={tab.id} value={tab.id}>{tab.label}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-6 text-[#355130]/50 pointer-events-none" size={20} />
                </div>

                {/* Search Button - Yellow (#F6EA37) */}
                <Link to="/catalogo" className="bg-[#F6EA37] hover:bg-yellow-300 text-[#355130] font-bold px-8 py-3 md:py-4 rounded-full transition-all shadow-sm flex items-center justify-center gap-2 min-w-[160px] btn-press hover-glow">
                    <Search size={20} />
                    <span>Search</span>
                </Link>
            </div>
        </div>
    );
};

export default SearchBar;
