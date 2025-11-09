import { cn } from '../utils/common';

export default function GradientBackdrop() {
  const gradientSizeClass = 'w-[50vw] h-[30vw] md:w-[500px] md:h-[300px]';

  return (
    <div>
      <div
        className={cn(
          gradientSizeClass,
          'bg-yellow-300/5 blur-3xl rounded-full',
          'absolute top-0 left-0 -z-10',
          'rotate-[15deg]'
        )}
      />
      <div
        className={cn(
          gradientSizeClass,
          'bg-cyan-300/5 blur-3xl rounded-full',
          'absolute top-[100px] left-[100px] -z-10',
          'rotate-[15deg]'
        )}
      />
    </div>
  );
}
