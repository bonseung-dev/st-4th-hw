import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.active ? "blue" : "gray")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 20px;
`;

function Box({ active, onClick }) {
  return (
    <StyledBox active={active} onClick={onClick}>
      {active ? "Active" : "Box"}
    </StyledBox>
  );
}

export default Box;
