import { createContext, useContext, useReducer } from "react";
import taskReducer from "./TaskReducer";

// Contexto que controla las tareas
export const TaskContext = createContext(null);

// Contexto que controla la acciones sobre las tareas
export const TaskDispatchContext = createContext(null);

// Funcion que permite acceso al contexto de las tareas
export const useTasks = () => {
  return useContext(TaskContext);
};

// Funcion que permite acceso a la acciones sobre las tareas
export const useTasksDispatch = () => {
  return useContext(TaskDispatchContext);
};

const initTasks = [
  {
    id: 1,
    text: "Levantarse temprano 5:00 am",
    selected: true,
  },
  {
    id: 2,
    text: "Desayunar a las 6:00 am",
    selected: false,
  },
  {
    id: 3,
    text: "Salir al trabajo 7:30 am",
    selected: false,
  },
];

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};
