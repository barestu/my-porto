import { useEffect, useState, type MouseEvent } from 'react';
import { cn } from '../utils/common';
import Link from './Link';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id);
  const [hasScrolled, setHasScrolled] = useState(false);
  const SCROLL_OFFSET = 88;

  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const yPosition =
        target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
    setActiveSection(targetId);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-500 ease-in-out',
        hasScrolled
          ? 'backdrop-blur-md bg-neutral-900/80 border-b border-white/10'
          : 'backdrop-blur-0 bg-transparent border-b border-transparent'
      )}
    >
      <nav className="container flex items-center justify-between py-5">
        <a
          href="mailto:barestu.fandy@gmail.com"
          className="text-neutral-400 hover:text-neutral-200"
        >
          barestu.fandy@gmail.com
        </a>
        <div>
          <ul className="flex gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  isActive={activeSection === item.id}
                  onClick={(event) => handleNavClick(event, item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
