import React from "react";
import navbarData from "../../data/navbar.data";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Navbar(e) {
  function toggleTheme() {
    var themeMode = document.documentElement.getAttribute("data-mode");
    if (themeMode === "light") {
      document.documentElement.setAttribute("data-mode", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-mode", "light");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div className="navbar-custom" id="navbar">
      <div className="lg:container flex  items-center">
        <a href="/" className="flex lg:ml-0 ml-8">
          <span className="self-center text-xl font-poppins font-bold tracking-widest whitespace-nowrap uppercase text-white me-20">
            Dorsin
          </span>
        </a>

        <div className="w-full lg:order-2 rtl:mr-auto ltr:ml-auto lg:mr-0 mr-8 flex items-center">
          <div className="ml-auto">
            <Link
              to="/signup"
              className="btn btn bg-red-500 text-white rounded-full translate-y-0"
            >
              Try it Free
            </Link>
          </div>
          <div className="flex flex-col gap-3 z-40 ms-4">
            <a
              onClick={toggleTheme}
              href="javascript: void(0);"
              id="mode"
              className="px-3 py-3 z-40 text-14 font-normal transition-all duration-300 ease-linear text-white bg-zinc-800 dark:bg-white rounded-3xl"
            >
              <i className="mdi mdi-white-balance-sunny text-xl dark:text-zinc-800 hidden dark:block" />
              <i className="mdi mdi-moon-waning-crescent text-xl dark:text-zinc-800 block dark:hidden" />
            </a>
          </div>
        </div>

        <div
          className="justify-between items-center w-full lg:flex hidden lg:order-1 ltr:lg:ml-14 rtl:lg:mr-14 rtl:mr-0 ltr:ml-0"
          id="menu-collapse"
        >
          <ul
            className="navbar-nav lg:h-auto h-[290px] lg:overflow-visible overflow-y-scroll lg:ml-0 ml-8"
            id="navbar-navlist"
          >
            {navbarData.map((item, index) => (
              <li key={index}>
                {item.links ? (
                  <div className="dropdown">
                    <button className="nav-item dropdown-toggle">
                      {item.label}
                    </button>
                    <div className="dropdown-menu">
                      {item.links.map((link, linkIndex) => (
                        <HashLink
                          key={linkIndex}
                          to={link.href}
                          className="dropdown-item"
                        >
                          {link.label}
                        </HashLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <HashLink to={item.href} className="nav-item">
                    {item.label}
                  </HashLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
