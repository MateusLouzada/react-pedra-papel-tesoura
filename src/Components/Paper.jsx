import React from "react";
import imagePaper from "../../images/icon-paper.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Paper() {

  const handleChoice = () => localStorage.setItem('result', 'paper');

  return (
    <Link to="result" onClick={handleChoice}>
      <Div>
        <img
          src={imagePaper}
          style={{
            height: "80px",
            width: "80px",
          }}
        />
      </Div>
    </Link>
  );
}

export default Paper;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border-width: 10px;
  border-style: solid;
  border-color: purple;
  background-color: whitesmoke;
`;
