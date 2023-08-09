import Arrow from "../assets/Svg-components/Arrow";
import Bank from "../assets/Svg-components/Bank";
import DailySum from "../assets/Svg-components/DailySum";
import DashBoard from "../assets/Svg-components/DashBoard";
import Totm from "../assets/Svg-components/TOTM";


export default function Menu() {
  return (
    <>
      <div className="hover:bg-shade-two">
          <a href="#">
            <ul className="flex p-4 items-center justify-between ml-4  hover:text-shade-one">
              <div className="flex items-center">
                <li>
                  <DashBoard />
                </li>
                <li className="ml-5 text-[1em]">My DashBoard</li>
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
              <div className="flex items-center">
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
              <div className="flex items-center">
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
              <div className="flex items-center">
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
    </>
  )
}
