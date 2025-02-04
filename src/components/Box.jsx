import React from "react";
import styled from "styled-components";

// StyledBox라는 스타일을 가진 컴포넌트를 만듭니다.
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.active ? "blue" : "gray"}; // active가 true면 파란색, 아니면 회색
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
