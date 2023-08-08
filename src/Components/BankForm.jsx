import Checkbox from "./Checkbox";
import TextInput from "./TextInput";

export default function BankForm() {
  return (
    <>
      <div className="flex flex-col m-10 ">
        <div className="container">
          <div className="title font-sans-serif font-medium text-4xl">
            Bank Details
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur sunt a incidunt. Maiores sequi amet repellendus, quasi
            consequuntur, perferendis ipsum in quisquam asperiores porro autem
            repellat possimus illo molestias delectus! Maxime, id!
          </p>
        </div>
        <form className="mt-6 border p-5 rounded-lg sm:mr-40">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            
            <label className="font-bold ml-4 " htmlFor="acname">
              ACCOUNT HOLDER NAME
            </label>
            <TextInput placeholder="Account Holder Name" />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4 ">
            <label className="font-bold ml-4" htmlFor="acNo">
              ACCOUNT NUMBER
            </label>
            <TextInput placeholder="Account Number" />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            <label className="font-bold ml-4" htmlFor="accode">
              IFSC CODE
            </label>
            <TextInput placeholder="IFSC Code" />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            <label className="font-bold ml-4" htmlFor="bankname">
              BANK NAME
            </label>
            <TextInput placeholder="Bank Name" />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            <label className="font-bold ml-4" htmlFor="bankcity">
              BANK CITY
            </label>
            <TextInput placeholder="Bank City" />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4">
            <label className="font-bold ml-4" htmlFor="branchname">
              BRANCH NAME
            </label>
            <TextInput placeholder="Branch Name" />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:mr-4 mb-4">
            <label className="font-bold ml-4" htmlFor="acrelation">
              RELATION WITH ACCOUNT HOLDER
            </label>
            <TextInput placeholder="Relation with Account Holder" />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <label className="font-bold ml-4 mb-4" htmlFor="acname">
              CONSENT
            </label>
            <div className="mb-4 sm:mr-4">
              <Checkbox />
            </div>
          </div>
          <div className="flex justify-end mb-4">
            <input
              type="submit"
              value="Save"
              className="border w-20 p-2 text-center sm:mr-4 rounded-md bg-shade-one cursor-pointer text-white"
            />
          </div>
        </form>
        <span className="p-5 text-center">
          THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF
          THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO
          EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
        </span>
      </div>
    </>
  );
}
