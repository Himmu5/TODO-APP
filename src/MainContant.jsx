import React, { useEffect, useState } from "react";
import Button from "./Button";
import Form from "./Form";
import NothingTodo from "./NothingTodo";
import ListItem from "./ListItem";
import DoneList from "./DoneList";

export default function MainContant() {
  const [form, setform] = useState(false);

  let localdata = JSON.parse(localStorage.getItem("my-todo") || "[]");
  let done = JSON.parse(localStorage.getItem("DoneList") || "[]");

  const [mainTodo, setMainTodo] = useState(localdata);
  localStorage.setItem("my-todo", JSON.stringify(mainTodo));

  let doneL = JSON.parse(localStorage.getItem("doneList") || "[]");
  const [doneList, setDoneList] = useState(doneL);

  function Remove(id) {
    console.log("Remove function is running ....", id);
    const temp = [...doneList];
    temp.push(mainTodo[id]);
    setDoneList(temp);
    const temp2 = [...mainTodo];
    temp2.splice(id , 1) ;
    setMainTodo(temp2);
  }

  function UndoRemove(id){
    console.log("UndoRemove function is running ....", id);
    const temp = [...mainTodo];
    temp.push(doneList[id]);
    setMainTodo(temp);
    const temp2 = [...doneList];
    temp2.splice(id,1) ;
    setDoneList(temp2);
  }

  localStorage.setItem("doneList", JSON.stringify(doneList));

  function handleClick() {
    setform(!form);
  }
  return (
    <div className="mx-5 my-10">
      <h1 className="text-3xl font-bold ">Things to get done</h1>

      <div className="mt-5 space-y-3">
        <h2 className="text-md">Things to do</h2>

        {mainTodo.length > 0 ? (
          mainTodo.map((item, index) => {
            return <ListItem key={index} item={item} index={index} Remove={Remove} />;
          })
        ) : (
          <NothingTodo />
        )}

        {form ? (
          <Form Cancel={handleClick} data={mainTodo} setData={setMainTodo} />
        ) : (
          <Button onClick={handleClick} />
        )}

        <h2 className="text-md">Things done</h2>

        {doneList.length > 0 ? (
          doneList.map(function (item, index) {
            return <DoneList key={index} item={item} index={index} UndoRemove={UndoRemove}/>;
          })
        ) : (
          <NothingTodo />
        )}
      </div>
    </div>
  );
}
