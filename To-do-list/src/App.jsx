import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("Todolist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems);
    localStorage.setItem("Todolist", JSON.stringify(listItems));
  };
  return (
    <>
      <div className="App">
        <Header title="To-Do-List" />
        <AddItem />
        <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
