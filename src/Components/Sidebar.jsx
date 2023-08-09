import { useState,useEffect } from "react";
import ArrowNav from "../assets/Svg-components/Arrow-nav";
import MenuSvg from "../assets/Svg-components/MenuSvg";
import Menu from "./Menu";

export default function Sidebar() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  function handleMenu() {
    setIsToggleMenu(!isToggleMenu);
  }

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Call it on component mount to set initial state
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <aside
        className={`${
          !isToggleMenu || !collapsed ? " w-[25rem] " : "w-0 md:w-16"
        } border  container transition-all `} 
      >
        <div className="arrow-nav mx-4 py-4 w-5 hidden md:block">
          <a href="#" onClick={handleMenu}>
            {!isToggleMenu && collapsed ? <ArrowNav /> : <MenuSvg />}
          </a>
        </div>

        {!isToggleMenu || !collapsed ? <Menu /> : ""}
      </aside>
    </>
  );
}
