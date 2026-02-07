declare module 'lenis' {
    export interface LenisOptions {
        duration?: number;
        easing?: (t: number) => number;
        direction?: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal';
        smooth?: boolean;
        mouseMultiplier?: number;
        smoothTouch?: boolean;
        touchMultiplier?: number;
        infinite?: boolean;
        // Lenis 1.x options (which seems to be what is installed based on docs, but let's be safe)
        orientation?: 'vertical' | 'horizontal';
        gestureOrientation?: 'vertical' | 'horizontal';
        smoothWheel?: boolean;
        wheelMultiplier?: number;
    }

    export default class Lenis {
        constructor(options?: LenisOptions);
        on(event: string, callback: (args: any) => void): void;
        destroy(): void;
        raf(time: number): void;
        scrollTo(target: any, options?: any): void;
    }
}
