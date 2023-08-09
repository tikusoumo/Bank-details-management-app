import "./App.css";
import BankForm from "./Components/BankForm";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex">
        {/* <Sidebar /> */}
        <BankForm />
      </div>
    </>
  );
}

export default App;
