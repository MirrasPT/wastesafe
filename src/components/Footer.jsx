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
                    <h4 className="font-bold text-[#C9E26C] text-lg">Plataforma</h4>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Comprar</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Vender</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Preços e Planos</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Empresas Verificadas</a>
                </div>

                <div className="flex flex-col gap-5 items-center md:items-start">
                    <h4 className="font-bold text-[#C9E26C] text-lg">Suporte</h4>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Central de Ajuda</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Regras de Publicação</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Resolução de Disputas</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Contactar Admin</a>
                </div>

                <div className="flex flex-col gap-5 items-center md:items-start">
                    <h4 className="font-bold text-[#C9E26C] text-lg">Legal</h4>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Termos e Condições</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Política de Privacidade</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Livro de Reclamações</a>
                    <a href="#" className="text-white/90 hover:text-[#C9E26C] transition-colors">Livro de Elogios</a>
                </div>

            </div>

            <div className="waste-container border-t border-white/10 mt-16 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <span>© 2025 Wastesafe. Todos os direitos reservados.</span>
                <span className="flex items-center gap-1">
                    Desenvolvido por <span className="text-[#C9E26C] font-semibold">Setup Tech</span>
                </span>
            </div>
        </footer>
    );
};
export default Footer;
