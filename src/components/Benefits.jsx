import { Leaf, Lock, Settings } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            title: "Circular Economy",
            text: "Reduce waste by giving a new life to surplus and materials sitting in your warehouse.",
            Icon: Leaf,
            iconBg: "bg-[#C9E26C]", // Light Green
            iconColor: "text-[#355130]"
        },
        {
            title: "Secure Business",
            text: "Verified profiles and integrated chat system for transparent and reliable negotiations.",
            Icon: Lock,
            iconBg: "bg-[#355130]", // Dark Green
            iconColor: "text-[#C9E26C]"
        },
        {
            title: "Simple Management",
            text: "Organize your \"Digital Warehouse\", receive expiration alerts, and sell faster.",
            Icon: Settings,
            iconBg: "bg-[#F6EA37]", // Yellow
            iconColor: "text-[#355130]"
        },
    ];

    return (
        <section className="bg-[#C9E26C] py-24 md:py-32 relative z-10 w-full rounded-t-[30px]">
            <div className="waste-container relative">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-5xl md:text-7xl font-bold text-[#355130]">
                        Why use <br /> WasteSafe?
                    </h2>
                    <p className="text-[#355130]/80 text-lg md:text-xl font-normal max-w-lg mx-auto leading-relaxed">
                        We connect companies to create a more sustainable and efficient textile industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-white rounded-[30px] p-8 md:p-10 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 h-full">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm ${b.iconBg}`}>
                                <b.Icon size={28} className={b.iconColor} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#355130] mb-4">{b.title}</h3>
                            <p className="text-[#355130]/70 leading-relaxed text-base">{b.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Benefits;
