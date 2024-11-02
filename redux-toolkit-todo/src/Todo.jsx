import React from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

const Todo = () => {
  return (
   <div className='container'>
    <h2 className='todo-header'>Todo App</h2>
   <TaskInput/>
   <TaskList/>
   </div>
  )
}

export default Todo