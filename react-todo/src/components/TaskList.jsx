import EachTask from "./EachTask";

const TaskList = ({taskList, handleToggleComplete, handleEditTask, handleDeleteOne, updatedTaskName, setUpdatedTaskName, handleUpdateTask, editTaskId}) => {
  return (
    <div className="flex flex-col gap-4">
      {taskList.length > 0 &&
        taskList.map((eachTask) => (
          <EachTask  
          key={eachTask.id}
          eachTask={eachTask} 
          isEditing={editTaskId === eachTask.id && !eachTask.completed}
          handleToggleComplete={handleToggleComplete} 
          handleEditTask={handleEditTask} 
          handleDeleteOne={handleDeleteOne}
          updatedTaskName={updatedTaskName}
          setUpdatedTaskName={setUpdatedTaskName}
          handleUpdateTask={handleUpdateTask}
          />
        ))}
    </div>
  );
};

export default TaskList;
