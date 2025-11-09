import experiences from '../data/experiences.json';
import { cn } from '../utils/common';

export default function Experience() {
  return (
    <section className="container mb-8" id="experience">
      <div className="flex items-end justify-between py-6">
        <h3 className="text-xl">Experience</h3>
        <p className="text-sm text-neutral-400">
          Highlighted roles & contributions
        </p>
      </div>

      <ul className="relative space-y-6 before:absolute before:left-[6px] before:top-3 before:bottom-3 before:w-px before:bg-neutral-700 before:content-['']">
        {experiences.map((experience, idx) => {
          const isCurrent = experience.period.toLowerCase().includes('present');
          return (
            <li
              key={`${experience.company}-${experience.role}-${idx}`}
              className="relative pl-12"
            >
              <span
                className={cn(
                  'absolute left-[1px] top-2 h-3 w-3 rounded-full border-2 border-neutral-900 shadow-[0_0_6px_rgba(251,191,36,0.6)]',
                  isCurrent
                    ? 'bg-cyan-300 ring-4 ring-cyan-500/20'
                    : 'bg-yellow-300'
                )}
              />
              <div className="rounded-md border border-neutral-700 bg-neutral-900/40 p-4 text-sm shadow-[0_0_15px_rgba(0,0,0,0.25)] hover:border-neutral-500 transition-colors">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="font-medium text-base text-neutral-100">
                    {experience.company}
                  </p>
                  <span className="text-neutral-400">•</span>
                  <p className="text-neutral-200">{experience.role}</p>
                  <span className="ml-auto text-neutral-400">
                    {experience.period}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-neutral-500">
                  {experience.location && <p>{experience.location}</p>}
                  {experience.employmentType && (
                    <span className="rounded-full border border-neutral-700 bg-neutral-800/60 px-2 py-0.5 text-[10px] text-neutral-200">
                      {experience.employmentType}
                    </span>
                  )}
                </div>
                <p className="text-neutral-400 mt-2">{experience.summary}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
