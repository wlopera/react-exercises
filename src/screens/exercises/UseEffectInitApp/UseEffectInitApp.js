import React, { useEffect, useState } from "react";
import { HeaderProcess } from "../../../components/headerProcess/HeaderProcess";
import styled from "styled-components";

const title = "Inicializando la aplicación";
const description =
  "Algunas lógicas solo deberían ejecutarse una vez cuando se carga la aplicación. Podrías tener la tentación de colocarlo en un Efecto en el componente de nivel superior. Sin embargo, pronto descubrirá que se ejecuta dos veces durante el desarrollo.App Esto puede causar problemas; por ejemplo, tal vez invalide el token de autenticación porque la función no fue diseñada para ser llamada dos veces. En general, sus componentes deberían ser resistentes a ser montados nuevamente. Esto incluye su componente de nivel superior.";
const exercise =
  "Cree un APP que carga inicialmente una data. Evitar el llamado inical sea dos veces por el uso de useEffect";

export const UseEffectInitApp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setData([
          { id: 1, name: "Java", language: "Desarrollo Backend" },
          { id: 2, name: "React", language: "Desarrollo Frontend" },
          { id: 3, name: "C++", language: "Desarrollo Backend" },
          { id: 4, name: "Angular", language: "Desarrollo Frontend" },
          { id: 5, name: "Python", language: "Desarrollo Backend" },
          { id: 6, name: "JavaScript", language: "Desarrollo Frontend" },
        ]);
      }, 2000);
    };

    fetchData();
  }, []);

  console.log("Data: ", data);
  return (
    <Container>
      <HeaderProcess
        title={title}
        description={description}
        exercise={exercise}
      />
      <p style={{ textAlign: "justify", fontSize: "20px" }}>
        Aunque es posible que nunca se vuelva a montar en la práctica en
        producción, seguir las mismas restricciones en todos los componentes
        facilita el traslado y la reutilización del código. Si alguna lógica
        debe ejecutarse una vez por cada carga de aplicación en lugar de una vez
        por cada montaje de componente , agregue una variable de nivel superior
        para realizar un seguimiento de si ya se ha ejecutado
      </p>
      <DivContainer>
        {data.length === 0 ? (
          <p style={{ fontSize: "30px", padding: "20px" }}>Cargando...</p>
        ) : (
          <ul>
            {data &&
              data.map((item) => (
                <ListItem key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.language}</span>
                </ListItem>
              ))}
          </ul>
        )}
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
  border: 1px solid grey;
  border-radius: 10px;
`;

const ListItem = styled.li`
  display: flex;
  font-size: 30px;
  text-align: left;
  width: 35vw;
  span {
    flex: 1;
  }
`;
