import { useState } from 'react';
import { ChevronLeft, Plus, CreditCard, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobilePayments = () => {
    const navigate = useNavigate();

    // Mock Payment Methods
    const [paymentMethods] = useState([
        {
            id: 1,
            type: 'Mastercard',
            number: '•••• •••• •••• 8842',
            holder: 'RENATO FERREIRA',
            expiry: '09/28',
            isDefault: true
        }
    ]);

    // Mock Transactions
    const [transactions] = useState([
        {
            id: 1,
            date: '10 Dez 2024',
            description: 'Renovação Subscrição Pro',
            method: 'Mastercard •••• 8842',
            value: '29.00 €',
            status: 'PAGO'
        },
        {
            id: 2,
            date: '05 Dez 2024',
            description: 'Destaque Anúncio #1234',
            method: 'Mastercard •••• 8842',
            value: '4.99 €',
            status: 'PAGO'
        },
        {
            id: 3,
            date: '01 Nov 2024',
            description: 'Selo de Verificação (Anual)',
            method: 'MB WAY',
            value: '14.99 €',
            status: 'PAGO'
        }
    ]);

    return (
        <div className="bg-white min-h-screen pb-8">
            {/* Header */}
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-1">
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <h1 className="text-base font-bold text-[#355130]">Pagamentos</h1>
                </div>
                <button className="flex items-center gap-1 bg-[#FDFFE5] text-[#355130] px-3 py-1.5 rounded-lg text-xs font-bold border border-[#E8F5BA]">
                    <Plus size={14} /> Adicionar Cartão
                </button>
            </div>

            <div className="p-4">
                {/* Payment Methods Section */}
                <h2 className="text-xl font-bold text-[#355130] mb-4">Métodos de Pagamento</h2>

                {/* Credit Card Card */}
                {paymentMethods.map(method => (
                    <div key={method.id} className="bg-[#1A202C] text-white rounded-2xl p-6 mb-4 shadow-lg relative overflow-hidden">
                        <div className="flex justify-between items-start mb-8">
                            <span className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold tracking-wider">
                                {method.type}
                            </span>
                            <CreditCard size={24} className="text-white/80" />
                        </div>

                        <div className="mb-6">
                            <p className="text-[10px] text-gray-400 mb-1">Número do Cartão</p>
                            <p className="text-xl font-mono tracking-widest">{method.number}</p>
                        </div>

                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-[10px] text-gray-400 mb-0.5">Titular</p>
                                <p className="text-sm font-bold uppercase tracking-wide">{method.holder}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-gray-400 mb-0.5">Validade</p>
                                <p className="text-sm font-bold">{method.expiry}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add New Method Placeholder */}
                <button className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-2 text-gray-400 font-bold hover:bg-gray-50 transition-colors mb-10">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                        <Plus size={20} className="text-gray-400" />
                    </div>
                    Adicionar novo método
                </button>

                {/* Transaction History Section */}
                <h2 className="text-xl font-bold text-[#355130] mb-4">Histórico de Transações</h2>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-[1fr,2fr,1fr] gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        <div>Data</div>
                        <div>Descrição</div>
                        <div className="text-right">Valor</div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-gray-50">
                        {transactions.map(tx => (
                            <div key={tx.id} className="p-4">
                                <div className="flex justify-between items-start mb-1">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm text-[#355130]">{tx.description}</span>
                                        <span className="text-[10px] text-gray-400">{tx.method}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-bold text-sm text-[#355130] block">{tx.value}</span>
                                        <span className="inline-block bg-[#E8F5BA] text-[#355130] text-[9px] font-bold px-2 py-0.5 rounded-full mt-1">
                                            {tx.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1">
                                    <Calendar size={10} /> {tx.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobilePayments;
