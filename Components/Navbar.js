import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Links = [
  {
    name: "Work",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Resume",
    link: "https://cdn.hildey.com/CV.pdf",
  }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [anyHovered, setAnyHovered] = useState(false);

  return (
    <nav className="">
      <div className="flex flex-row justify-between p-12 font-semibold">
        <div className="flex flex-row items-center">
          <Link href="/">
            <h1 className="text-2xl font-semibold font-serif cursor-pointer">Luke Lucas</h1>
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <MenuIcon
            className="h-5 w-5 sticky md:hidden right-12 top-12"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
          <ul className="hidden md:flex gap-4 text-[16px]">
            {/* If anyIsHovered is false then just render normally, if one is hovered but not the current element give it a 0.3 opacity, if it is being hovered then render it normally. There should be an ease on the animation opactity of 0.2s */}

            {Links.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.link}>
                    <a
                      className={
                        anyHovered
                          ? // Set the elements that are not being hovered to have a 0.3 opacity
                            isHovered && anyHovered && anyHovered !== link.name
                            ? "text-gray-600 opacity-30 transition-opacity duration-300 ease-in-out"
                            : // Set the current element to have a 1 opacity
                            isHovered && anyHovered && anyHovered === link.name
                            ? "text-gray-600 opacity-100"
                            : "text-gray-600 opacity-30 transition-opacity duration-300 ease-in-out"
                          : // Set the current element to have a 1 opacity
                          isHovered && !anyHovered && isHovered === link.name
                          ? "text-gray-600 opacity-100"
                          : "text-gray-600 opacity-100"
                      }
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setAnyHovered(link.name);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                        setAnyHovered(false);
                      }}
                    >
                      {link.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="h-screen">
          <div className="flex flex-col items-center justify-center absolute top-0 right-0 w-screen lg:w-2/5 h-full bg-white shadow-xl md:hidden">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <XIcon
                  className="h-5 w-5 absolute right-12 top-12"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="">
                <div className="flex flex-col gap-4 font-bold text-left text-2xl lg:text-4xl lg:gap-8">
                  {Links.map((link, index) => {
                    return (
                      <div key={index}>
                        <Link href={link.link}>
                          <a className="">{link.name}</a>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex py-6 flex-row text-lg">
                <div className="flex flex-col gap-4 font-bold text-left">
                  <a
                    className="text-orange-500 underline"
                    href="mailto:luke@rainoto.com
                              "
                  >
                    luke@rainoto.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;