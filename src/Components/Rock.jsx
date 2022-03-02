import React from "react";
import imageRock from "../../images/icon-rock.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Rock() {

  const handleChoice = () => localStorage.setItem('result', 'rock');

  return (
    
      <Link className={link} to="result" onClick={handleChoice}>
        <DivIntern>
          <img
            src={imageRock}
            style={{
              height: "80px",
              width: "80px",
            }}
          />
        </DivIntern>
      </Link>
    
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
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border-width: 10px;
  border-style: solid;
  border-color: red;
  background-color: whitesmoke;
`;
