type HamburgerIconProps = {
  isOpen?: boolean;
  className?: string;
};

export default function HamburgerIcon({
  isOpen,
  className,
}: HamburgerIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line
        x1="5"
        y1="7"
        x2="19"
        y2="7"
        className={`transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-5 rotate-45' : ''
        }`}
      />
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        className={`transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      />
      <line
        x1="5"
        y1="17"
        x2="19"
        y2="17"
        className={`transition-transform duration-300 ease-in-out ${
          isOpen ? '-translate-y-5 -rotate-45' : ''
        }`}
      />
    </svg>
  );
}
