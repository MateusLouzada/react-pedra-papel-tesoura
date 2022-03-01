import Rock from "../Components/Rock";
import Scissors from "../Components/Scissors";
import Paper from "../Components/Paper";
import styled from "styled-components";
import {useState, useEffect} from "react";

function Result() {
    
    const [computer, setComputer] = useState('');

    const choice = localStorage.getItem("result");

    let resultChoice = <div></div>;
    let computerView = <div></div>;

    if (choice === "rock") resultChoice = <Rock />;
    if (choice === "scissors") resultChoice = <Scissors />
    if (choice === "paper") resultChoice = <Paper />

    if (computer === 'rock') computerView = <Rock />
    if (computer === 'scissors') computerView = <Scissors />
    if (computer === 'paper') computerView = <Paper />

    useEffect(() => {
        setTimeout(() => {
            setComputer('scissors')
        }, 1500);
    })

    return (
        <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
            <DivChoice>
                {resultChoice}
            </DivChoice>
            <div>
                {computerView}
            </div>
        </div>

    )
}

export default Result;

const DivChoice = styled.div`
    display: flex;
    align-self: center;
    justify-content: flex-start;
    margin-left: 20rem;
`