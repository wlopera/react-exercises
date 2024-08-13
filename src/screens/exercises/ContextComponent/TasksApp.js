import React from "react";
import { HeaderProcess } from "../../../components/headerProcess/HeaderProcess";
import styled from "styled-components";
import { TaskProvider } from "./TaskContext";
import { TaskList } from "./TaskList";
import { AddTask } from "./AddTask";

const title = "Tareas: UseContext - Reducer";
const description =
  "useContextes un React Hook que te permite leer y suscribirte al contexto de tu componente. Los reductores le permiten consolidar la lógica de actualización de estado de un componente. El contexto le permite pasar información a otros componentes. Puede combinar reductores y contexto para administrar el estado de una pantalla compleja.";
const exercise =
  "Cree un componente funcional que permita agregar, editar y eliminar tareas mediante el uso de createContext, useContext y useReducer";

export const TasksApp = () => {
  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <DivContainer>
        <TaskProvider>
          <AddTask />
          <TaskList />
        </TaskProvider>
      </DivContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-context: center;
  align-items: center;
  width: 95%;
  padding-left: 40px;
`;

const DivContainer = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
