import Image from 'next/image';

export default function HabilidadesPage() {
  return (
    <main className="min-h-screen p-6 md:p-12 w-full max-w-7xl mx-auto flex flex-col gap-24 overflow-x-hidden pt-24 md:pt-32 pb-24">

      {/* Top Section: Title & Portrait */}
      <section className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between">
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            <span className="block text-on-surface">Habilidades y</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Trayectoria
            </span>
          </h1>

          <div className="bg-surface-container p-8 rounded-2xl border border-white/5 relative shadow-lg">
            <span className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-4 block">Mi Manifiesto</span>
            <p className="text-on-surface-variant text-xl lg:text-2xl leading-relaxed">
              Creando más allá de la pantalla. Hola, soy un desarrollador entusiasta
              con pasión por construir sistemas que no solo funcionen, sino que
              inspiren.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[450px] aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/5 bg-surface-container shadow-2xl">
          <Image
            src="/frontend_skills.png"
            alt="Ilustración de habilidades Frontend"
            fill
            sizes="(max-width: 1024px) 100vw, 450px"
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay to blend at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent opacity-90 pointer-events-none"></div>
        </div>
      </section>

      {/* Middle Section: Stack Técnico */}
      <section className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-3 block">Stack Técnico</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
              Arquitectura Digital
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-surface-container rounded-2xl p-8 lg:p-10 border border-white/5 hover:bg-surface-variant/30 transition-all flex flex-col gap-8 group">
            <div className="flex justify-between items-start">
              {/* Layout Icon */}
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 10h16M10 10v10" />
              </svg>
              <span className="font-display text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">01</span>
            </div>
            <div>
              <h3 className="font-bold text-on-surface text-xl mb-6">Superficie Frontend</h3>
              <ul className="flex flex-col gap-4 text-on-surface-variant text-sm md:text-base">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(129,236,255,0.8)]"></span> React</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(129,236,255,0.8)]"></span> Next.js</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(129,236,255,0.8)]"></span> Tailwind CSS</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(129,236,255,0.8)]"></span> Formik</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container rounded-2xl p-8 lg:p-10 border border-white/5 hover:bg-surface-variant/30 transition-all flex flex-col gap-8 group">
            <div className="flex justify-between items-start">
              {/* Terminal Icon */}
              <svg className="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-display text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">02</span>
            </div>
            <div>
              <h3 className="font-bold text-on-surface text-xl mb-6">Arquitectura Core</h3>
              <ul className="flex flex-col gap-4 text-on-surface-variant text-sm md:text-base">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(105,246,184,0.8)]"></span> Redux</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(105,246,184,0.8)]"></span> Node.js</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(105,246,184,0.8)]"></span> SQL</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(105,246,184,0.8)]"></span> API Fetch</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container rounded-2xl p-8 lg:p-10 border border-white/5 hover:bg-surface-variant/30 transition-all flex flex-col gap-8 group">
            <div className="flex justify-between items-start">
              {/* Tools Icon */}
              <svg className="w-7 h-7 text-[#6a82fb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-display text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors">03</span>
            </div>
            <div>
              <h3 className="font-bold text-on-surface text-xl mb-6">Herramientas Fundamentales</h3>
              <ul className="flex flex-col gap-4 text-on-surface-variant text-sm md:text-base">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#6a82fb] shadow-[0_0_8px_rgba(106,130,251,0.8)]"></span> Git / GitHub</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#6a82fb] shadow-[0_0_8px_rgba(106,130,251,0.8)]"></span> TypeScript</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#6a82fb] shadow-[0_0_8px_rgba(106,130,251,0.8)]"></span> Vite</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#6a82fb] shadow-[0_0_8px_rgba(106,130,251,0.8)]"></span> Jest</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Trayectoria & Metodologías */}
      <section className="bg-surface-container rounded-3xl p-10 lg:p-14 border border-white/5 shadow-lg mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">

          {/* Left Column: Timeline */}
          <div className="flex flex-col gap-10">
            <h2 className="font-display text-3xl font-bold text-on-surface">
              Trayectoria & Aprendizaje
            </h2>

            <div className="flex flex-col gap-10 relative border-l border-white/10 ml-2 pl-8">

              <div className="relative">
                <div className="absolute w-3.5 h-3.5 bg-primary rounded-full -left-[40px] top-1.5 shadow-[0_0_12px_rgba(129,236,255,0.6)]"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">2026 - ACTUALIDAD</span>
                  <h3 className="font-bold text-on-surface text-xl">Desarrollador Front-end Jr.</h3>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-1">
                    Enfocado en la optimización de UI y componentes reutilizables en entornos ágiles.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[39px] top-1.5"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">2024 - 2026</span>
                  <h3 className="font-bold text-on-surface text-xl">Front-end Developer Bootcamp</h3>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mt-1">
                    Inmersión intensiva en el ecosistema JavaScript moderno y despliegue de aplicaciones con React.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Metodologías */}
          <div className="flex flex-col gap-10">
            <h2 className="font-display text-3xl font-bold text-on-surface">
              Metodologías
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                "Agile / Scrum", "Clean Code", "Responsive Design",
                "Atomic Design", "Programación Orientada a Componentes"
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 bg-surface-container-highest rounded-full text-sm font-medium text-on-surface-variant border border-white/5 hover:border-white/10 hover:text-on-surface transition-colors cursor-default shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
