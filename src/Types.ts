import React, { Dispatch } from "react";

type taskProp = {
    id: number;
    name: string;
    isCompleted: boolean;
}

interface CollectiveListProp{
    taskList: taskProp[];
    setTaskList : Dispatch<React.SetStateAction<taskProp[]>>
    handleUpdate: (id: number)=> void
}

interface sendListProp {
    handleAddTask : (inputData: string,) => void;
    inputData: string;
    setInputData: Dispatch<React.SetStateAction<string>>;
    isUpdating: boolean
    setTaskList : Dispatch<React.SetStateAction<taskProp[]>>;
    editingId : number | null
}


export type { CollectiveListProp,  sendListProp , taskProp}