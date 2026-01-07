import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = ({ id, image, title, price, oldPrice, category, className = "" }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    return (
        <Link
            to={`/produto/${id}`}
            className={`group relative w-full ${className.includes('h-') ? '' : 'h-[400px]'} rounded-[30px] overflow-hidden shadow-lg transition-transform duration-300 z-0 bg-white block isolate [backface-visibility:hidden] [transform:translate3d(0,0,0)] hover-card ${className}`}
            style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform rounded-[30px]"
            />

            {/* Floating Glass Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#C9D6B3]/90 backdrop-blur-md p-5 flex items-center justify-between border-t border-white/20 rounded-t-[30px] z-20">
                <div>
                    <h3 className="font-bold text-lg leading-tight mb-1 text-[#355130] truncate">{title}</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-medium text-[#355130]">{price}</span>
                        {oldPrice && <span className="text-xs text-[#355130]/60 line-through font-medium">{oldPrice}</span>}
                    </div>
                </div>
                <button
                    onClick={toggleFavorite}
                    className="w-10 h-10 rounded-full bg-[#C9E26C] hover:bg-[#D4E680] text-[#355130] flex items-center justify-center transition-transform hover:scale-105 shadow-sm cursor-pointer border border-[#355130]/10 shrink-0 btn-press hover-glow"
                >
                    <Heart size={18} className={`transition-transform duration-300 ${isFavorite ? "fill-[#355130] scale-110" : ""}`} strokeWidth={2} />
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;
