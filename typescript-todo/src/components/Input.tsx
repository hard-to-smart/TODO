import { sendListProp } from "../Types";

const Input: React.FC<sendListProp> = ({ handleAddTask , inputData,isUpdating,  setTaskList,setInputData, editingId}) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTask(inputData);
    setInputData("");
  };
  const handleEdit = (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    setTaskList((prev)=>
      prev.map((el)=> editingId === el.id ? {...el, name:inputData} : el ))
    setInputData("");
  }
  return (
    <form onSubmit={isUpdating? handleEdit :handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button type="submit" > {isUpdating? "UPDATE TASK " : "ADD TASK"}</button>
    </form>
  );
};

export default Input;
