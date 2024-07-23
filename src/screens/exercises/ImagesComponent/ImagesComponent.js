import React from "react";
import { HeaderProcess } from "../../../components/headerProcess/HeaderProcess";
import styled from "styled-components";
import { NewImage } from "./NewImage";
import htmlLogo from "./images/html_logo.png";
import cssLogo from "./images/css_logo.png";
import jsLogo from "./images/js_logo.png";
import reactLogo from "./images/react_logo.png";
import { NewInput } from "./NewInput";

const title = "Componentes";
const exercise =
  "Cree un componente funcional que muestre algunas imágenes y un Formulario con tres entradas de textos y un boton de envío";

export const ImagesComponent = () => {
  const printData = (e) => {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    alert(
      JSON.stringify({
        nombre: firstname,
        apellido: lastname,
        correo: email,
      })
    );
  };

  return (
    <Container>
      <HeaderProcess title={title} exercise={exercise} />
      <DivContainer>
        <h2 style={{ paddingBottom: "30px" }}>Tecnologias Actuales</h2>
        <DivImage>
          <NewImage url={htmlLogo} />
          <NewImage url={cssLogo} />
          <NewImage url={jsLogo} />
          <NewImage url={reactLogo} />
        </DivImage>
      </DivContainer>
      <Form onSubmit={printData}>
        <P1>SUSCRIBETE</P1>
        <P2>
          Regístrese con su dirección de correo electrónico para recibir
          noticias y actualizaciones.
        </P2>
        <DivInputs>
          <NewInput name="firstname" placeholder="Nombre" />
          <NewInput name="lastname" placeholder="Apellido" />
          <NewInput name="email" placeholder="correo" />
        </DivInputs>
        <Button>Suscribirse</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-context: center;
  align-items: center;
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

const DivImage = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

const Form = styled.form`
  margin-top: 30px;
  background-color: #a3e4d7;
  border-radius: 10px;
  width: 98%;
  border: 1px solid grey;
`;
const P1 = styled.p`
  font-size: 25px;
  font-weight: 700;
`;
const P2 = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const DivInputs = styled.div`
  flex-direction: rows;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: #f37474;
  width: 18vw;
  height: 4vh;
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;
  text-align: center;
  color: white;
`;
