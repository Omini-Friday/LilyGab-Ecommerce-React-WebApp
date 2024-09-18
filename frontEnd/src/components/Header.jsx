import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
//import images from
import user from "../assets/user.svg";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";

function Header() {
  //use state
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        //close the menu if open whn scrolling down
        if (menuIsOpen) {
          setMenuIsOpen(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    //clean up function to remove event listener or unnecessary re-rendering
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuIsOpen]); //dependency array to allow re-rendering once

  // mobile navBar

  return (
    <header className="max-padd-container w-full z-50">
      <div className="flexBetween py-3">
        <Link to={"/"} className="flex items-center gap-x-2">
          <img src={logo} alt="logoImage" height={31} width={31} />
          <span className="bold-24  xs:flex">LiliGab</span> {/* hidden */}
        </Link>
        <div className="flexCenter gap-x-4">
          {/* desktop navBar */}
          <div>
            <NavBar
              containerStyles={
                "hidden xl:flex gap-x-5 xl:gap-x-5 xl:gap-x-10 medium-15 rounded-full px-2 py-1"
              }
            />
          </div>

          <div>
            <NavBar
              containerStyles={`${
                menuIsOpen
                  ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                  : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%]"
              }`}
            />
          </div>
          <div className="flexBetween gap-x-3 sm:gap-x-2 bold-16">
            {!menuIsOpen ? (
              <MdMenu
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
                onClick={toggleMenu}
              />
            ) : (
              <MdClose
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
                onClick={toggleMenu}
              />
            )}
            <div className="flexBetween sm:gap-x-6">
              <NavLink to={"/"} className={"flex"}>
                <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary" />
                <span className="relative flexCenter w-5 h-5 rounded-full big-secondary text-primary bg-secondary medium-14 -top-2 right-3">
                  {0}
                </span>
              </NavLink>
              <NavLink
                to={"/login"}
                className={
                  "btn-secondary flexCenter gap-x-2 medium-16 rounded-xl"
                }
              >
                <img src={user} alt="" height={19} width={19} />
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
