import React from 'react';
import { cn } from '../utils/common';

export default function Link({
  href,
  className,
  isActive,
  onClick,
  children,
}: {
  href?: string;
  className?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'hover:underline hover:text-yellow-300 transition-colors duration-200',
        isActive ? 'text-white' : 'text-neutral-400',
        className
      )}
    >
      {children}
    </a>
  );
}
