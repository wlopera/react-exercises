import React, { useState } from "react";
import { HeaderProcess } from "../../../components/headerProcess/HeaderProcess";
import styled from "styled-components";
import { ChildrenComponent } from "./ChildrenComponent";

const title =
  "Actualización del estado en función de los accesorios o el estado";
const description =
  "Los efectos son una vía de escape del paradigma React. Te permiten 'salir' de React y sincronizar tus componentes con algún sistema externo, como un widget que no sea React, una red o el DOM del navegador. Si no hay un sistema externo involucrado (por ejemplo, si quieres actualizar el estado de un componente cuando cambian algunas propiedades o el estado), no deberías necesitar un efecto. Eliminar los efectos innecesarios hará que tu código sea más fácil de seguir, más rápido de ejecutar y menos propenso a errores.";
const exercise =
  "Supongamos que tiene un componente con dos variables de estado: firstName y lastName. Quiere calcular fullName a partir de ellas concatenándolas. Además, le gustaría que fullName se actualice siempre que firstName o lastName cambie. Su primer instinto podría ser agregar una variable de estado fullName y actualizarla en un efecto.";

export const ParentComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <p style={{ textAlign: "justify", fontSize: "20px" }}>
        Cuando algo se puede calcular a partir de las propiedades o el estado
        existentes, no lo coloques en el estado. En su lugar, calcule durante la
        renderización. Esto hace que su código sea más rápido (evita las
        actualizaciones "en cascada" adicionales), más simple (elimina parte del
        código) y menos propenso a errores (evita errores causados ​​por
        diferentes variables de estado que se desincronizan entre sí). Si este
        enfoque le parece nuevo, Thinking in React explica qué debe incluirse en
        el estado.
      </p>
      <DivContainer>
        <DivInput>
          <P>
            Nombre:{" "}
            <Input
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </P>
        </DivInput>
        <DivInput>
          <P>
            Apellido:{" "}
            <Input
              name="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </P>
        </DivInput>

        <ChildrenComponent name={firstName} surname={lastName} />
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
  background-color: #a3e4d7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  border: 1px solid grey;
  border-radius: 10px;
`;

const DivInput = styled.div`
  background-color: #a3e4d7;
  flex-direction: row;
  align-items: center;
`;

const P = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 20px;
`;
