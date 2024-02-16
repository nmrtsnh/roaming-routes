import React, { useState } from "react";

const Budget = ({ handleBudgetChange }) => {
  const [budget, setBudget] = useState(2000);

  const handleChange = (e) => {
    const newBudget = e.target.value;
    setBudget(newBudget);
    handleBudgetChange(newBudget);
  };
  return (
    <div>
      <div className="text-white text-md font-extrabold font-text font mb-8 mt-20 flex justify-between">
        Budget: <span className="float">${budget}</span>
      </div>

      <div className="">
        <input
          type="range"
          min="1"
          max="2000"
          value={budget}
          onChange={handleChange}
          data-rangeslider
        />
      </div>
    </div>
  );
};

export default Budget;
