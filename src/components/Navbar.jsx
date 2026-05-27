export default function Navbar() {
    return (
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
            <a
                href="#top"
                className="flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-white">
                INK / RITUAL
            </a>

            <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
                <a
                    href="#works"
                    className="hover:text-white">
                    Работы
                </a>
                <a
                    href="#process"
                    className="hover:text-white">
                    Процесс
                </a>
                <a
                    href="#booking"
                    className="hover:text-white">
                    Запись
                </a>
            </div>
            <a
                href="#booking"
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-950 transition hover:scale-105">
                Записаться
            </a>
        </nav>
    );
}
