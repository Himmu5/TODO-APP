import React from "react";

export default function ListItem({item , index ,Remove}) {

    function SendId(){
        Remove(index);
    }

  return (
    <div>
      <div className="flex gap-2 ">
        <input type="checkbox" onClick={SendId} id={index} />
        <label >
          {item}
        </label>
      </div>
    </div>
  );
}
