import styled from "styled-components";
import { useTasks } from "./TaskContext";
import { Task } from "./Task";

export const TaskList = () => {
  const tasks = useTasks();

  return (
    <TaskContainer>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </TaskContainer>
  );
};

const TaskContainer = styled.div`
  width: 40%; /* Ajusta el ancho del contenedor */
`;
