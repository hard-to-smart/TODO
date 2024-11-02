import { useState } from "react";
import { taskProp } from "../Types";
import TaskList from "../components/TaskList";
import Input from "../components/Input";

const Todo = () => {
  const [taskList, setTaskList] = useState<taskProp[]>([]);
  const [inputData, setInputData] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [editingId, setEditingId] = useState<number|null>(null);
  const handleAddTask = (inputData: string) => {
    const setTaskListData: taskProp = {
      id: Date.now(),
      name: inputData,
      isCompleted: false,
    };
    setTaskList((prev) => [...prev, setTaskListData]);
  };

  const handleUpdate = (id: number ) =>{
    taskList.map((el)=> el.id === id ? setInputData(el.name) : setInputData(''));
    setIsUpdating(!isUpdating)
    setEditingId(id);
  }
  return (
    <>
      <Input handleAddTask={handleAddTask} inputData={inputData} setInputData={setInputData} isUpdating={isUpdating} setTaskList={setTaskList} editingId= {editingId}/>
      <TaskList taskList={taskList} setTaskList={setTaskList} handleUpdate={handleUpdate}/>
    </>
  );
};

export default Todo;
