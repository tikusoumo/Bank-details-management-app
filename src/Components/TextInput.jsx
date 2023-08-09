import PropTypes from "prop-types";
import { useState } from "react";
export default function TextInput({ placeholder,save }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className={`p-2 border rounded-lg my-4 sm:w-[24rem] ${
          inputValue ? "bg-shade-two" : "border-gray-300"
        } transition-colors duration-300 `}
        value={inputValue}
        onChange={handleInputChange}
        disabled={save&&inputValue}
      />
    </>
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  save: PropTypes.bool
};
