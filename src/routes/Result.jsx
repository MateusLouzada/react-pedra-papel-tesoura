import Rock from "../Components/Rock";
import Scissors from "../Components/Scissors";
import Paper from "../Components/Paper";
import styled from "styled-components";
import RandomRoller from "react-random-roller";
import { useEffect, useState } from "react";

function Result() {

    const [board, setBoard] = useState('');

    const choice = localStorage.getItem("result");
    const choiceComputer = [<Rock />, <Scissors />, <Paper />];


    let resultChoice = <div></div>;

    if (choice === "rock") resultChoice = <Rock />;
    if (choice === "scissors") resultChoice = <Scissors />
    if (choice === "paper") resultChoice = <Paper />

    const computer = <RandomRoller message={" "} fps={7} duration={3000} list={choiceComputer} auto={true} />

    //Função de comparação
    const comparison = (computerChoice) => {
        if (computerChoice === 'rock') {
            if (choice === 'paper') return <div>Você Ganhou</div>;
            if (choice === 'scissors') return <div>Você Perdeu</div>;
        }
        if (computerChoice === 'scissors') {
            if (choice === 'rock') return <div>Você Ganhou</div>;
            if (choice === 'paper') return <div>Você Perdeu</div>;
        }
        if (computerChoice === 'paper') {
            if (choice === 'scissors') return <div>Você Ganhou</div>;
            if (choice === 'rock') return <div>Você Perdeu</div>;
        }
        return <div>Você Empatou</div>;
    }

    //Lógica para pegar a "escolha" do computador.
    useEffect(() => setTimeout(() => {
        //Pegando o src para ser comparado, após ser renderizado.
        const src = document.getElementsByClassName("choice")[0].firstChild.firstChild.firstChild.firstChild.src;
        //Lógica para definir ganhador
        let computerChoice = '';

        if (src.includes('rock')) computerChoice = 'rock';
        if (src.includes('scissors')) computerChoice = 'scissors';
        if (src.includes('paper')) computerChoice = 'paper';

        setBoard(comparison(computerChoice))


    }, 3100), [])


    return (
        <Div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '20vh', color: "whitesmoke"}}>
                {board}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', width: '100vw', height: '35vh' }}>
                <div>
                    {resultChoice}
                </div>
                <div className="choice">
                    {computer}
                </div>
            </div>
        </Div>
    )
}

export default Result;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 100vh;
  width: 100vw;
`;