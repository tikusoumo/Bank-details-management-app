import { useState, useEffect } from 'react';

function App() {
  const [inputs, setInputs] = useState([]);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const [saveButtonEnabled, setSaveButtonEnabled] = useState(false);

  useEffect(() => {
    const allInputsFilled = inputs.every(inputValue => inputValue !== '');
    setSaveButtonEnabled(allInputsFilled && checkBoxChecked);
  }, [inputs, checkBoxChecked]);

  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const handleCheckBoxChange = () => {
    setCheckBoxChecked(!checkBoxChecked);
  };

  const handleSaveClick = () => {
    // Perform the save action here
    console.log("Saving...");
  };

  return (
    <div>
      {inputs.map((inputValue, index) => (
        <input
          key={index}
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      <label>
        <input
          type="checkbox"
          checked={checkBoxChecked}
          onChange={handleCheckBoxChange}
        />
        Checkbox
      </label>
      <button
        onClick={handleSaveClick}
        disabled={!saveButtonEnabled}
      >
        Save
      </button>
    </div>
  );
}

export default App;