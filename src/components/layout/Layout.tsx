import { Navbar } from './Navbar';
import { NoiseOverlay } from '../ui/NoiseOverlay';
import { ParallaxBackground } from '../ui/ParallaxBackground';
import { SmoothScroll } from '../ui/SmoothScroll';
// import { Footer } from './Footer'; // To be implemented

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyber-500 selection:text-black font-inter overflow-x-hidden relative">
            <SmoothScroll />
            <NoiseOverlay />
            <ParallaxBackground />
            <Navbar />
            <main className="relative z-10">{children}</main>
            {/* <Footer /> */}
        </div>
    );
}
