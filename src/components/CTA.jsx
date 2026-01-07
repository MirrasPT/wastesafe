import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-12 md:py-20 relative z-10">
            <div className="waste-container">
                <div className="bg-[#355130] rounded-[30px] p-12 md:p-20 text-center relative overflow-hidden shadow-xl">
                    <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#C9E26C] leading-tight">
                            Ready to clean out your warehouse?
                        </h2>
                        <p className="text-white text-base md:text-lg max-w-2xl mx-auto font-normal opacity-90">
                            Join hundreds of textile companies and start selling your surplus today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                            <Link to="/registar" className="bg-[#F6EA37] hover:scale-105 text-[#355130] font-bold px-8 py-4 rounded-full transition-all shadow-md cursor-pointer min-w-[240px] btn-press hover-glow inline-flex justify-center items-center">
                                Start Selling for Free
                            </Link>
                            <Link to="/como-vender" className="bg-[#C9E26C] hover:scale-105 text-[#355130] font-bold px-8 py-4 rounded-full transition-all cursor-pointer min-w-[180px] btn-press hover-glow inline-flex justify-center items-center">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CTA;
