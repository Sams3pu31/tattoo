import InfiniteStrip from './InfiniteStrip.jsx';

export default function WorksSection() {
    return (
        <section
            id="works"
            className="border-y border-white/10 bg-black py-12">
            <div className="mx-auto mb-8 max-w-7xl px-5 sm:px-8 lg:px-12">
                <p className="text-sm uppercase tracking-[0.35em] text-rose-300">Portfolio loop</p>
                <h2 className="mt-3 text-4xl font-black sm:text-5xl">Бесконечная лента работ</h2>
            </div>

            <InfiniteStrip speed={38} />
            <InfiniteStrip
                reverse
                speed={48}
            />
        </section>
    );
}
