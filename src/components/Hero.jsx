import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Camera, Clock, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <div
            id="top"
            className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 pb-14 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}>
                <p className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-300">
                    <Sparkles size={16} /> Авторские татуировки в мягком, тёмном стиле
                </p>

                <h1 className="max-w-4xl text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">Тату, которые выглядят как личный миф.</h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">Эскизы под тело, характер и историю. Fine line, blackwork, ornamental, графика и аккуратные миниатюры — без конвейера и случайных решений.</p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#works"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-7 py-4 font-semibold text-white shadow-lg shadow-rose-500/25 transition hover:scale-105">
                        Смотреть работы <ArrowRight size={18} />
                    </a>

                    <a
                        href="https://www.instagram.com/anna_inkers/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-violet-500 px-7 py-4 font-semibold text-white shadow-lg shadow-rose-500/25 transition hover:scale-105 hover:shadow-rose-500/40">
                        <Camera size={18} /> Instagram
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative">
                <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-rose-500/25 to-violet-500/20 blur-2xl" />

                <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900 p-3 shadow-2xl shadow-black/50">
                    <img
                        src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=760&h=940&q=90"
                        alt="Tattoo artist portfolio preview"
                        className="h-[620px] w-full rounded-[2.45rem] object-cover opacity-90"
                    />

                    <div className="absolute inset-3 rounded-[2.45rem] bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-white/10 bg-black/60 p-5 text-white shadow-2xl shadow-black/40 backdrop-blur-xl">
                        <div className="mb-4 flex items-start justify-between gap-4">
                            <div>
                                <p className="flex items-center gap-2 text-sm text-zinc-300">
                                    <CalendarDays size={16} /> Ближайшие свободные окна
                                </p>

                                <p className="mt-1 text-2xl font-black">Июнь · Amsterdam</p>
                            </div>

                            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">есть места</span>
                        </div>

                        <div className="grid gap-2 sm:grid-cols-3">
                            {[
                                ['12 Jun', '11:00'],
                                ['15 Jun', '13:30'],
                                ['18 Jun', '16:00']
                            ].map(([date, time]) => (
                                <div
                                    key={`${date}-${time}`}
                                    className="rounded-2xl border border-white/10 bg-white/10 p-3">
                                    <p className="text-sm font-semibold">{date}</p>
                                    <p className="mt-1 flex items-center gap-1 text-xs text-zinc-300">
                                        <Clock size={13} /> {time}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#booking"
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:scale-[1.02]">
                            Выбрать дату <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
