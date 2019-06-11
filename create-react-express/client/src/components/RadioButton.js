import React from "react";

const RadioButton = ({
    value,
    selectedOption,
    handleFormSubmit
}) => {
    return(
        <label>
            <input
                type="radio"
                // value={value}
                checked={value === selectedOption}
                onChange={handleFormSubmit}
            />
            {value}
        </label>
    )
}

export default RadioButton;