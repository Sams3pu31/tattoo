export default function InfoCard({ icon: Icon, title, text }) {
    return (
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zinc-950">
                <Icon size={22} />
            </div>

            <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
            <p className="leading-7 text-zinc-400">{text}</p>
        </div>
    );
}
