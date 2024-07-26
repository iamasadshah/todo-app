import AddTodo from "./components/AddTodo";
import "./App.css";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [todoItems, setToDoItems] = useState([]);

  const handleNewItems = (itemName, itemDueDate) => {
    const newToDoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToDoItems(newToDoItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newToDoItems = todoItems.filter((item) => item.name !== todoItemName);
    setToDoItems(newToDoItems);
    console.log(`${todoItemName}`);
  };

  return (
    <center className="todo-contaisner">
      <h1 className="heading">TODO App</h1>
      <AddTodo onNewItem={handleNewItems} />
      {todoItems.length === 0 && <Message></Message>}
      <div className="items-container">
        <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </center>
  );
}

export default App;
