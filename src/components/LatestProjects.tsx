import { FaLink } from 'react-icons/fa';
import projects from '../data/projects.json';
import { cn } from '../utils/common';
import Link from './Link';

export default function LatestProjects() {
  return (
    <div className="container">
      <div className="flex items-end justify-between py-6">
        <h3 className="text-xl">Latest Projects</h3>
        <Link href="#" className="text-sm">
          See All Projects
        </Link>
      </div>

      <ul className="space-y-4">
        {projects.map((project, idx) => (
          <li key={idx}>
            <a
              href="#"
              className={cn(
                'border border-neutral-600 rounded-md p-3 text-sm flex items-center gap-4',
                'hover:scale-[101%] transition-transform ease-in duration-100'
              )}
            >
              <p>{project.title}</p>
              <p className="text-neutral-400">{project.stacks}</p>
              <FaLink className="ml-auto" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
