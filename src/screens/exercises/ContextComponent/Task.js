import { useState } from "react";
import styled from "styled-components";
import { useTasksDispatch } from "./TaskContext";

export const Task = ({ id, text, selected }) => {
  const [editable, setEditable] = useState(false);

  const dispatch = useTasksDispatch();

  const handleChangeCheckedTask = (checked) => {
    dispatch({
      id,
      text,
      selected: checked,
      type: "modify",
    });
  };

  const handleDeleteTask = () => {
    dispatch({
      id,
      type: "delete",
    });
  };

  const textContext = () => {
    return editable ? (
      <>
        <InputText
          type={text}
          value={text}
          onChange={(e) => {
            dispatch({
              id,
              text: e.target.value,
              selected,
              type: "modify",
            });
          }}
        />
        <ButtonContainer>
          <Button onClick={() => setEditable(false)}>Salvar</Button>
        </ButtonContainer>
      </>
    ) : (
      <>
        <TaskText>{text}</TaskText>
        <ButtonContainer>
          <Button onClick={() => setEditable(true)}>Editar</Button>
        </ButtonContainer>
      </>
    );
  };

  return (
    <Container>
      <InputChecked
        checked={selected}
        type="checkbox"
        onChange={(e) => handleChangeCheckedTask(e.target.checked)}
      />
      {textContext()}
      <ButtonContainer>
        <Button onClick={handleDeleteTask}>Eliminar</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center; /* Centra verticalmente los elementos */
  padding: 10px;
  border-bottom: 1px solid #ddd; /* Línea divisoria entre elementos */
`;

const InputChecked = styled.input`
  flex: 0 0 10%; /* Ancho fijo del 10% */
  text-align: left; /* Alinea el texto a la izquierda */
  height: 2vh;
  width: 2vw;
`;

const InputText = styled.input`
  flex: 0 0 80%; /* Ancho fijo del 50% */
  text-align: left; /* Alinea el texto a la izquierda */
  font-size: 20px;
`;

const TaskText = styled.div`
  flex: 0 0 80%; /* Ancho fijo del 50% */
  text-align: left; /* Alinea el texto a la izquierda */
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 0 0 10%; /* Ancho fijo del 20% */
  padding-left: 10px;
  justify-content: space-between; /* Distribuye el espacio entre los botones */
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;
