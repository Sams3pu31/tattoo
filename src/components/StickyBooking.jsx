import { ArrowRight, CalendarHeart } from 'lucide-react';

export default function StickyBooking() {
    return (
        <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="lg:sticky lg:top-8 lg:h-fit">
                    <div className="rounded-[2.5rem] border border-white/10 bg-white p-8 text-zinc-950 shadow-2xl shadow-black/30 sm:p-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                            <CalendarHeart size={24} />
                        </div>

                        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-zinc-500">Booking</p>

                        <h2 className="text-4xl font-black leading-none sm:text-5xl">Идея есть? Давай превратим её в эскиз.</h2>

                        <p className="mt-5 leading-7 text-zinc-600">Лучше всего написать мастеру: где хочешь тату, примерный размер, стиль, бюджет и пару референсов. Этого хватит, чтобы начать.</p>

                        <a
                            href="#booking"
                            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-7 py-4 font-semibold text-white transition hover:scale-105">
                            Выбрать дату <ArrowRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="space-y-5">
                    {[
                        ['01', 'Не копия из Pinterest', 'Эскиз собирается под тело, посадку и характер человека. Референсы нужны для направления, но не для прямого копирования.'],
                        ['02', 'Тёмная эстетика без перегруза', 'Fine line, blackwork, орнамент, графика и маленькие личные символы. Визуально спокойно, но с характером.'],
                        ['03', 'Понятный процесс', 'Перед сеансом обсуждаются размер, место, примерная длительность, стоимость и уход. Без загадочного “ну посмотрим”.'],
                        ['04', 'Работы много — сайт дышит', 'Человек листает не сухую витрину, а визуальный дневник мастера. Поэтому страница длинная, но не бесконечная ловушка.']
                    ].map(([number, title, text]) => (
                        <div
                            key={number}
                            className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-xl shadow-black/20 sm:p-10">
                            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-rose-300">{number}</p>

                            <h3 className="text-3xl font-black text-white">{title}</h3>

                            <p className="mt-4 max-w-2xl leading-8 text-zinc-400">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
