import { portfolio } from '../data/portfolio.js';

const galleryItems = [
    ...portfolio,
    ...portfolio.map((item) => ({
        ...item,
        id: item.id + 100,
        title: `${item.title} study`
    }))
];

export default function GallerySection() {
    return (
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-rose-300">Selected works</p>

                    <h2 className="mt-4 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">Работы как поток.</h2>
                </div>

                <p className="max-w-2xl text-lg leading-8 text-zinc-400">Здесь можно показать больше татуировок не как обычную сетку из карточек, а как длинную визуальную историю: разные масштабы, разная плотность, ощущение живого портфолио.</p>
            </div>

            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                {galleryItems.map((item, index) => (
                    <article
                        key={`${item.id}-${index}`}
                        className="group mb-5 break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/25">
                        <div className="relative overflow-hidden rounded-[1.5rem]">
                            <img
                                src={item.src}
                                alt={item.title}
                                className={`w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100 ${index % 3 === 0 ? 'h-[520px]' : index % 3 === 1 ? 'h-[380px]' : 'h-[460px]'}`}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="mb-2 w-fit rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">{item.tag}</p>

                                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
