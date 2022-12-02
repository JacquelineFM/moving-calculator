import { useState } from "react";
// components
import Logo from "../../components/Logo";
//
import MenuHeader from "./MenuHeader";

// ----------------------------------------------------------------------

const navConfig = [
  ["How We Work", "/#"],
  ["Services", "/#"],
  ["Free Quote", "/#"],
  ["Contact", "/#"],
];

// ----------------------------------------------------------------------

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-primary">
        <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-48 2xl:px-60">
          <div className="flex items-center justify-between h-16 lg:h-36">
            <div className="w-full justify-between flex items-center">
              <a className="flex-shrink-0" href="/">
                <Logo />
              </a>
              <div className="hidden lg:block">
                <div className="flex items-baseline space-x-8">
                  <MenuHeader navConfig={navConfig} />
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                className="text-white p-2 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                  transform="scale(-2,2)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 py-3 space-y-1 sm:px-3">
              <MenuHeader navConfig={navConfig} sx="block" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
