import { Navbar } from './Navbar';
import { StarryBackground } from '../ui/StarryBackground';
import { NoiseOverlay } from '../ui/NoiseOverlay';
import { SmoothScroll } from '../ui/SmoothScroll';
// import { Footer } from './Footer'; // To be implemented

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen text-white selection:bg-cyber-500 selection:text-black font-inter overflow-x-hidden relative">
            <SmoothScroll />
            <StarryBackground />
            <NoiseOverlay />
            <Navbar />
            <main className="relative z-10">{children}</main>
            {/* <Footer /> */}
        </div>
    );
}
