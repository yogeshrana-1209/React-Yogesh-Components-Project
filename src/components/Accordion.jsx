import { useState } from "react";
// import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    
    setExpandedIndex((currentExpandedIndex) => {
        if (currentExpandedIndex === nextIndex) {
            return -1;
        } else {
            return nextIndex;
        }
    
        // return nextIndex;
    });
    
    // if (nextIndex === expandedIndex) {
    //   setExpandedIndex(-1);
    // } 
    // else {
    //   setExpandedIndex(nextIndex);
    // }
    // // setExpandedIndex(nextIndex);
    //   console.log(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    // if (index === expandedIndex) {
    //     console.log('expanded');

    // }
    //  else {
    //     console.log('collapsed');
    // }

    const isExpanded = index === expandedIndex;
    //console.log(isExpanded);

    // const handleClick = () => {
    //   setExpandedIndex(index);
    // };

    const icon = (
      <span>
        {/* {isExpanded ? 'DOWN' : 'LEFT'} */}
        <span className="text-xl">{isExpanded ? "🔽" : "🔼"}</span>
        {/* {isExpanded ? <GoChevronDown /> : <GoChevronLeft />} */}
      </span>
    );

    return (
      <div key={item.id}>
        <div className="flex p-3 bg-gray-50 border-b items-center justify-between">
          <h2
            onClick={() => handleClick(index)}
            //   onClick={handleClick}
            //    onClick={() => {
            //     console.log(index);
            //      setExpandedIndex(index);
            //   }}
          >
            {item.label}
            {icon}
          </h2>
          {/* <span>+</span> */}
        </div>
        <div>
          {/* <p>{item.content}</p> */}
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
