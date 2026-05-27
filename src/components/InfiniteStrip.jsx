import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const duplicatedPortfolio = [...portfolio, ...portfolio, ...portfolio];

export default function InfiniteStrip({ reverse = false, speed = 42 }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex w-max gap-4"
                    animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
                    transition={{ duration: speed, ease: 'linear', repeat: Infinity }}>
                    {duplicatedPortfolio.map((item, index) => (
                        <button
                            type="button"
                            key={`${item.id}-${index}`}
                            onClick={() => setSelectedImage(item)}
                            className="group relative h-[340px] w-[250px] shrink-0 cursor-zoom-in overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 text-left shadow-2xl shadow-black/30">
                            <img
                                src={item.src}
                                alt={item.title}
                                className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="mb-2 w-fit rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">{item.tag}</p>

                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            </div>
                        </button>
                    ))}
                </motion.div>
            </div>

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
