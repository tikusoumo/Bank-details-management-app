import Checkbox from "./Checkbox";
import TextInput from "./TextInput";
import { useState } from "react";

export default function BankForm() {
 
    const [currentDate, setCurrentDate] = useState('');
    const [inputValue, setInputValue] = useState("");

    const [save, setSave] = useState(false);

  
    const handleButtonClick = (e) => {
      e.preventDefault();
      const now = new Date();
      const formattedDate = now.toDateString().toUpperCase();
     
      setCurrentDate(formattedDate);
      setSave(!save);
    };
  
  return (
    <>
      <div className="flex flex-col m-10 ">
        <div className="container w-[100%]">
          <div className="title font-sans-serif font-medium text-4xl leading-normal">
            Update Bank Details
          </div>
          <span className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur sunt a incidunt. Maiores sequi amet repellendus, quasi
            consequuntur, perferendis ipsum in quisquam asperiores porro autem
            repellat possimus illo molestias delectus! Maxime, id!
          </span>
        </div>
        <form className="container mt-6 border p-5 rounded-lg w-[80%] ">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            
            <label className="font-bold ml-4 " htmlFor="acname">
              ACCOUNT HOLDER NAME
            </label>
            <TextInput placeholder="Account Holder Name" save={save} inputValue={inputValue => setInputValue(inputValue)}/>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4 ">
            <label className="font-bold ml-4" htmlFor="acNo">
              ACCOUNT NUMBER
            </label>
            <TextInput placeholder="Account Number" save={save}/>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            <label className="font-bold ml-4" htmlFor="accode">
              IFSC CODE
            </label>
            <TextInput placeholder="IFSC Code" save={save}/>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            <label className="font-bold ml-4" htmlFor="bankname">
              BANK NAME
            </label>
            <TextInput placeholder="Bank Name" save={save}/>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            <label className="font-bold ml-4" htmlFor="bankcity">
              BANK CITY
            </label>
            <TextInput placeholder="Bank City" save={save}/>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            <label className="font-bold ml-4" htmlFor="branchname">
              BRANCH NAME
            </label>
            <TextInput placeholder="Branch Name" save={save}/>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4 mb-4 ">
            <label className="font-bold ml-4" htmlFor="acrelation">
              RELATION WITH ACCOUNT HOLDER
            </label>
            <TextInput placeholder="Relation with Account Holder" save={save}/>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <label className="font-bold ml-4 mb-4" htmlFor="acname">
              CONSENT
            </label>
            <div className="mb-4 sm:mr-4">
              <Checkbox currentDate = {currentDate} save={save}/>
            
            </div>
          </div>
          <div className="flex justify-end mb-4">
            <input
              onClick={handleButtonClick}
              type="submit"
              value="Save"
              className={`border w-20 p-2 text-center sm:mr-4 rounded-md bg-shade-one cursor-pointer text-white ${save&&inputValue?"hidden":""}`}
            />
          </div>
        </form>
        <span className="container p-5 text-center text-sm w-[100%]">
          THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF
          THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO
          EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
        </span>
      </div>
    </>
  );
}
