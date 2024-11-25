import React, { useState } from "react";
import { HeaderProcess } from "../../../components/headerProcess/HeaderProcess";
import axios from "axios";

import styled from "styled-components";

const title = "Generar Orden en JobSheduler JS7";
const exercise = "Generar una orden en JS7 - vía WEb Rest Api JS7";

// Configuración de las credenciales y URLs
export const JS7Order = () => {
  const [id, setId] = useState("");
  const [result, setResult] = useState("");

  const getToken = async () => {
    try {
      const loginResponse = await axios.post(
        "http://localhost:3001/js7/login",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const sessionToken = loginResponse.data.accessToken;
      if (!sessionToken) {
        console.error("Error: No se pudo obtener un token de sesión.");
        return null;
      }

      // console.log("[SESSION_TOKEN]:", sessionToken);
      return sessionToken;
    } catch (error) {
      console.error("[Error obtenido el ]:", error.message);
    }
  };

  const sendOrder = async (id) => {
    setResult("");
    try {
      const sessionToken = await getToken();
      console.log("[SESSION_TOKEN]:", sessionToken);

      const response = await axios.post(
        "http://localhost:3001/js7/order",
        { token: sessionToken, transactionId: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("[Respuesta]: ", response);
      setResult(response.data.orderIds[0]);
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un código de error
        console.error("Error en la respuesta:", error.response);
      } else if (error.request) {
        // La solicitud fue realizada, pero no se recibió respuesta
        console.error("Error en la solicitud:", error.request);
      } else {
        // Algo sucedió al configurar la solicitud
        console.error(
          "Error en la configuración de la solicitud:",
          error.message
        );
      }
    }
  };

  const handleTransactionId = (value) => {
    setId(value);
    setResult("");
  };

  return (
    <Container>
      <HeaderProcess title={title} exercise={exercise} />
      <DivRow>
        <label>Número de transacción: </label>
        <Input
          name="id"
          value={id}
          onChange={(e) => handleTransactionId(e.target.value)}
        />
        <Button onClick={() => sendOrder(id)}>Enviar</Button>
      </DivRow>
      {result !== "" && <LabelResponse>Orden generada: {result}</LabelResponse>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  padding-left: 40px;
`;

const Button = styled.button`
  display: flex;
`;

const Input = styled.input`
  display: flex;
`;

const DivRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
`;

const LabelResponse = styled.label`
  font-size: 20px;
  font-weight: bold;
  text-align: justify;
  background-color: lightcyan;
  margin: 20px;
  width: 58%;
`;
