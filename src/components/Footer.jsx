const Footer = () => {
    return (
        <footer className="bg-[#355130] text-white pt-20 pb-24 lg:pb-10 rounded-t-[50px] relative z-20 mt-[-40px]">
            <div className="waste-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-center md:text-left">

                {/* Brand */}
                <div className="flex flex-col gap-6 items-center md:items-start">
                    <div className="flex items-center gap-2">
                        <img src="/icons/Logo_Footer_Branco.svg" alt="WasteSafe" className="h-10 md:h-12" />
                    </div>
                </div>

                {/* Menu Columns */}
                <div className="flex flex-col gap-5 items-center md:items-start">
                    <h4 className="font-bold text-[#C9E26C] text-lg">Platform</h4>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Buy</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Sell</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Pricing & Plans</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Verified Companies</a>
                </div>

                <div className="flex flex-col gap-5 items-center md:items-start">
                    <h4 className="font-bold text-[#C9E26C] text-lg">Support</h4>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Help Center</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Posting Rules</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Dispute Resolution</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Contact Admin</a>
                </div>

                <div className="flex flex-col gap-5 items-center md:items-start">
                    <h4 className="font-bold text-[#C9E26C] text-lg">Legal</h4>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Terms & Conditions</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Privacy Policy</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Complaints Book</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Compliments Book</a>
                </div>

            </div>

            <div className="waste-container border-t border-white/10 mt-16 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <span>© 2025 Wastesafe. All rights reserved.</span>
                <span className="flex items-center gap-1">
                    Developed by <span className="text-[#C9E26C] font-semibold">Setup Tech</span>
                </span>
            </div>
        </footer>
    );
};
export default Footer;
