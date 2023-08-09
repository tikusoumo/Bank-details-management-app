import { useState } from "react";
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
          isToggleMenu ? "w-[20rem]" : "w-16"
        } border h-screen`}
      >
        <div className="arrow-nav ml-4 py-4">
          <a href="#" onClick={handleMenu}>
            <img
              className={`transition-all`}
              src={`./src/assets/${isToggleMenu?"Arrow-nav.svg":"Menu.svg"}`}
            />
          </a>
        </div>

        {isToggleMenu ? <Menu /> : ""}
      </aside>
    </>
  );
}
