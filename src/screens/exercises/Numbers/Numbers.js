import React, { useEffect, useState } from "react";
import { HeaderProcess } from "../../../components/headerProcess/HeaderProcess";
import styled from "styled-components";
import { Number } from "./Number";
import { NUMBERS } from "../../../data/Data";

const title = "Matrices";
const exercise =
  "Cree una tabla con los números pares son verdes, los impares son amarillos y los primos son rojos.";

const pair = (number) => number === 0 || (number > 3 && number % 2 === 0);

const odd = (number) =>
  number === 1 ||
  (number > 7 && (number % 3 === 0 || number % 5 === 0 || number % 7 === 0));

const getTypeNumber = (number) => {
  const isPair = pair(number);
  const isOdd = odd(number);

  if (!isPair && !isOdd) {
    return {
      value: number,
      color: "red",
      type: "primo",
      bkColor: "#FD5E53",
    };
  }

  if (isPair) {
    return {
      value: number,
      color: "green",
      type: "par",
      bkColor: "#21BF73",
    };
  }

  return {
    value: number,
    color: "yellow",
    type: "impar",
    bkColor: "#FDDB3A",
  };
};

const separateIntoGroups = (inputArr) => {
  const groups = [];
  let currentGroup = [];

  inputArr.forEach((item) => {
    currentGroup.push(item);

    if (currentGroup.length === 8) {
      groups.push([...currentGroup]);
      currentGroup = [];
    }
  });

  return groups;
};

export const Numbers = () => {
  const [data, setData] = useState(null);
  const [record, setRecord] = useState(null);

  useEffect(() => {
    const records = NUMBERS.map((value) => getTypeNumber(value));
    setData(separateIntoGroups(records));
    setRecord(getTypeNumber(0));
  }, []);

  const handleSetValue = (e) => {
    let data = e.target.value;

    if (data === "") {
      data = 0;
    }

    const number = parseInt(data);
    if (number < 0) {
      return 0;
    }

    setRecord(getTypeNumber(number));
    e.target.value = number;
  };

  return (
    <Container>
      <HeaderProcess title={title} exercise={exercise} />
      {data &&
        data.map((record, index) => (
          <DivRow key={index}>
            {record.map((item) => (
              <Number
                key={item.value}
                number={item.value}
                bkColor={item.bkColor}
              />
            ))}
          </DivRow>
        ))}
      {record && (
        <DivForm>
          <Input value={record.value} onChange={handleSetValue} type="number" />
          <DivRow style={{ marginTop: "20px" }}>
            <Number
              number={record.value}
              bkColor={record.bkColor}
              width={`${record.value.length / 10}vw`}
            />
            <DivColumn>
              <ul style={{ alignItems: "center" }}>
                <li>value: {record.value}</li>
                <li>color: {record.color}</li>
                <li>tipo: {record.type}</li>
              </ul>
            </DivColumn>
          </DivRow>
        </DivForm>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-context: center;
  align-items: center;
`;

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const DivForm = styled.div`
  margin-top: 20px;
`;

const Input = styled.input``;
