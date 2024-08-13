import React from "react";
import styled from "styled-components";

export const ChildrenComponent = ({ name, surname }) => {
  // Solo se actualiza la primera vez luego ya no renderiza aunque cambie el name y el surname
  //const [fullName, setFullName] = useState(name + " " + surname);

  // const [fullName, setFullName] = useState('');
  // useEffect(() => {
  //   setFullName(name + " " + surname);
  // }, [name, surname]);

  const fullName = name + " " + surname;

  console.log("Cambio: ", fullName);

  return (
    <Container>
      <DivContainer>
        <P>{fullName.toUpperCase()}</P>
      </DivContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-context: center;
  align-items: center;
  padding-bottom: 20px;
`;

const DivContainer = styled.div`
  background-color: #f4f6f6;
  align-items: center;
  width: 30vw;
`;

const P = styled.p`
  font-size: 28px;
  font-weight: bold;
`;
