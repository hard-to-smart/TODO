import React from 'react'
import SingleTask from './SingleTask'
import { useSelector } from 'react-redux';
import { selectorTodo } from '../store/TodoSlice';

const TaskList = () => {
  const todos = useSelector(selectorTodo);
  return (
    <ul>
      { todos?.map((todo)=>{
        return <SingleTask key={todo.id} {...todo}/>
      })
      }
    </ul>
  )
}

export default TaskList