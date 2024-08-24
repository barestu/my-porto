import social from '../data/social.json';
import Link from './Link';

export default function Intro() {
  return (
    <div className="container">
      <h1 className="text-3xl mb-6">Hello, I'm Fandy Barestu 🚀</h1>

      <p className="text-neutral-400 mb-4">
        <span className="text-yellow-300">I blend creativity with code</span> to
        craft immersive digital experiences. Explore my portfolio to witness the
        fusion of innovation and functionality in every project. Let's embark on
        a journey where{' '}
        <span className="text-cyan-300">imagination meets technology!</span>
      </p>

      <ul className="flex gap-2">
        <li>
          <Link href={social.linkedin}>Linkedin</Link>
        </li>
        <li>|</li>
        <li>
          <Link href={social.twitter}>X</Link>
        </li>
        <li>|</li>
        <li>
          <Link href={social.instagram}>Instagram</Link>
        </li>
      </ul>
    </div>
  );
}
