import React, { useState } from "react";

export default function Form({ Cancel, data, setData }) {
  const [Todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function HandleSave() {
    if (Todo.length > 1) {
      let temp = [...data, Todo];
      setData(temp);
      setTodo("");
    }
  }

  return (
    <div className="space-y-3 border p-4 rounded-md shadow-md">
      <h1>Create a todo</h1>
      <input
        type="text"
        placeholder="Write an Todo for u"
        onChange={handleChange}
        value={Todo}
        className="px-6 py-1 border "
      />
      <div className="flex gap-3 ">
        <button
          className="px-4 py-1 bg-yellow-500 rounded-md"
          onClick={HandleSave}
        >
          Save
        </button>
        <button className="px-4 py-1 border rounded-md" onClick={Cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
