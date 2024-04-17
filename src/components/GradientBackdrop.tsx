import { cn } from '../utils/common';

export default function GradientBackdrop() {
  return (
    <>
      <div
        className={cn(
          'w-[500px] h-[300px] bg-yellow-300/5 blur-3xl rounded-full',
          'absolute top-0 left-0 -z-10',
          'rotate-[15deg]'
        )}
      />
      <div
        className={cn(
          'w-[500px] h-[300px] bg-cyan-300/5 blur-3xl rounded-full',
          'absolute top-[100px] left-[100px] -z-10',
          'rotate-[15deg]'
        )}
      />
    </>
  );
}
