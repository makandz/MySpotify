import Link from 'next/link';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  weight: ['700'],
  subsets: ['latin'],
});

type LinkType = {
  text: string;
  href: string;
};

type NavbarProps = {
  links: LinkType[];
};

export function Navbar(props: NavbarProps) {
  return (
    <header className="my-10 flex justify-between items-center">
      <h1
        className={`text-3xl font-bold cursor-default ${manrope.className}`}
      >
        New<span className="text-green-500">Tunes</span>
      </h1>
      <ul className="list-none m-0 p-0 text-lg">
        {props.links.map((link) => (
          <li key={link.text} className="inline ml-8">
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
