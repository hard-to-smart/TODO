import React from "react";

const Input = ({task, setTask, handleDisplayTask}) => {
  return (
    <div className="w-full max-w-sm min-w-[200px] flex flex-row gap-4">
      <input
        id="task"
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="button"
        className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800`}
        disabled={task === ""}
        onClick={() => handleDisplayTask(task)}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
