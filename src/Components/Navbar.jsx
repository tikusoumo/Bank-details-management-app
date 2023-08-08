export default function Navbar() {
  return (
    <>
      <div className="flex justify-between text-xl font-bold font-sans h-16 ml-4 items-end border-b">
        <div className="logo pb-2 ">Logo</div>
        <div className="navigation">
          <ul className="flex">
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
        <div className="utils flex mr-6 pb-2">
          <button className="Search ">
            <img  src="./src/assets/MagnifyingGlass.svg" />
          </button>
          <button className="Notification mx-10">
            <img src="./src/assets/BellRinging.svg" />
          </button>
          <button className="Profile ">
            <img src="./src/assets/UserCircle.svg" />
          </button>
        </div>
      </div>
    </>
  );
}
