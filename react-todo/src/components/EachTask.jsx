import { FaPencilAlt } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const EachTask = ({
  eachTask,
  isEditing ,
  handleToggleComplete,
  handleEditTask,
  handleDeleteOne,
  updatedTaskName,
  setUpdatedTaskName,
  handleUpdateTask,
  editTaskId,
}) => {
  return (
    <div className="flex flex-row gap-4 ">
      <input
        type="checkbox"
        value={eachTask.completed}
        onClick={() => {
          handleToggleComplete(eachTask.id);
        }}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTaskName}
            className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow 
            ${eachTask.completed ? "bg-slate-300 line-through" : ""}`}
            onChange={(e) => setUpdatedTaskName(e.target.value)}
          />
          <button>
            <TiTick
              onClick={() => handleUpdateTask(eachTask.id, updatedTaskName)}
            />
          </button>
        </>
      ) : (
        <>
          <p
            className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${
              eachTask.completed ? "bg-gray-300 line-through" : ""
            }`}
          >
            {eachTask.name}
          </p>
          <button>
            {!eachTask.completed && (
              <FaPencilAlt
                onClick={() => handleEditTask((editTaskId = eachTask.id))}
              />
            )}
          </button>
        </>
      )}

      <button>
        <IoTrashBin onClick={() => handleDeleteOne(eachTask.id)} />
      </button>
    </div>
  );
};

export default EachTask;
