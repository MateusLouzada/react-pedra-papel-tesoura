import Rock from "../Components/Rock";
import Scissors from "../Components/Scissors";
import Paper from "../Components/Paper";
import styled from "styled-components";
import RandomRoller from "react-random-roller";
import { useEffect, useState } from "react";
import Score from "../Components/Score";
import { Link } from "react-router-dom";
import '../styles/style.css';

function Result() {

    const [board, setBoard] = useState('');
    const [playAgain, setPlayAgain] = useState(<div></div>);

    const choice = sessionStorage.getItem("result");
    const choiceComputer = [<Rock />, <Scissors />, <Paper />];


    let resultChoice = <div></div>;

    if (choice === "rock") resultChoice = <Rock />;
    if (choice === "scissors") resultChoice = <Scissors />
    if (choice === "paper") resultChoice = <Paper />

    const computer = <RandomRoller message={" "} fps={7} duration={3000} list={choiceComputer} auto={true} />

    //Função de comparação
    const comparison = (computerChoice) => {
        if (computerChoice === 'rock') {
            if (choice === 'paper') {
                const score = Number(sessionStorage.getItem('score'));
                sessionStorage.setItem('score', String(score + 1));
                return <div>Você Ganhou</div>;
            }
            if (choice === 'scissors') return <div>Você Perdeu</div>;
        }
        if (computerChoice === 'scissors') {
            if (choice === 'rock') {
                const score = Number(sessionStorage.getItem('score'));
                sessionStorage.setItem('score', String(score + 1));
                return <div>Você Ganhou</div>;
            }
            if (choice === 'paper') return <div>Você Perdeu</div>;
        }
        if (computerChoice === 'paper') {
            if (choice === 'scissors') {
                const score = Number(sessionStorage.getItem('score'));
                sessionStorage.setItem('score', String(score + 1));
                return <div>Você Ganhou</div>;
            }
            if (choice === 'rock') return <div>Você Perdeu</div>;
        }
        return <div>Você Empatou</div>;
    }

    //Lógica para pegar a "escolha" do computador.
    useEffect(() => setTimeout(() => {
        //Pegando o src para ser comparado, após ser renderizado.
        const src = document.getElementsByClassName("choice")[0].firstChild.firstChild.firstChild.src;
        //Lógica para definir ganhador
        let computerChoice = '';

        if (src.includes('rock')) computerChoice = 'rock';
        if (src.includes('scissors')) computerChoice = 'scissors';
        if (src.includes('paper')) computerChoice = 'paper';

        setBoard(comparison(computerChoice))

        setPlayAgain(<Link to='/'><button className="button-play-again">Jogar Novamente</button></Link>)

    }, 3100), [])


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
                <Score />

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '60%',
                    height: '60vh'
                }}>
                    <div>
                        {resultChoice}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '20%',
                        width: '1366px',
                        color: 'whitesmoke',
                        fontSize: '3rem',
                        fontWeight: 'bolder'
                    }}>
                        <div style={{
                            width: '100%', 
                            display: 'flex', 
                            justifyContent: 'center' 
                            }}>
                            {board}
                        </div>
                        <div>
                            {playAgain}
                        </div>
                    </div>
                    <div className="choice">
                        {computer}
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Result;

const Div = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height: 100vh;
  width: 100vw;
`;