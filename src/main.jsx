import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Button from "./components/Button.jsx";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Accordion from "./components/Accordion.jsx";
import Dropdown from "./components/Dropdown.jsx";
import { useState } from "react";


  // const [selection, setSelection] = useState(null);

  const handleSelect = (options) => {
    setSelection(options);
  };
  
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];


function handleClick() {
  console.log("Button clicked");
}

const items = [
  {
    id: "01",
    label: "What is React?",
    content: "React is a front end JavaScript framework",
  },
  {
    id: "02",
    label: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    id: "03",
    label: "How do you use React?",
    content: "You use React by creating components",
  },
];


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/* <App /> */}
      <div className="bg-green-500 p-5 font-bold rounded-lg border-2 mb-5 border-blue-600 hover:shadow-lg">
        <h2 className="">Button's & Accordion with Dynamic State</h2>
      </div>
      <div className="flex px-5 py-5 mx-5 -my-5 flex-col justify-center space-x-4">
        <div className="flex flex-col align-middle justify-center space-y-4">
          <Button primary outline rounded className="" onClick={handleClick}>
            <GoBell className="mr-1" />
            Save
          </Button>
          <Button>Click me !</Button>
          <Button secondary rounded onMouseEnter={handleClick}>
            Click me !
          </Button>

          <Button success rounded>
            <GoCloudDownload className="mr-1" />
            Click me !
          </Button>

          <Button warning rounded outline>
            <GoDatabase className="mr-1" />
            Click me !
          </Button>

          <Button danger rounded>
            Click me !
          </Button>
        </div>
      </div>
      <br />
      <div className="bg-green-500 font-bold p-5 rounded-lg border-2 border-blue-600 hover:shadow-lg">
        <h2 className="text-3xl">Accordion</h2>
      </div>
      <div className="mt-5 cursor-pointer">
        <Accordion items={items} />
      </div>

      {/* Dropdown Component */}
      <div className="bg-green-500 font-bold p-5 mt-5 rounded-lg border-2 border-blue-600 hover:shadow-lg">
        <Dropdown
          options={options}
          // selection={selection}
          onSelect={handleSelect}
        />
      </div>
    </>
  </StrictMode>
);
