import { useState } from "react";
import ArrowNav from "../assets/Svg-components/Arrow-nav";
import MenuSvg from "../assets/Svg-components/MenuSvg";
import Menu from "./Utilities/Menu";

export default function Sidebar() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  

  function handleMenu() {
    setIsToggleMenu(!isToggleMenu);
  }

  
  return (
    <>
      <aside
        className={`${
          !isToggleMenu ? " w-[25rem] " : "w-0 "
        } border  container transition-all  `} 
      >
        <div className="arrow-nav mx-4 py-4 w-5 hidden md:block">
          <a href="#" onClick={handleMenu}>
            {!isToggleMenu ? <ArrowNav /> : <MenuSvg />}
          </a>
        </div>

        {!isToggleMenu ? <Menu /> : ""}
      </aside>
    </>
  );
}
