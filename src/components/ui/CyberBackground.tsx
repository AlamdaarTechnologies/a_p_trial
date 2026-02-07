interface CyberBackgroundProps {
    variant?: 'default' | 'cyan' | 'green' | 'purple' | 'orange' | 'blue';
}

export function CyberBackground({ variant = 'default' }: CyberBackgroundProps) {
    const getColors = () => {
        switch (variant) {
            case 'cyan': // About
                return {
                    orb1: 'bg-electric-500/60',
                    orb2: 'bg-cyber-500/50',
                    orb3: 'bg-blue-500/40',
                    grid: '#00f0ff1a'
                };
            case 'green': // Skills
                return {
                    orb1: 'bg-cyber-500/60',
                    orb2: 'bg-emerald-500/50',
                    orb3: 'bg-lime-500/40',
                    grid: '#00ff9d1a'
                };
            case 'purple': // Journey
                return {
                    orb1: 'bg-neon-500/60',
                    orb2: 'bg-purple-600/50',
                    orb3: 'bg-fuchsia-500/40',
                    grid: '#b026ff1a'
                };
            case 'orange': // Projects
                return {
                    orb1: 'bg-orange-500/60',
                    orb2: 'bg-amber-500/50',
                    orb3: 'bg-red-500/40',
                    grid: '#f973161a'
                };
            case 'blue': // Contact
                return {
                    orb1: 'bg-blue-600/60',
                    orb2: 'bg-indigo-500/50',
                    orb3: 'bg-sky-500/40',
                    grid: '#3b82f61a'
                };
            default: // Hero/Default
                return {
                    orb1: 'bg-cyber-500/60',
                    orb2: 'bg-electric-500/50',
                    orb3: 'bg-neon-500/40',
                    grid: '#8080801a'
                };
        }
    };

    const colors = getColors();

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Dark Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#020202]" />

            {/* Moving Grid */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-flow"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${colors.grid} 1px, transparent 1px), linear-gradient(to bottom, ${colors.grid} 1px, transparent 1px)`
                    }}
                />
            </div>

            {/* Glowing Orbs - HIGH VISIBILITY */}
            <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] animate-float-slow opacity-100 ${colors.orb1}`} />
            <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] animate-float-medium opacity-100 ${colors.orb2}`} />
            <div className={`absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full blur-[80px] animate-float-slow opacity-100 ${colors.orb3}`} />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        </div>
    );
}
