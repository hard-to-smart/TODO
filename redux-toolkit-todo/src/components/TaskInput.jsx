import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, selectorEditId, selectorInput, selectorTodo, setInput, updateTask } from '../store/TodoSlice'

const TaskInput = () => {
  const input = useSelector(selectorInput); 
  const todos = useSelector(selectorTodo);
  const editId = useSelector(selectorEditId);
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting with input:", input, "EditId:", editId);  // Debugging

    if (editId) {
        console.log("update task called")
        dispatch(updateTask());  
    } else {
        console.log("add task called")
        dispatch(addTask());
    }
};
  return (
    <form className='todo-body' onSubmit={handleFormSubmit}>
        <input type='text' placeholder='Enter Task' value={input} onChange={(e)=> dispatch(setInput(e.target.value))} autoFocus/>
        <button type='submit'> + </button>
    </form>
  )
}

export default TaskInput