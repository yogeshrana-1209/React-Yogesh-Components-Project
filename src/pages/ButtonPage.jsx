import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Button from "./components/Button.jsx";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

function handleClick() { 
  console.log("Button clicked");  
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/* <App /> */}
      <div className="flex justify-center space-x-4">
        <Button primary outline rounded className="mb-5" onClick={handleClick}>
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
    </>
  </StrictMode>
);
