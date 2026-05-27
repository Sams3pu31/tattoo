import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WorksSection from './components/WorksSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import StickyBooking from './components/StickyBooking.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import StatsSection from './components/StatsSection.jsx';
import BookingSection from './components/BookingSection.jsx';

export default function App() {
    return (
        <main className="min-h-screen overflow-hidden bg-zinc-950 text-white">
            <section className="relative px-5 py-8 sm:px-8 lg:px-12">
                <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,63,94,0.22),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_35%)]" />

                <Navbar />
                <Hero />
            </section>

            <WorksSection />
            <GallerySection />
            <StickyBooking />
            <WorksSection />
            <ProcessSection />
            <StatsSection />
            <BookingSection />
        </main>
    );
}
