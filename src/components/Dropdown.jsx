import { useState } from "react";

function Dropdown({ options, selection, onSelect}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        // setIsOpen((currentIsOpen) => !currentIsOpen);
        // console.log(isOpen);--> False
        // console.log(!isOpen);--> True

        //Close Dropdown
        // setIsOpen(!isOpen);
        setIsOpen(false);

        // WHAT OPTION DID THE USER CLICK ON ??
        // console.log(event.target.textContent);
        // console.log(event);
        onSelect(option);
          
    };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value} className="item">
        {option.label}
      </div>
    );
  });

  let content = 'Select...';
  if (selection) {
    content = selection.label;
  }

  return (
    <>
    <div>
        <div className="cursor-pointer" 
        onClick={handleClick}>{content}</div>
    {isOpen && <div>{renderedOptions}</div>}

    </div>
      
    </>
  );
}

export default Dropdown;
