import { useMemo, useState } from 'react';
import { CalendarDays, Check, Clock, Send } from 'lucide-react';

const availableDates = [
    {
        id: 1,
        day: '12',
        month: 'Jun',
        label: 'Пятница'
    },
    {
        id: 2,
        day: '15',
        month: 'Jun',
        label: 'Понедельник'
    },
    {
        id: 3,
        day: '18',
        month: 'Jun',
        label: 'Четверг'
    },
    {
        id: 4,
        day: '22',
        month: 'Jun',
        label: 'Понедельник'
    }
];

const availableTimes = ['11:00', '13:30', '16:00', '18:30'];

export default function BookingCalendar() {
    const [selectedDate, setSelectedDate] = useState(availableDates[0]);
    const [selectedTime, setSelectedTime] = useState(availableTimes[0]);
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [idea, setIdea] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const telegramMessage = useMemo(() => {
        return ['Новая заявка на тату ✨', '', `Дата: ${selectedDate.label}, ${selectedDate.day} ${selectedDate.month}`, `Время: ${selectedTime}`, `Имя: ${name || 'не указано'}`, `Контакт: ${contact || 'не указан'}`, `Идея: ${idea || 'не указана'}`].join('\n');
    }, [selectedDate, selectedTime, name, contact, idea]);

    const telegramLink = `https://t.me/share/url?url=https://Sams3pu31.github.io/tattoo/&text=${encodeURIComponent(telegramMessage)}`;

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
        window.open(telegramLink, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className="rounded-[2.5rem] border border-white/10 bg-zinc-950 p-5 text-white shadow-2xl shadow-black/30 sm:p-7">
            <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                    <p className="mb-2 flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-rose-300">
                        <CalendarDays size={16} /> Calendar
                    </p>
                    <h3 className="text-3xl font-black">Выбрать окно</h3>
                </div>

                <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-zinc-300">demo</div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-7">
                    <p className="mb-3 text-sm font-semibold text-zinc-300">Дата</p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {availableDates.map((date) => {
                            const isActive = selectedDate.id === date.id;

                            return (
                                <button
                                    key={date.id}
                                    type="button"
                                    onClick={() => {
                                        setSelectedDate(date);
                                        setIsSubmitted(false);
                                    }}
                                    className={`rounded-3xl border p-4 text-left transition hover:scale-[1.02] ${isActive ? 'border-rose-400 bg-rose-500 text-white' : 'border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/10'}`}>
                                    <p className="text-sm opacity-80">{date.month}</p>
                                    <p className="text-3xl font-black">{date.day}</p>
                                    <p className="mt-1 text-xs">{date.label}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mb-7">
                    <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-300">
                        <Clock size={16} /> Время
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {availableTimes.map((time) => {
                            const isActive = selectedTime === time;

                            return (
                                <button
                                    key={time}
                                    type="button"
                                    onClick={() => {
                                        setSelectedTime(time);
                                        setIsSubmitted(false);
                                    }}
                                    className={`rounded-full border px-4 py-3 text-sm font-semibold transition hover:scale-[1.02] ${isActive ? 'border-white bg-white text-zinc-950' : 'border-white/10 bg-white/[0.04] text-zinc-300 hover:bg-white/10'}`}>
                                    {time}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mb-7 grid gap-3 sm:grid-cols-2">
                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-zinc-300">Имя</span>
                        <input
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                                setIsSubmitted(false);
                            }}
                            placeholder="Например, Аня"
                            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-400"
                        />
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-zinc-300">Контакт</span>
                        <input
                            value={contact}
                            onChange={(event) => {
                                setContact(event.target.value);
                                setIsSubmitted(false);
                            }}
                            placeholder="@username или email"
                            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-400"
                        />
                    </label>
                </div>

                <label className="mb-7 block">
                    <span className="mb-2 block text-sm font-semibold text-zinc-300">Идея тату</span>
                    <textarea
                        value={idea}
                        onChange={(event) => {
                            setIdea(event.target.value);
                            setIsSubmitted(false);
                        }}
                        placeholder="Место на теле, размер, стиль, короткое описание идеи"
                        rows="4"
                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-rose-400"
                    />
                </label>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm text-zinc-400">Выбрано:</p>

                    <p className="mt-1 text-xl font-bold text-white">
                        {selectedDate.label}, {selectedDate.day} {selectedDate.month} · {selectedTime}
                    </p>
                </div>

                <button
                    type="submit"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-500 px-7 py-4 font-semibold text-white shadow-lg shadow-rose-500/25 transition hover:scale-[1.02]">
                    <Send size={18} /> Отправить заявку в Telegram
                </button>

                {isSubmitted && (
                    <div className="mt-5 flex items-start gap-3 rounded-[2rem] border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-zinc-950">
                            <Check size={16} />
                        </div>

                        <div>
                            <p className="font-semibold">Открылся Telegram с заявкой</p>
                            <p className="mt-1 text-sm leading-6 text-emerald-100/80">Проверьте текст сообщения и нажмите Send. Для автоматической отправки без участия клиента позже нужен бот и backend.</p>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
