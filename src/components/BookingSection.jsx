import { ArrowRight } from 'lucide-react';
import BookingCalendar from './BookingCalendar.jsx';

export default function BookingSection() {
    return (
        <section
            id="booking"
            className="px-5 pb-8 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-6 rounded-[3rem] bg-white p-5 text-zinc-950 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                <div className="flex flex-col justify-between rounded-[2.5rem] bg-zinc-950 p-8 text-white sm:p-10">
                    <div>
                        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-rose-300">Booking</p>

                        <h2 className="max-w-3xl text-4xl font-black leading-none sm:text-6xl">Расскажите идею — соберём её в эскиз.</h2>

                        <p className="mt-6 max-w-xl leading-8 text-zinc-400">Выберите удобное окно, оставьте контакт и коротко опишите идею. Сейчас это демо-запись, но визуально сценарий уже работает.</p>
                    </div>

                    <a
                        href="https://t.me/anna_inkers"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-8 py-5 font-semibold text-zinc-950 transition hover:scale-105">
                        Написать в Telegram <ArrowRight size={18} />
                    </a>
                </div>

                <BookingCalendar />
            </div>
        </section>
    );
}
