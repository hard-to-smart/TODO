import React from "react";
import { CollectiveListProp, taskProp } from "../Types";

const TaskList: React.FC<CollectiveListProp> = ({ taskList, setTaskList , handleUpdate}) => {
  const handleComplete = (id: number) => {
    setTaskList((prev)=>
      prev.map((el) =>
        el.id === id ? { ...el, isCompleted: !el.isCompleted } : el
      )
    );
  };

  const handleDelete = (id:number) =>{
    setTaskList((prev)=> prev.filter((el)=> el.id !== id));
  }

  return (
    taskList &&
    taskList.map((el: taskProp) => (
      <div key={el.id} style={{ display: "flex", gap: "10px", padding: "4px" }}>
        <input
          type="checkbox"
          onChange={() => handleComplete(el.id)}
          checked={el.isCompleted}
        />
        <p>{el.name}</p>
        <button onClick={()=> handleUpdate(el.id)}>Update</button>
        <button onClick={()=>handleDelete(el.id)}>Delete</button>
      </div>
    ))
  );
};

export default TaskList;
