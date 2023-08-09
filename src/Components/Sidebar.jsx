import { useState } from "react";

import ArrowNav from "../assets/Arrow-nav";
import MenuSvg from "../assets/MenuSvg";
import Menu from "./Menu";

export default function Sidebar() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  function handleMenu() {
    setIsToggleMenu(!isToggleMenu);
  }
  return (
    <>
      <aside
        className={`${
          isToggleMenu ? "w-[20rem]" : "w-0 md:w-16"
        } border h-screen container transition-all`}
      >
        <div className="arrow-nav ml-4 py-4 w-5 hidden md:block">
          <a href="#" onClick={handleMenu}>
            
             {isToggleMenu ? <ArrowNav /> : <MenuSvg />}
            
          </a>
        </div>

        {isToggleMenu ? <Menu /> : ""}
      </aside>
    </>
  );
}
