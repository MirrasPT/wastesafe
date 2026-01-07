import { MapPin, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileProductCard = ({
    id = 1,
    title,
    price,
    oldPrice,
    location,
    image,
    type,
    quality,
    compact = false
}) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <Link to={`/mobile/product/${id}`} className={`block bg-white ${compact ? 'rounded-xl' : 'rounded-2xl'} shadow-sm border border-gray-100 overflow-hidden active:scale-[0.98] transition-all`}>
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-200">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Badges */}
                <div className={`absolute ${compact ? 'top-1.5 left-1.5' : 'top-2 left-2'} flex flex-col gap-1`}>
                    {type && (
                        <span className={`bg-black/60 backdrop-blur-md text-white ${compact ? 'px-1.5 py-0.5 text-[8px]' : 'px-2 py-0.5 text-[10px]'} rounded-md font-bold`}>
                            {type}
                        </span>
                    )}
                </div>

                {/* Heart Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsLiked(!isLiked);
                    }}
                    className={`absolute ${compact ? 'top-1.5 right-1.5 p-1.5' : 'top-2 right-2 p-2'} bg-white/80 backdrop-blur-sm rounded-full shadow-sm active:scale-90 transition-transform`}
                >
                    <Heart
                        size={compact ? 12 : 16}
                        className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                    />
                </button>
            </div>

            {/* Content */}
            <div className={compact ? 'p-2' : 'p-3'}>
                <div className="flex justify-between items-start mb-0.5">
                    <h3 className={`font-bold text-gray-800 ${compact ? 'text-xs' : 'text-sm'} line-clamp-1`}>{title}</h3>
                </div>

                <div className={`flex items-center gap-1 text-gray-400 ${compact ? 'text-[8px] mb-1' : 'text-[10px] mb-2'} font-medium`}>
                    <MapPin size={compact ? 8 : 10} />
                    <span className="line-clamp-1">{location}</span>
                </div>

                <div className="flex items-end gap-1.5">
                    <span className={`text-[#355130] font-bold ${compact ? 'text-sm' : 'text-base'}`}>{price}</span>
                    {oldPrice && (
                        <span className={`text-gray-400 ${compact ? 'text-[8px]' : 'text-[10px]'} line-through mb-0.5`}>{oldPrice}</span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default MobileProductCard;
