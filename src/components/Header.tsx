import Link from './Link';

export default function Header() {
  return (
    <nav className="container flex items-center justify-between py-6">
      <a
        href="mailto:barestu.fandy@gmail.com"
        className="text-neutral-400 hover:text-neutral-200"
      >
        barestu.fandy@gmail.com
      </a>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link href="#" isActive>
              Home
            </Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
