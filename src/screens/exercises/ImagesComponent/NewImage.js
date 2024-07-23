import React from "react";
import styled from "styled-components";

export const NewImage = ({ url }) => {
  return (
    <div>
      <Img src={url} />
    </div>
  );
};

const Img = styled.img`
  width: 15vw;
  height: 25vh;
  margin: 20px;
`;
