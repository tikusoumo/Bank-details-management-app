export default function Navbar() {
  return (
    <>
      <div className="flex justify-between text-xl font-bold font-sans h-16 p-3 items-end border">
        <div className="logo">Logo</div>
        <div className="navigation">
          <ul className="flex">
            <li className="mx-16">
              <a href="#">Home</a>
            </li>
            <li className="mx-16">
              <a href="#">Services</a>
            </li>
            <li className="mx-16">
              <a href="#">Blog</a>
            </li>
            <li className="mx-16">
              <a href="#">Offers</a>
            </li>
            <li className="mr-4 ml-16">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="utils flex mr-6">
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
