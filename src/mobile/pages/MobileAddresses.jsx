import { useState } from 'react';
import { ChevronLeft, Plus, MapPin, Check, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileAddresses = () => {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: "Armazém Principal",
            line1: "Rua da Indústria Têxtil, 456",
            line2: "Zona Industrial da Maia",
            city: "4470-123 Maia, Portugal",
            isMain: true
        },
        {
            id: 2,
            name: "Loja Centro",
            line1: "Avenida dos Aliados, 20",
            line2: "Loja 3",
            city: "4000-000 Porto, Portugal",
            isMain: false
        }
    ]);

    const handleSetMain = (id) => {
        setAddresses(addresses.map(addr => ({
            ...addr,
            isMain: addr.id === id
        })));
    };

    const handleRemove = (id) => {
        setAddresses(addresses.filter(addr => addr.id !== id));
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-1">
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <h1 className="text-base font-bold text-[#355130]">Moradas</h1>
                </div>
                <button className="flex items-center gap-1 bg-[#FDFFE5] text-[#355130] px-3 py-1.5 rounded-lg text-xs font-bold border border-[#E8F5BA]">
                    <Plus size={14} /> Adicionar Nova
                </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
                {addresses.map(addr => (
                    <div
                        key={addr.id}
                        className={`rounded-2xl p-4 border ${addr.isMain
                                ? 'bg-[#FDFFE5] border-[#C9E26C] relative'
                                : 'bg-white border-gray-100'
                            }`}
                    >
                        {addr.isMain && (
                            <div className="absolute top-4 right-4 text-[#355130]">
                                <Check size={20} className="stroke-[3]" />
                            </div>
                        )}

                        <div className="flex items-center gap-2 mb-3">
                            <MapPin size={18} className={addr.isMain ? 'text-[#355130]' : 'text-gray-400'} />
                            <h3 className={`font-bold text-sm ${addr.isMain ? 'text-[#355130]' : 'text-gray-800'}`}>
                                {addr.name}
                            </h3>
                        </div>

                        <div className="space-y-1 mb-4 pl-7 text-xs text-gray-600">
                            <p>{addr.line1}</p>
                            <p>{addr.line2}</p>
                            <p>{addr.city}</p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-black/5 pl-7">
                            <div className="flex gap-4">
                                <button className="text-xs font-bold text-gray-500 hover:text-gray-800">
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleRemove(addr.id)}
                                    className="text-xs font-bold text-red-400 hover:text-red-500"
                                >
                                    Remover
                                </button>
                            </div>
                            {!addr.isMain && (
                                <button
                                    onClick={() => handleSetMain(addr.id)}
                                    className="text-xs font-bold text-[#355130]"
                                >
                                    Definir Principal
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {addresses.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-sm">Sem moradas adicionadas.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileAddresses;
