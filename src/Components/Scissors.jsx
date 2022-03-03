import React from "react";
import imageScissors from "../../images/icon-scissors.svg";
import styled from "styled-components";

function Scissors() {
  return (
      <Div>
        <img
          src={imageScissors}
          style={{
            height: "80px",
            width: "80px",
          }}
        />
      </Div>
  );
}

export default Scissors;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-width: 17px;
  border-style: solid;
  border-color: yellow;
  background-color: whitesmoke;
  box-shadow: inset 0px 6px 1em gray ,7px 7px 1em black;
`;
