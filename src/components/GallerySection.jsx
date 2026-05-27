import { useState } from 'react';
import { X } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const galleryItems = portfolio;

export default function GallerySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
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
                        <button
                            type="button"
                            key={`${item.id}-${index}`}
                            onClick={() => setSelectedImage(item)}
                            className="group mb-5 block w-full break-inside-avoid cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 text-left shadow-2xl shadow-black/25">
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
                        </button>
                    ))}
                </div>
            </section>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}>
                    <button
                        type="button"
                        aria-label="Закрыть изображение"
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-zinc-950 transition hover:scale-105">
                        <X size={24} />
                    </button>

                    <div
                        className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black"
                        onClick={(event) => event.stopPropagation()}>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-h-[82vh] w-full object-contain"
                        />

                        <div className="border-t border-white/10 bg-zinc-950 p-5">
                            <p className="mb-2 w-fit rounded-full bg-white/10 px-3 py-1 text-xs text-white">{selectedImage.tag}</p>
                            <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
