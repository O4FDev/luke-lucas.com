import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Links = [
  {
    name: "Work",
    link: "#work",
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

const Home = () => {
  const [niceToMeetHovered, setNiceToMeetHovered] = useState(false);
  const [placeholder, setPlaceholder] = useState(false);

  const [scrollAmount, setScrollAmount] = useState(0);

  return (
    <div>
      <Navbar />

      <main className="flex flex-col justify-center text-center items-center py-16">
        <h1 className="text-5xl font-semibold px-6 lg:px-0 leading-tight w-12/12 lg:w-8/12 lg:text-8xl">
          Frontend developer working on large problems
        </h1>

        <div className="flex items-center gap-4 py-8 lg:py-16">
          <p className="text-lg">Student at</p>
          <img
            src="https://cdn.hildey.com/OU.png"
            className="w-20 lg:w-24 object-cover"
            alt="The Open University"
          />
        </div>
      </main>

      <section className="flex flex-col justify-center items-center py-16 w-full">
        <div
          className={
            niceToMeetHovered
              ? "bg-[#f5f5f5] w-10/12 lg:w-7/12 h-[50vh] lg:h-[68vh] lg:transition-w lg:transition-h lg:duration-500 lg:ease-in-out relative"
              : "bg-[#f5f5f5] w-10/12 lg:w-8/12 h-[50vh] lg:h-[70vh] lg:transition-w lg:transition-h lg:duration-500 lg:ease-in-out relative m-12"
          }
          onMouseEnter={() => {
            if (niceToMeetHovered == false) {
              setNiceToMeetHovered(true);
            }
            setPlaceholder(true);
          }}
          onMouseLeave={() => {
            setPlaceholder(false);
            setTimeout(() => {
              setNiceToMeetHovered(false);
            }, 300);
          }}
        >
          <h1
            className={
              niceToMeetHovered
                ? "text-4xl font-semibold leading-tight p-12 lg:p-24 lg:text-6xl transition-p duration-300 ease-in-out"
                : "text-4xl font-semibold leading-tight p-12 lg:text-6xl transition-p duration-300 ease-in-out"
            }
          >
            Nice to
            <br />
            meet you
          </h1>

          <button
            className={
              niceToMeetHovered
                ? "flex flex-col justify-center items-center mx-12 lg:m-24 lg:text-5xl transition-m duration-300 ease-in-out absolute lg:bottom-0 border border-gray-900 px-4 py-2 rounded-full"
                : "flex flex-col justify-center items-center mx-12 lg:m-12 lg:text-5xl transition-m duration-300 ease-in-out absolute lg:bottom-0 border border-gray-900 px-4 py-2 rounded-full"
            }
          >
            <Link href="/about">
              <span className="text-2xl font-semibold z-1">About Me</span>
            </Link>
          </button>
          <img
            src="https://cdn.hildey.com/Luke.png"
            alt=""
            className="absolute w-2/6 lg:w-3/12 rounded-sm bottom-0 right-0"
          />
        </div>
      </section>
      
      
      <div className="flex justify-center my-6 md:my-12">
        <h1 className="text-2xl leading-tight font-semibold p-12 lg:p-24 lg:text-4xl transition-p duration-300 ease-in-out md:w-6/12 text-center">
          By designing accessible interfaces, I make digital products usable for everyone.
        </h1>
      </div>
      
      <article className="flex flex-col text-center justify-center" id="work">

        <div className="flex md:hidden justify-center my-12 md:my-24">
          <img src="https://cdn.hildey.com/Haru.png" alt="Haru"  className="block md:hidden h-12 px-5" />
          <img src="https://cdn.hildey.com/Rainoto.png" alt="Rainoto" className="block md:hidden h-12 px-5" />
        </div>
        <div className="flex md:hidden justify-center my-10 md:my-0">
          <img src="https://cdn.hildey.com/Clerk.png" alt="Clerk"  className="block md:hidden h-12 px-5" />
          <img src="https://cdn.hildey.com/NoCode.png" alt="TailwindCSS NoCode"  className="block md:hidden h-12 px-5" />
        </div>

        {/* Carousel */}
        <Marquee
          direction="right"
          speed={80}
          className="hidden md:block md:w-full lg:w-10/12 md:h-20 md:my-10"
        >
          <img src="https://cdn.hildey.com/Rainoto.png" alt="Rainoto" className="hidden md:block h-full px-10" />
          <img src="https://cdn.hildey.com/Clerk.png" alt="Clerk"  className="hidden md:block h-full px-10" />
          <img src="https://cdn.hildey.com/Haru.png" alt="Haru"  className="hidden md:block h-full px-10" />
          <img src="https://cdn.hildey.com/NoCode.png" alt="TailwindCSS NoCode"  className="hidden md:block h-full px-10" />
        </Marquee>

      </article>

      <section className="flex md:justify-between items-center h-full w-full p-12" id="skills">

      </section>

    </div>
  );
};

export default Home;
