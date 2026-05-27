import { ArrowRight } from 'lucide-react';

export default function BookingSection() {
    return (
        <section
            id="booking"
            className="px-5 pb-8 sm:px-8 lg:px-12">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[3rem] bg-white p-8 text-zinc-950 sm:p-12 lg:flex-row lg:items-center">
                <div>
                    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-zinc-500">Booking</p>
                    <h2 className="max-w-3xl text-4xl font-black sm:text-6xl">Расскажите идею — соберём её в эскиз.</h2>
                </div>

                <a
                    href="mailto:hello@example.com?subject=Tattoo%20booking"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-5 font-semibold text-white transition hover:scale-105">
                    Написать мастеру <ArrowRight size={18} />
                </a>
            </div>
        </section>
    );
}
