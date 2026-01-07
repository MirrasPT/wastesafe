import { useState } from 'react';
import { Check, Zap, Crown, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileSubscription = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('current'); // 'current' or 'plans'
    const [showCancelModal, setShowCancelModal] = useState(false);

    // Current subscription (mock data)
    const currentPlan = {
        name: "Básico",
        type: "Grátis",
        price: "0.00€",
        since: "12 Nov 2024",
        features: [
            "Até 3 anúncios ativos",
            "Acesso a contactos públicos",
            "Suporte Básico"
        ]
    };

    const plans = [
        {
            id: 'basic',
            name: 'Básico',
            badge: 'Iniciante',
            badgeColor: 'bg-gray-100 text-gray-600',
            price: '0€',
            period: '/mês',
            description: 'Ideal para quem está a começar.',
            features: ['Até 3 anúncios ativos', 'Acesso a contactos públicos', 'Suporte por email (48h)'],
            isCurrent: true,
        },
        {
            id: 'pro',
            name: 'Pro',
            badge: 'Profissional',
            badgeColor: 'bg-[#355130] text-white',
            price: '29€',
            period: '/mês',
            description: 'Para vendedores regulares.',
            popular: true,
            features: ['Anúncios Ilimitados', 'Ver Contactos Diretos', 'Prioridade na Homepage', 'Selo "Vendedor Pro"', 'Acesso antecipado a stocks'],
            isCurrent: false,
        },
        {
            id: 'corporate',
            name: 'Corporate',
            badge: 'Empresa',
            badgeColor: 'bg-purple-100 text-purple-600',
            price: 'Sob Consulta',
            period: '',
            description: 'Soluções à medida para empresas.',
            features: ['API de Integração', 'Gestor de Conta Dedicado', 'Logística Integrada', 'Faturação Unificada'],
            isCurrent: false,
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                <button onClick={() => navigate(-1)} className="p-1">
                    <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <h1 className="text-base font-bold text-[#355130]">Subscrição</h1>
            </div>

            {/* Tabs */}
            <div className="bg-white px-4 py-2 border-b border-gray-100">
                <div className="flex gap-2">
                    <button
                        onClick={() => setActiveTab('current')}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'current'
                                ? 'bg-[#355130] text-white'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                    >
                        A Minha Subscrição
                    </button>
                    <button
                        onClick={() => setActiveTab('plans')}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'plans'
                                ? 'bg-[#355130] text-white'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                    >
                        Ver Planos
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                {activeTab === 'current' ? (
                    /* Current Subscription */
                    <div>
                        <p className="text-xs text-gray-500 mb-4">Gira o seu plano e faturação.</p>

                        {/* Current Plan Card */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Plano Atual</span>
                                    <h2 className="text-xl font-bold text-[#355130]">{currentPlan.name} <span className="text-gray-400 font-normal">({currentPlan.type})</span></h2>
                                    <p className="text-[10px] text-gray-400">Ativo desde {currentPlan.since}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl font-bold text-[#355130]">{currentPlan.price}</span>
                                    <span className="text-[10px] text-gray-400 block">/mês</span>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="bg-gray-50 rounded-xl p-3 mb-4">
                                <p className="text-[10px] font-bold text-gray-600 mb-2">Funcionalidades do seu plano:</p>
                                <ul className="space-y-1.5">
                                    {currentPlan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-gray-600">
                                            <Check size={12} className="text-green-500" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Actions */}
                            <button
                                onClick={() => setActiveTab('plans')}
                                className="w-full h-12 bg-[#355130] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-all mb-2"
                            >
                                <Zap size={16} className="text-yellow-400" /> Fazer Upgrade para Pro
                            </button>
                            <button
                                onClick={() => setShowCancelModal(true)}
                                className="w-full py-3 text-red-500 font-bold text-xs"
                            >
                                Cancelar Subscrição
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Plans List */
                    <div className="space-y-4">
                        {plans.map(plan => (
                            <div
                                key={plan.id}
                                className={`bg-white rounded-2xl p-4 shadow-sm border ${plan.popular ? 'border-[#C9E26C] border-2' : 'border-gray-100'
                                    } relative`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-2 right-4 bg-[#C9E26C] text-[#355130] px-2 py-0.5 rounded text-[9px] font-bold">
                                        Mais Popular
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <span className={`${plan.badgeColor} px-2 py-0.5 rounded text-[9px] font-bold uppercase`}>
                                            {plan.badge}
                                        </span>
                                        <h3 className="text-lg font-bold text-[#355130] mt-1">{plan.name}</h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xl font-bold text-[#355130]">{plan.price}</span>
                                        {plan.period && <span className="text-[10px] text-gray-400">{plan.period}</span>}
                                    </div>
                                </div>

                                <p className="text-[10px] text-gray-500 mb-3">{plan.description}</p>

                                <ul className="space-y-1 mb-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[11px] text-gray-600">
                                            <Check size={10} className={plan.popular ? 'text-[#355130]' : 'text-green-500'} /> {feature}
                                        </li>
                                    ))}
                                </ul>

                                {plan.isCurrent ? (
                                    <div className="h-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 font-bold text-xs">
                                        Plano Atual
                                    </div>
                                ) : plan.id === 'corporate' ? (
                                    <button className="w-full h-11 border-2 border-gray-200 text-gray-600 rounded-xl font-bold text-xs active:scale-[0.98] transition-all">
                                        Contactar Vendas
                                    </button>
                                ) : (
                                    <button className="w-full h-11 bg-[#355130] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
                                        <Crown size={14} /> Subscrever
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Cancel Modal */}
            {showCancelModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setShowCancelModal(false)} />
                    <div className="relative bg-white rounded-2xl p-4 w-full max-w-[300px] text-center">
                        <h3 className="font-bold text-gray-800 mb-1">Cancelar Subscrição?</h3>
                        <p className="text-xs text-gray-500 mb-4">O seu plano será revertido para Básico (Grátis) no final do período atual.</p>
                        <div className="flex gap-2">
                            <button onClick={() => setShowCancelModal(false)} className="flex-1 py-3.5 bg-gray-100 rounded-xl text-gray-600 font-bold text-xs">
                                Manter
                            </button>
                            <button onClick={() => setShowCancelModal(false)} className="flex-1 py-3.5 bg-red-500 text-white rounded-xl font-bold text-xs">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileSubscription;
