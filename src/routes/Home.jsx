import styled from "styled-components";
import Score from "../Components/Score";
import Rock from "../Components/Rock";
import Scissors from "../Components/Scissors";
import Paper from "../Components/Paper";

function Home() {
    return (
        <Div>
          <ScoreDiv>
            <Score/>
          </ScoreDiv>
          <InternDiv>
            <Rock/>
            <Scissors/>
            <Paper />
          </InternDiv>
        </Div>
    )
}

export default Home


const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const ScoreDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: whitesmoke;
`;

const InternDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  margin-bottom: 4rem;
  justify-content: space-around;
  width: 50vw;
  height: 60vh;
`;