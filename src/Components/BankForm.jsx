export default function BankForm() {
  return (
    <>
      <div className="flex flex-col">
        <div className="container">
          <div className="title font-sans-serif font-medium text-4xl">Bank Details</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur sunt a incidunt. Maiores sequi amet repellendus, quasi
            consequuntur, perferendis ipsum in quisquam asperiores porro autem
            repellat possimus illo molestias delectus! Maxime, id!
          </p>
        </div>
        <form className="container flex flex-col">
           <div className="flex"> 
          <label htmlFor="acname">ACCOUNT HOLDER NAME</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Account Holder Name"
          />
          </div>
           <div className="flex">  

          <label htmlFor="acname">ACCOUNT NUMBER</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Account Number"
          />
          </div>
           <div className="flex">
          <label htmlFor="acname">IFSC CODE</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="IFSC Code"
          />
          </div>
           <div className="flex"> 
          <label htmlFor="acname">BANK NAME</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Bank Name"
          />
          </div>
           <div className="flex">
          <label htmlFor="acname">BANK CITY</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Bank City"
          />
          </div>
          <div className="flex">  
          <label htmlFor="acname">BRANCH NAME</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Branch Name"
          />
          </div>
           <div className="flex">
          <label htmlFor="acname">RELATION WITH ACCOUNT HOLDER</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Relation with Account Holder"
          />
          </div>
           <div className="flex"> 
          <label htmlFor="acname">CONSENT</label>
          <div className="flex">
          <input
            type="checkbox"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <span>I confirm that the information given in this form is true, complete and accurate. I understand that in case of incorrect details, Exambazaar will not be responsible for any loss of pay.</span>
          </div>
          </div>
          <input type="submit" value="Save" className="border w-20 p-2 text-center rounded-md"/>
        </form>
      </div>
    </>
  );
}
