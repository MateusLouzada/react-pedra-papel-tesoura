import React from "react";
import imageRock from "../../images/icon-rock.svg";
import styled from "styled-components";

function Rock() {
  return (     
        <DivIntern>
          <img
            src={imageRock}
            style={{
              height: "80px",
              width: "80px",
            }}
          />
        </DivIntern>   
  );
}

export default Rock;

const link = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DivIntern = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border-width: 17px;
  border-style: solid;
  border-color: red;
  background-color: whitesmoke;
  box-shadow: inset 0px 6px 1em gray ,7px 7px 1em black;
`;
