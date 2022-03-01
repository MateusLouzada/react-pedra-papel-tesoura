import React from "react";
import imageScissors from "../../images/icon-scissors.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Scissors() {

  const handleChoice = () => localStorage.setItem('result', 'scissors');


  return (
    <Link to="result" onClick={handleChoice}>
      <Div>
        <img
          src={imageScissors}
          style={{
            height: "80px",
            width: "80px",
          }}
        />
      </Div>
    </Link>
  );
}

export default Scissors;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border-width: 10px;
  border-style: solid;
  border-color: yellow;
  background-color: whitesmoke;
`;
