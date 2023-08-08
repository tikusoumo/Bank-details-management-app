import { useState } from "react";
import Arrow from "../assets/Svg-components/Arrow";
import Bank from "../assets/Svg-components/Bank";
import DailySum from "../assets/Svg-components/DailySum";
import DashBoard from "../assets/Svg-components/DashBoard";
import Totm from "../assets/Svg-components/TOTM";

export default function Sidebar() {
  const [isToggleMenu,setIsToggleMenu] = useState(false)

  function handleMenu(){
    setIsToggleMenu(!isToggleMenu)
    
  }
  return (
    <>
   
      <div className="w-[30rem] border ">
        <div className="arrow-nav ml-4 py-4">
          <a href="#">
            <img src="./src/assets/Arrow-nav.svg" onClick={handleMenu}/>
          </a>
        </div>
        <div className="hover:bg-shade-two">
          <a href="#">
            <ul className="flex p-4 items-center justify-between ml-4  hover:text-shade-one ">
              <div className="flex">
                <li>
                  <DashBoard />
                </li>
                <li className="ml-5">My DashBoard</li>
              </div>
              <li>
                <Arrow />
              </li>
            </ul>
          </a>
        </div>
        <div className="hover:bg-shade-two">
          <a href="#">
            <ul className="flex p-4 items-center justify-between ml-4 hover:text-shade-one hover:bg-shade-two">
              <div className="flex">
                <li>
                  <Totm />
                </li>
                <li className="ml-5">TOTM links</li>
              </div>
              <li>
                <Arrow />
              </li>
            </ul>
          </a>
        </div>
        <div className="hover:bg-shade-two">
          <a href="#">
            <ul className="flex p-4 items-center justify-between ml-4 hover:text-shade-one hover:bg-shade-two">
              <div className="flex">
                <li>
                  <DailySum />
                </li>
                <li className="ml-5">Daily Summery</li>
              </div>
              <li>
                <Arrow />
              </li>
            </ul>
          </a>
        </div>
        <div className="hover:bg-shade-two">
          <a href="#">
            <ul className="flex p-4 items-center justify-between ml-4 hover:text-shade-one hover:bg-shade-two">
              <div className="flex">
                <li>
                  <Bank />
                </li>
                <li className="ml-5">Bank Details</li>
              </div>
              <li>
                <Arrow />
              </li>
            </ul>
          </a>
        </div>
      </div>
    </>
  );
}
