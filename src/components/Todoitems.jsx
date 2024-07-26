import React from "react";
import TodoItem from "./TodoItem";

const Todoitems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      {todoItems.map((item) => (
        <div key={item.name}>
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          />
        </div>
      ))}
    </>
  );
};

export default Todoitems;
