import SearchBar from './SearchBar';

const Hero = () => {
    return (
        <section
            className="relative pt-32 pb-32 md:pt-40 md:pb-36 overflow-visible rounded-b-[30px] bg-[#355130] md:bg-[url('/imagens/Banner_Homepage_background.jpg')] bg-cover bg-center bg-no-repeat min-h-[70vh] flex flex-col justify-center"
        >
            {/* Background Shapes - Adjusted opacity */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-10" />

            <div className="waste-container relative z-20">
                <div className="flex flex-col items-center text-center md:items-start md:text-left">

                    {/* Text Content */}
                    <div className="max-w-3xl text-white space-y-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                            Turn your <br />
                            <span className="text-[#F6EA37] relative inline-block">
                                Dead Stock
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-waste-lime opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span> <br />
                            into Profit
                        </h1>
                            The leading B2B Marketplace for the Textile Industry. Buy and sell raw materials, collection leftovers, and surplus safely.

                    </div>
                </div>
            </div>

            {/* Search Bar Positioned to Overlap */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 w-full">
                <div className="waste-container">
                    <SearchBar />
                </div>
            </div>

        </section>
    );
};
export default Hero;
