import React from 'react'

export default function DoneList({item , index , UndoRemove}) {

    function SendId(){
        UndoRemove(index);
    }
  return (
    <div>
        
        <div className="flex gap-2">
          <input type="checkbox" id={index}  onClick={SendId} checked/>
          <label >{item}</label>
        </div>
    </div>
  )
}
