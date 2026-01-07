import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileInbox = () => {
    // Mock Messages
    const conversations = [
        { id: 1, name: "Maria Silva", avatar: "MS", lastMessage: "Ainda está disponível?", time: "10:30", unread: 2, productId: 1 },
        { id: 2, name: "João Santos", avatar: "JS", lastMessage: "Aceita 20€ pelos excedentes?", time: "Ontem", unread: 0, productId: 2 },
        { id: 3, name: "Têxteis do Norte", avatar: "TN", lastMessage: "Podemos agendar a recolha?", time: "Segunda", unread: 0, productId: 3 },
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="p-4 pt-6 pb-2">
                <h1 className="text-lg font-bold text-[#355130] mb-4">Mensagens</h1>

                {/* Search */}
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input className="w-full bg-gray-50 h-10 rounded-xl pl-9 pr-3 outline-none text-xs font-medium" placeholder="Pesquisar conversas..." />
                </div>
            </div>

            {/* List */}
            <div>
                {conversations.map(conv => (
                    <Link
                        to={`/mobile/chat/${conv.id}`}
                        key={conv.id}
                        className="flex gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer border-b border-gray-50 last:border-0"
                    >
                        <div className="w-10 h-10 rounded-full bg-[#C9E26C] flex items-center justify-center text-[#355130] font-bold text-xs shrink-0">
                            {conv.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="font-bold text-gray-800 text-sm truncate">{conv.name}</h3>
                                <span className="text-[9px] font-bold text-gray-400">{conv.time}</span>
                            </div>
                            <p className={`text-xs truncate ${conv.unread > 0 ? 'text-gray-800 font-bold' : 'text-gray-500'}`}>
                                {conv.lastMessage}
                            </p>
                        </div>
                        {conv.unread > 0 && (
                            <div className="w-4 h-4 bg-[#355130] rounded-full flex items-center justify-center text-[9px] text-white font-bold shrink-0 self-center">
                                {conv.unread}
                            </div>
                        )}
                    </Link>
                ))}

                {conversations.length === 0 && (
                    <div className="text-center py-16 text-gray-400">
                        <p className="text-sm">Sem conversas ainda.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileInbox;
