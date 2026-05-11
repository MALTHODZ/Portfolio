"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Habilidades', href: '/habilidades' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 px-6 md:px-12 bg-[#060e20]/90 backdrop-blur-md border-b border-white/5 text-on-surface">
      <div className="text-xl font-display font-bold tracking-tight text-primary uppercase">
        <Link href="/">WEB DEV</Link>
      </div>

      <ul className="flex space-x-6 md:space-x-8 font-body text-xs md:text-sm font-medium text-on-surface-variant">
        {navLinks.map((link) => {
          const isActive = link.href.startsWith('/#')
            ? false
            : link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href);

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                prefetch={false}
                className={`relative pb-2 transition-colors ${isActive ? 'text-on-surface' : 'hover:text-on-surface'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-primary rounded-full"></span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden md:block">
        <a href="/curriculum.pdf" className="px-6 py-2.5 font-body text-sm font-semibold bg-primary text-on-primary rounded-md hover:bg-primary-container transition-colors shadow-[0_0_15px_rgba(129,236,255,0.15)]">
          CV
        </a>
      </div>
    </nav>
  );
}
