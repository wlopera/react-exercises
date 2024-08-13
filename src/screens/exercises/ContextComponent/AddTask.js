import styled from "styled-components";
import { useTasksDispatch } from "./TaskContext";
import { useState } from "react";
import { v4 as uuid4 } from "uuid";

export const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  const handleAddedTask = () => {
    if (text.length === 0) {
      return;
    }
    dispatch({
      id: uuid4(),
      text,
      selected: false,
      type: "added",
    });
    setText("");
  };

  return (
    <Container>
      <InputText
        type={text}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ButtonContainer>
        <Button onClick={handleAddedTask}>Agregar</Button>
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

const InputText = styled.input`
  flex: 0 0 35.8%; /* Ancho fijo del 50% */
  text-align: left; /* Alinea el texto a la izquierda */
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 0 0 10%; /* Ancho fijo del 10% */
  padding-left: 20px;
  justify-content: space-between; /* Distribuye el espacio entre los botones */
`;

const Button = styled.button`
  width: 6vw;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #28a745;
  color: #fff;
  font-size: 14px;

  &:hover {
    background-color: #2ecc71;
  }
`;
