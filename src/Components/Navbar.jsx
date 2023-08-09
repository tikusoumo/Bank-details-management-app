import { useState } from "react";
import Menu from "./Menu";
import MagnifyingGlass from "../assets/MagnifyingGlass";
import UserCircle from "../assets/UserCircle";
import BellRinging from "../assets/BellRinging";
export default function Navbar() {
  const [isToggleMenuNav, setIsToggleMenuNav] = useState(false);

  function handleMenu() {
    setIsToggleMenuNav(!isToggleMenuNav);
  }
  return (
    <>
      <nav className="flex justify-between text-xl font-bold font-sans h-16 ml-4 items-end border-b">
      <img    onClick={handleMenu}
              className={`transition-all block sm:hidden pb-2 w-8`}
              src={`./src/assets/${isToggleMenuNav?"Arrow-nav.svg":"Menu.svg"}`}
            />
        <div className="logo pb-2 hidden sm:inline">Logo</div>
        <div className="navigation hidden lg:flex">
          <ul className="flex ">
            <li className="mx-12 pb-1 border-b-4 hover:border-shade-one ">
              <a href="#">Home</a>
            </li>
            <li className="mx-12 pb-1 border-b-4 hover:border-shade-one">
              <a href="#">Services</a>
            </li>
            <li className="mx-12 pb-1 border-b-4 hover:border-shade-one">
              <a href="#">Blog</a>
            </li>
            <li className="mx-12 pb-1 border-b-4 hover:border-shade-one">
              <a href="#">Offers</a>
            </li>
            <li className="mr-4 ml-12 pb-1 border-b-4 hover:border-shade-one">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="utils  mr-6 pb-2 hidden sm:flex">
          <button className="Search ">
            
            <MagnifyingGlass/>
          </button>
          <button className="Notification mx-10">
            <BellRinging/>
          </button>
          <button className="Profile ">
           <UserCircle/>
          </button>
        </div>
      </nav>
      {isToggleMenuNav? <Menu /> : ""}
    </>
  );
}
