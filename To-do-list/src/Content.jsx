import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content() {
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: false,
  //     item: "One half pound bag of Cocoa Covered Almonds Unsalted",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Item 2",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Item 3",
  //   },
  // ]);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>

      <button onClick={handleClick}>Click it</button>
      <button
        onClick={() => {
          handleClick2("Dave");
        }}
      >
        Click it
      </button>
      <button
        onClick={(e) => {
          handleClick3(e);
        }}
      >
        Click it
      </button>
    </main>
  );
}

export default Content;
