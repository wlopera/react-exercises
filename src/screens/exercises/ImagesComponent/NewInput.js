import React from "react";
import styled from "styled-components";

export const NewInput = ({ name, placeholder }) => {
  return <Input name={name} placeholder={placeholder} />;
};

const Input = styled.input`
  background-color: white;
  color: black;
  width: 10vw;
  height: 4vh;
  border: none;
  border-radius: 5px;
  margin: 5px;
`;
