import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio.js';

const duplicatedPortfolio = [...portfolio, ...portfolio, ...portfolio];

export default function InfiniteStrip({ reverse = false, speed = 42 }) {
    return (
        <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
                className="flex w-max gap-4"
                animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
                transition={{ duration: speed, ease: 'linear', repeat: Infinity }}>
                {duplicatedPortfolio.map((item, index) => (
                    <article
                        key={`${item.id}-${index}`}
                        className="group relative h-[340px] w-[250px] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl shadow-black/30">
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
                    </article>
                ))}
            </motion.div>
        </div>
    );
}
