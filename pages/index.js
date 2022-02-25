import Link from "next/link";
import { MenuIcon } from '@heroicons/react/outline'

const Links = [
  {
    "name": "Work",
    "link": "/work"
  },
  {
    "name": "About",
    "link": "/about"
  },
  {
    "name": "Blog",
    "link": "/blog"
  },
  {
    "name": "Contact",
    "link": "/contact"
  }
]

const Navbar = () => {
  return (
    <header className="p-12 font-semibold">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl">
          <Link href="/">Luke Lucas</Link>
        </h1>
        <ul className="hidden md:flex md:items-center md:gap-4 md:text-[1rem]">
          {
            Links.map(link => (
              <li key={link.name}>
                <Link href={link.link}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))
          }
        </ul>
        <MenuIcon className="w-5 h-5 md:hidden" />
      </nav>
    </header>
  )
};

const Home = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
};

export default Home;