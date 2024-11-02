// import { useState } from "react";

// interface typeTodoFunction {
//   handleDisplayTask: (inputData: string) => void;
// }

// export const Input: React.FC<typeTodoFunction> = ({ handleDisplayTask }) => {
//   const [inputData, setInputData] = useState("");
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputData(e.target.value);
//   };
//   return (
//     <form
//       className="w-full max-w-sm min-w-[200px] flex flex-row gap-4"
//       onSubmit={() => handleDisplayTask(inputData)}
//     >
//       <input
//         id="task"
//         className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
//         placeholder="Task Name"
//         value={inputData}
//         onChange={handleInputChange}
//       />
//       <button
//         type="button"
//         className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800`}
//       >
//         Input
//       </button>
//     </form>
//   );
// };


// import { TaskListProps } from "../Types"
// import { CollectiveListProp, taskProp } from "../Types";



// const TaskList: React.FC<CollectiveListProp> = ({ taskList }) => {
//   console.log(taskList)
//   return (
//     taskList && taskList.map((el: taskProp) => <p key={el.id}>{el.name}</p>)
//   );
// };

// export default TaskList;
// 
// import { useState } from "react";
// import { Input } from "../components/Input";
// import TaskList from "../components/TaskList";
// import { taskProp } from "../Types";
// 
// 
// 
// const Todo = () => {
//   const [taskList, setTaskList] = useState<taskProp[]>([]);
// 
//   const handleDisplayTask = (inputData: string) => {
//     const setTaskListData: taskProp = {
//       id: Date.now(),
//       name: inputData,
//       isCompleted: false,
//     };
//     setTaskList((prev) => [...prev, setTaskListData]);
//   };
// 
//   console.log(handleDisplayTask);
//   return (
//     <>
      {/* <Input handleDisplayTask={handleDisplayTask} /> */}
      {/* <TaskList taskList={taskList} /> */}
    {/* </> */}
//   );
// };
// 
// export default Todo;
