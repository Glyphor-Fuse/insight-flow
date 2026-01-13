import React from 'react';
import { motion } from 'framer-motion';
import { LuClock, LuBox, LuMonitor, LuMenu } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';

export default function Index() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        :root {
          --bg-dark: #050505;
          --bg-panel: #0a0a0a;
          --accent-primary: #00f0ff;
          --accent-secondary: #70ff00;
          --border-color: rgba(255, 255, 255, 0.1);
        }
        
        .font-sans {
          font-family: 'Space Grotesk', sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: var(--bg-dark);
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }

        /* Grid Background */
        .grid-bg {
          background-image: 
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* Glassmorphism Card */
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Nav Hover Effect */
        .nav-item:hover .nav-line {
          width: 100%;
          background-color: var(--accent-primary);
        }
        .nav-line {
          width: 0%;
          height: 1px;
          background-color: transparent;
          transition: width 0.3s ease;
        }

        /* Image Container Hover */
        .img-container img {
          transition: transform 1.2s ease;
        }
        .img-container:hover img {
          transform: scale(1.05);
        }
      `}</style>

      {/* RAIL: Left Navigation (Fixed) */}
      <nav className="w-full lg:w-64 h-auto lg:h-screen lg:fixed top-0 left-0 bg-neutral-900 border-r border-white/10 flex flex-col justify-between z-50 p-6 lg:p-8">
        {/* Top: Logo */}
        <div className="flex justify-between lg:block items-center">
          <div className="text-2xl font-bold tracking-tighter mb-0 lg:mb-12 flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            NEXUS_OS
          </div>
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white uppercase font-mono text-sm border border-white/20 px-3 py-1">
            Menu
          </button>
        </div>

        {/* Middle: Nav Links */}
        <div className="hidden lg:flex flex-col gap-6">
          {['Platform', 'Intelligence', 'Solutions', 'Enterprise'].map((item, index) => (
            <a key={item} href="#" className="nav-item group block">
              <span className="font-mono text-xs text-gray-500 mb-1 block group-hover:text-cyan-400 transition-colors">
                0{index + 1}
              </span>
              <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                {item}
              </span>
              <div className="nav-line mt-1 bg-gray-700"></div>
            </a>
          ))}
        </div>

        {/* Bottom: Status/CTA */}
        <div className="hidden lg:block">
          <div className="font-mono text-[10px] text-gray-500 mb-4">
            SYSTEM STATUS: <span className="text-green-500">ONLINE</span>
          </div>
          <a href="#" className="block w-full text-center py-3 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-mono text-xs uppercase tracking-widest">
            Request Demo
          </a>
        </div>
      </nav>

      {/* MAIN CONTENT: Fluid Right Column */}
      <main className="lg:ml-64 w-full relative bg-neutral-950 grid-bg">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-20 pt-32 lg:pt-0 relative overflow-hidden">
          {/* Abstract Background Element */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40 z-0">
            <SignatureInteraction type="parallax" className="w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                className="w-full h-full object-cover mix-blend-overlay grayscale contrast-125" 
                alt="Abstract Data flow"
              />
            </SignatureInteraction>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-transparent"></div>
          </div>

          <Reveal className="relative z-10 w-full">
            <h1 className="text-6xl lg:text-[9rem] font-bold leading-[0.85] tracking-tighter mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">DATA</span>
              <span className="block pl-4 lg:pl-24 text-white">REFINED.</span>
            </h1>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-0 mt-8">
              <div className="max-w-md">
                <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed">
                  Transform raw entropy into actionable signal. The first predictive engine built for the hyper-scale enterprise.
                </p>
                
                <div className="mt-8 flex items-center gap-4">
                  <button className="px-8 py-4 bg-cyan-400 text-black font-bold tracking-tight hover:bg-cyan-300 transition-colors">
                    Start Analysis
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white font-mono hover:bg-white/5 transition-colors">
                    View Documentation
                  </button>
                </div>
              </div>

              {/* Data widget decoration */}
              <div className="glass-card p-6 rounded-none border-l-2 border-l-cyan-400 w-full lg:w-80">
                <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                  <span>PROCESSING</span>
                  <span>88ms</span>
                </div>
                <div className="flex items-end gap-1 h-12 mb-2">
                  <div className="w-1/5 h-[40%] bg-white/20"></div>
                  <div className="w-1/5 h-[70%] bg-white/40"></div>
                  <div className="w-1/5 h-[50%] bg-white/30"></div>
                  <div className="w-1/5 h-[90%] bg-cyan-400"></div>
                  <div className="w-1/5 h-[65%] bg-white/20"></div>
                </div>
                <div className="text-2xl font-bold font-mono">+24.8% <span className="text-xs font-normal text-gray-400">YOY Growth</span></div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* MARQUEE */}
        <div className="py-4 bg-neutral-900 border-y border-white/10">
          <div className="w-full overflow-hidden bg-[var(--accent-primary)] text-[var(--bg-dark)]">
            <SignatureInteraction type="marquee" className="py-1">
              <div className="flex gap-8 px-4">
                <span className="text-sm font-mono uppercase tracking-widest">
                  // REAL-TIME INGESTION // 99.999% UPTIME // SOC2 COMPLIANT // PREDICTIVE MODELING
                </span>
                <span className="text-sm font-mono uppercase tracking-widest">
                  // REAL-TIME INGESTION // 99.999% UPTIME // SOC2 COMPLIANT // PREDICTIVE MODELING
                </span>
              </div>
            </SignatureInteraction>
          </div>
        </div>

        {/* STATISTICS GRID */}
        <section className="px-6 lg:px-20 py-32 border-b border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-neutral-950 p-12 hover:bg-neutral-900 transition-colors duration-500 group">
              <div className="text-cyan-400 text-4xl mb-6 font-light group-hover:scale-110 transition-transform origin-left">
                <LuClock className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-Time Ingestion</h3>
              <p className="text-gray-400 leading-relaxed">
                Process petabytes of unstructured data with zero latency. Our pipeline adapts to your velocity.
              </p>
            </div>
            <div className="bg-neutral-950 p-12 hover:bg-neutral-900 transition-colors duration-500 group">
              <div className="text-lime-400 text-4xl mb-6 font-light group-hover:scale-110 transition-transform origin-left">
                <LuBox className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Predictive Models</h3>
              <p className="text-gray-400 leading-relaxed">
                Don't just see what happened. See what's next. AI-driven forecasting built into the core.
              </p>
            </div>
            <div className="bg-neutral-950 p-12 hover:bg-neutral-900 transition-colors duration-500 group">
              <div className="text-purple-400 text-4xl mb-6 font-light group-hover:scale-110 transition-transform origin-left">
                <LuMonitor className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visual Clarity</h3>
              <p className="text-gray-400 leading-relaxed">
                Dashboards that actually make sense. Customizable, drag-and-drop, and beautiful by default.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURE HIGHLIGHT (Asymmetric) */}
        <section className="px-6 lg:px-20 py-32 flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <Reveal>
              <div className="font-mono text-cyan-400 mb-6 uppercase tracking-wider">// The Architecture</div>
              <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">BUILT FOR <br/>SCALE.</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-lg">
                Stop wrestling with fragmented tools. Nexus unifies your entire data stack into a single source of truth.
              </p>
              <ul className="space-y-4 font-mono text-sm text-gray-300">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  API-First Design
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  End-to-End Encryption
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Granular Access Control
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Reveal delay={0.4}>
              {/* Abstract Graphic Representation */}
              <div className="img-container aspect-square lg:aspect-[4/3] relative">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Cybersecurity Data" 
                      className="w-full h-full object-cover rounded-sm opacity-80"
                />
                
                {/* Floating UI Card Overlay */}
                <div className="absolute -bottom-10 -left-10 bg-black/90 p-8 border border-white/10 shadow-2xl w-2/3 hidden lg:block">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-gray-500">LIVE STREAM</span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 w-3/4"></div>
                    </div>
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-1/2"></div>
                    </div>
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-lime-400 w-5/6"></div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between text-white font-mono text-sm">
                    <span>Resources</span>
                    <span>82%</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* COLLAGE / TEXTURE SECTION */}
        <section className="py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-neutral-900 skew-y-3 transform origin-top-left -z-10"></div>
          <Reveal className="px-6 lg:px-20 text-center mb-20 w-full">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter">INTEGRATE INSTANTLY</h2>
          </Reveal>
          
          <div className="flex justify-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Minimalist Logo Placeholders */}
            <div className="text-2xl font-bold font-mono">STRIPE</div>
            <div className="text-2xl font-bold font-mono">AWS</div>
            <div className="text-2xl font-bold font-mono">GOOGLE</div>
            <div className="text-2xl font-bold font-mono">SNOWFLAKE</div>
            <div className="text-2xl font-bold font-mono">AZURE</div>
          </div>
        </section>

        {/* CTA */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 relative border-t border-white/10">
          <Reveal className="text-center">
            <p className="text-cyan-400 font-mono mb-6 uppercase">Ready to deploy?</p>
            <h2 className="text-6xl lg:text-8xl font-bold mb-8 tracking-tighter text-white">
              GET <span className="text-gray-600 italic">CLEAR</span>.
            </h2>
            <a href="#" className="inline-block px-12 py-5 bg-white text-black font-bold text-lg hover:bg-cyan-400 transition-colors duration-300">
              Start Free Trial
            </a>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-12 px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-start text-gray-500 font-mono text-sm">
          <div className="mb-8 lg:mb-0">
            <span className="text-white font-bold block mb-2">NEXUS_OS</span>
            &copy; 2024
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
