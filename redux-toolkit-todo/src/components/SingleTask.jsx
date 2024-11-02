import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTask, deleteTask, editTask, selectorEditId, selectorIsEditing } from "../store/TodoSlice";

const SingleTask = ({ id, task, isCompleted }) => {
  const editId = useSelector(selectorEditId)
  const isEditing = useSelector(selectorIsEditing)
  console.log(isEditing)
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(completeTask(id))}
      />
      <label style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{task}</label>
      {!isCompleted && <i className="fa fa-edit " onClick={()=> dispatch(editTask(id))}/>}
      {id!==editId  && <i className="fa fa-trash "
        onClick={() => dispatch(deleteTask(id))}
      />}
    </li>
  );
};

export default SingleTask;
