const Banner = () => {
    return (
        <div className="waste-container py-8 md:py-16 relative z-10">
            <div className="w-full bg-gray-100/50 backdrop-blur-sm rounded-[2rem] border-2 border-dashed border-gray-300 h-48 md:h-64 flex flex-col items-center justify-center text-gray-400 gap-3">
                <div className="bg-white p-3 rounded-full shadow-sm">
                    <span className="font-bold text-xs uppercase tracking-widest text-gray-300">Ads</span>
                </div>
                <span className="font-medium">Espaço para o seu Banner</span>
                <span className="text-xs text-gray-300">728x90 / Responsivo</span>
            </div>
        </div>
    );
};
export default Banner;
