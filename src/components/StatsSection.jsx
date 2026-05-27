import { MapPin } from 'lucide-react';

const stats = [
    ['от 24000 р', 'миниатюра'],
    ['2–4 часа', 'средний сеанс'],
    ['24000', 'бронь даты']
];

export default function StatsSection() {
    return (
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
            <div className="grid overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.04] lg:grid-cols-[0.9fr_1.1fr]">
                <div className="p-8 sm:p-12">
                    <p className="mb-4 flex items-center gap-2 text-zinc-300">
                        <MapPin size={18} /> Amsterdam / guest spots
                    </p>
                    <h2 className="text-4xl font-black sm:text-5xl">Для тех, кто хочет не “просто тату”, а знак.</h2>
                </div>

                <div className="grid gap-px bg-white/10 sm:grid-cols-3">
                    {stats.map(([value, label]) => (
                        <div
                            key={label}
                            className="bg-zinc-950/80 p-8 sm:p-10">
                            <p className="text-4xl font-black text-white">{value}</p>
                            <p className="mt-2 text-zinc-400">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
