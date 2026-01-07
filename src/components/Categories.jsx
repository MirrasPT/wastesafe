
const Categories = () => {
    return (
        <section className="py-16 md:py-24 relative z-10 overflow-hidden">

            <div className="waste-container space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-[#355130]">Explore por Categoria</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">

                    {/* Large Item: Matéria-Prima */}
                    <div className="lg:col-span-2 h-[300px] lg:h-full relative rounded-[30px] overflow-hidden group cursor-pointer shadow-lg hover-card">
                        <img
                            src="/imagens/Materia_Prima.jpg"
                            alt="Matéria-Prima"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                        <h3 className="absolute bottom-6 left-8 text-white text-2xl md:text-3xl font-bold">Matéria-Prima</h3>
                    </div>

                    {/* Right Column Container for stacked items */}
                    <div className="flex flex-col gap-6 h-full">

                        {/* Upper Small Item: Restos de Coleção */}
                        <div className="h-[300px] lg:h-auto lg:flex-1 relative rounded-[30px] overflow-hidden group cursor-pointer shadow-lg min-h-[200px] hover-card">
                            <img
                                src="/imagens/Restos_de_Colecao.jpg"
                                alt="Restos de Coleção"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                            <h3 className="absolute bottom-5 left-6 text-white text-xl font-bold">Restos de Coleção</h3>
                        </div>

                        {/* Lower Small Item: Peças com Defeito */}
                        <div className="h-[300px] lg:h-auto lg:flex-1 relative rounded-[30px] overflow-hidden group cursor-pointer shadow-lg min-h-[200px] hover-card">
                            <img
                                src="/imagens/Pecas_com_Defeito.jpg"
                                alt="Peças com Defeito"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                            <h3 className="absolute bottom-5 left-6 text-white text-xl font-bold">Peças com Defeito</h3>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default Categories;
