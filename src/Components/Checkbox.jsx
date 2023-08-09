import PropTypes from "prop-types";
import { useState } from "react";

export default function Checkbox({ currentDate, save }) {
  const [consentChecked, setConsentChecked] = useState(false);

  const handleCheckboxChange = () => {
    setConsentChecked(!consentChecked);
  };
  return (
    <>
      <div className="flex p-4 border border-gray-300 rounded-lg shadow-md w-[30rem] sm:w-[24rem]">
        <label className="flex">
          <input
            type="checkbox"
            className="w-6 h-8 mr-4 checked:bg-shade-one "
            checked={consentChecked}
            disabled={save && consentChecked}
            onChange={handleCheckboxChange}
          />
        </label>
        <div className="flex flex-col">
          <span className="flex items-center text-sm text-primary-text">
            I confirm that the information given in this form is true, complete
            and accurate. I understand that in case of incorrect details,
            Exambazaar will not be responsible for any loss of pay.
          </span>
          {consentChecked?currentDate && (
            <p className="font-bold text-sm">FILLED ON {currentDate}</p>
          ):""}
        </div>
      </div>
    </>
  );
}
Checkbox.propTypes = {
  currentDate: PropTypes.string,
  save: PropTypes.bool,
};
