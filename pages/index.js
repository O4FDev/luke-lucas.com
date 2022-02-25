import Link from "next/link";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <div>
          <div className="flex flex-row justify-between p-12">
              <div className="flex flex-row items-center">
                  <h1 className="text-2xl font-semibold">Luke Lucas</h1>
              </div>
              <div className="flex flex-row items-center">
                  <MenuIcon className="h-5 w-5 sticky md:hidden right-12 top-12" 
                  onClick={() => {
                      setMenuOpen(!menuOpen)
                  }}
                  />
                  <ul className="hidden md:flex gap-4 text-[16px] font-semibold">
                    {Links.map((link, index) => {
                      return (
                        <li key={index}>
                          <Link href={link.link}>
                            <a className="text-sm">{link.name}</a>
                          </Link>
                        </li>
                      )})
                    }
                  </ul>
              </div>
          </div>
          {menuOpen && (
              <div className="flex flex-col items-center justify-center absolute top-0 right-0 w-screen lg:w-2/5 h-full bg-white shadow-xl md:hidden">
                  <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row items-center">
                          <XIcon className="h-5 w-5 absolute right-12 top-12"
                          onClick={() => {
                              setMenuOpen(!menuOpen)
                          }}
                          />
                      </div>
                  </div>
                  <div>
                      <div className="">
                          <div className="flex flex-col gap-4 font-bold text-left text-2xl lg:text-4xl lg:gap-8">
                            {
                              Links.map((link, index) => {
                                return (
                                  <div key={index}>
                                    <Link href={link.link}>
                                      <a className="">{link.name}</a>
                                    </Link>
                                  </div>
                                )
                              })
                            }
                          </div>
                      </div>
                      <div className="flex py-6 flex-row text-lg">
                          <div className="flex flex-col gap-4 font-bold text-left">
                              <a className="text-orange-500 underline" href="mailto:luke@rainoto.com
                              ">
                                  luke@rainoto.com
                              </a>
                              
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </div>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
};

export default Home;