import React from "react";
import RadioButton from "./RadioButton";

const SearchForm = ({
    input,
    radioButtons,
    handleTextChange,
    handleRadioChange,
    selectedOption,
    handleFormSubmit
}) => (
    <form>

        {radioButtons.map(radio => (
            <RadioButton 
                key={`radio-${radio}`}
                value={radio}
                selectedOption={selectedOption}
                handleChange={handleRadioChange}
            />
        ))}

        <label>
            Book Name
            <input 
                type="text"
                onChange={handleTextChange}
                value={input}
            />
        </label>

        <button onClick={handleFormSubmit}>
            Search
        </button>
    </form>
)

export default SearchForm;