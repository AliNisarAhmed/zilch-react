import React from 'react';
import styled from 'styled-components';

const StyledDie = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  width: 35%;
  height: 35%;
  border-radius: 50%;
  background: black;
`;

export default function Die({ dots }) {
  return (
    <StyledDie>
      {new Array(dots).fill(1).map((elem, i) => (
        <Dot key={i} />
      ))}
    </StyledDie>
  );
}

