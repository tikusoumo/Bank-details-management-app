
export default function Checkbox() {
  
  return (
    <>
      <div className="flex p-4 border border-gray-300 rounded-lg shadow-md w-[30rem] sm:w-[24rem]">
        <label className="flex">
          <input
            type="checkbox"
            className="w-6 h-8 mr-4 "
            
          />
          </label>
          <span className="flex items-center text-sm text-primary-text">
             I confirm that the information given in this form is true, complete and accurate. I understand that in case of incorrect details, Exambazaar will not be responsible for any loss of pay.
          </span>
      </div>
    </>
  );
}
