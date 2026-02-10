import { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.0, // Slower duration for a more "luxurious" feel
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5, // Reduced slightly for better control
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        requestAnimationFrame(raf);

        // Handle anchor links using Event Delegation (more robust for React)
        const handleAnchorClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (href && href !== '#') {
                    // Check if target exists
                    const target = document.querySelector(href);
                    if (target) {
                        lenis.scrollTo(target);
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return null; // This component handles side effects only
}
