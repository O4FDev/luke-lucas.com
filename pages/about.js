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
                            ? "text-gray-400 opacity-30 transition-opacity duration-300 ease-in-out"
                            : // Set the current element to have a 1 opacity
                            isHovered && anyHovered && anyHovered === link.name
                            ? "text-gray-400 opacity-100"
                            : "text-gray-400 opacity-30 transition-opacity duration-300 ease-in-out"
                          : // Set the current element to have a 1 opacity
                          isHovered && !anyHovered && isHovered === link.name
                          ? "text-gray-400 opacity-100"
                          : "text-gray-400 opacity-100"
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
                  className="h-5 w-5 fixed right-12 top-12 text-gray-800"
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
                          <a className="text-gray-800">{link.name}</a>
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

const About = () => {
    return (

        <div className='bg-black text-gray-50 h-full'>
            <Navbar />

            <section
                className='flex flex-col items-center md:justify-center h-[80vh] p-12'
            >


                <p className='text-xl font-normal'>
                    <h1
                        className='text-4xl md:text-6xl md:text-left font-semibold py-4'
                    >
                        Hello
                    </h1>
                    My name is Luke, and I'm a software developer.

                    <br />
                    <br />

                    I love to craft beautiful and functional websites and applications, making technology accessible to everyone.

                    <br />
                    <br />

                    I love creating things that make a difference, whether it be performant sites or beautiful applications.

                </p>

            </section>
            <section
                className='flex flex-col items-center md:justify-center sticky h-[80vh] p-12'
            >


                <h1
                // Align right
                    className="text-gray-600 text-4xl  lg:text-9xl font-normal -z-10 p-12"
                >
                    Experience
                </h1>

                <div className='flex flex-col'>
                    <div className='flex flex-col md:flex-row md:gap-20'>
                        <div className='flex flex-col py-12 md:py-0'>
                            <h1
                                className='text-xl font-semibold text-gray-400'
                            >
                                Software Engineer at
                            </h1>
                            <h1
                                className='text-xl font-semibold text-gray-400'
                            >
                                Rainoto + personal projects
                            </h1>
                            <h1
                                className='text-xl font-semibold text-gray-400'
                            >
                                October 2021 - Present
                            </h1>
                        </div>
                        <div className='flex flex-col'>
                            <h1
                                className='text-xl font-semibold text-gray-400'
                            >
                                Software Engineering Intern
                            </h1>
                            <h1
                                className='text-xl font-semibold text-gray-400'
                            >
                                Haru
                            </h1>
                            <h1
                                className='text-xl font-semibold text-gray-400'
                            >
                                July 2021 - September 2021
                            </h1>
                        </div>
                    </div>
                </div>

                {/* <img
                    src="https://cdn.hildey.com/Map.png"
                    alt="Map of Ireland"
                    className='absolute object-center -z-10 opacity-75'
                />

                <h1
                    className="text-xl md:text-6xl md:text-left font-semibold py-4 text-center"
                >
                    Born and raised in
                    <br />
                    Northern Ireland
                </h1> */}

            </section>

        </div>
    );
};

export default About;