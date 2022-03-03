import React from "react";
import imagePaper from "../../images/icon-paper.svg";
import styled from "styled-components";

function Paper() {
  return (
      <Div>
        <img
          src={imagePaper}
          style={{
            height: "80px",
            width: "80px",
          }}
        />
      </Div>
  );
}

export default Paper;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-width: 17px;
  border-style: solid;
  border-color: purple;
  background-color: whitesmoke;
  box-shadow: inset 0px 6px 1em gray ,7px 7px 1em black;
`;
