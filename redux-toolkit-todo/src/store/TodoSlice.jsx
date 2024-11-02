import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  // name: 'todoapp',
  name: "todo",
  initialState: {
    input: "",
    todos: [],
    isEditing: false,
    editId: null,
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },

    addTask: (state, action) => {
      if (!state.input.trim()) return;
      state.todos = [
        ...state.todos,
        {
          id: Date.now(),
          task: state.input,
          isCompleted: false,
        },
      ];
      state.input = "";
    },

    deleteTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTask: (state, action) => {
      const tasktodisplay = state.todos.find(
        (todo) => todo.id === action.payload
      );
      (state.input = tasktodisplay.task),
        (state.editId = action.payload),
        (state.isEditing = true);
    },

    updateTask: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === state.editId) {
          return { ...todo, task: state.input };
        }
        return todo;
      });
      (state.editId = null), (state.isEditing = false);
      state.input = "";
    },

    completeTask: (state, action) => {
      (state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })),
        (state.isEditing = false),
        (state.editId = null),      
        (state.input = "");
    },
  },
});

export const {
  setInput,
  addTask,
  deleteTask,
  completeTask,
  editTask,
  updateTask,
} = TodoSlice.actions;
export const selectorInput = (state) => {
  return state.todo.input;
};
export const selectorTodo = (state) => {
  return state.todo.todos;
};
export const selectorEditId = (state) => {
  return state.todo.editId;
};
export const selectorIsEditing = (state) => {
  return state.todo.isEditing;
};
export default TodoSlice.reducer;
