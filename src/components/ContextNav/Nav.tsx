
import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import PropTypes from "prop-types";
import { FiSun } from "react-icons/fi";
import Brightness4Icon from '@mui/icons-material/Brightness4';



const navItems = ["Service", "About", "Contact"];

interface NavProps {
  window?: () => Window;
}

const Nav: React.FC<NavProps> = ({window} ) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} className="text-center  bg-gray-200">
      <hr className="my-2" />
      <ul>
        {navItems.map((item) => (
          <li key={item} className="py-2">
            <button className="text-blue-600 ">{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );

   window !== undefined ? () => window().document.body : undefined;

  return (
  
<div className="flex ">
  <div className="flex flex-col w-full mt-16 ">
    <header
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } fixed top-0 z-10 w-full `}
    >
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-3 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex items-center">
            <img
              src="/images/hexleap.png"
              className="w-14 h-14"
              alt=""
            />
            <h2
              className={`${
                theme === "light" ? "text-gray-900" : "text-white"
              } text-xl  text-center  md:text-2xl lg:text-2xl font-semibold  `}
            >
              hexleap
            </h2>
          </div>
          <nav className="hidden md:flex space-x-4 text-lg ">
            {navItems.map((item) => (
              <button
                key={item}
                className={`${
                  theme === "light" ? "text-gray" : "text-white"
                }  hover:text-gray-300 `}
              >
                {item}
              </button>
            ))}
            <div
              className={theme === "light" ? "text-black" : "text-white"}
            >
              <button className="" onClick={toggleTheme}>
                {theme === "light" ? (
                  <Brightness4Icon  sx={{ fontSize:30}} />
                ) : "dark" ? (
                  <FiSun size={30} />
                ) : (
                  ""
                )}
              </button>
            </div>
          </nav>
          <button
            className={`${theme === "light" ? "text-gray-900" : "text-white"}  md:hidden focus:outline-none`}
            onClick={handleDrawerToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <main className="flex-1">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
       
      </div>
    </main>
  </div>
  <nav className="md:hidden">
    {/* Mobile  */}
    <div
      className={` fixed inset-0 z-10 ${mobileOpen ? "block" : "hidden"}`}
      onClick={handleDrawerToggle}
    >
      <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
    </div>
    <div
      className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white z-20 ${
        mobileOpen ? "block" : "hidden"
      }`}
    >
      {drawer}
    </div>
  </nav>
</div>
    
  );
};

Nav.propTypes = {
  window: PropTypes.func,
};

export default Nav;


