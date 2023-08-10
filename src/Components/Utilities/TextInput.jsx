import PropTypes from "prop-types";
import { useState } from "react";
export default function TextInput({ placeholder, save }) {
  const [inputValue, setInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (inputValue.length === 0) {
      setIsEmpty(!isEmpty);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className={`p-2 border rounded-lg my-2 sm:w-[24rem] ${
          inputValue ? "bg-shade-two" : "border-gray-300"
        } transition-colors duration-300 `}
        value={inputValue}
        onChange={handleInputChange}
        disabled={save && inputValue}
      />
    </>
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  save: PropTypes.bool,
};
