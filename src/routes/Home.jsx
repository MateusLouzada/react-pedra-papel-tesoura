import styled from "styled-components";
import Score from "../Components/Score";
import Rock from "../Components/Rock";
import Scissors from "../Components/Scissors";
import Paper from "../Components/Paper";
import { Link } from "react-router-dom";
import '../styles/style.css';
function Home() {

  //Setando a escolha no sessionStorage, sem back-end
  const handleRock = () => sessionStorage.setItem('result', 'rock');
  const handleScissors = () => sessionStorage.setItem('result', 'scissors');
  const handlePaper = () => sessionStorage.setItem('result', 'paper');

  return (
    <Div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1366px',
        height: '100vh'
        }}>
        <ScoreDiv>
          <Score />
        </ScoreDiv>
        <InternDiv>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Link className='animate' to="result" onClick={handleRock}>
              <Rock />
            </Link>
          </div>
          <Link className='animate' to="result" onClick={handleScissors}>
            <Scissors />
          </Link>
          <Link className='animate' to="result" onClick={handlePaper}>
            <Paper />
          </Link>
        </InternDiv>
      </div>
    </Div>
  )
}

export default Home


const Div = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 100vh;
  width: 100vw;
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
  height: 51vh;
`;