import React from 'react';
import { cn } from '../utils/common';

export default function Link({
  href,
  className,
  isActive,
  children,
}: {
  href?: string;
  className?: string;
  isActive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        'hover:underline hover:text-yellow-300',
        !isActive && 'text-neutral-400',
        className
      )}
    >
      {children}
    </a>
  );
}
