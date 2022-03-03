import React from 'react'
import styled from 'styled-components'

function Score() {
    const score = sessionStorage.getItem('score');

    if(score === null) sessionStorage.setItem('score', '0');

    return (
        <Div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src="../../images/logo.svg" alt="" />
            </div>
            <div style={{
                display:'flex',
                flexWrap: 'wrap', 
                justifyContent: 'center',
                height: '90%',width: '15%',
                backgroundColor: 'whitesmoke',
                color: 'hsl(214, 47%, 23%)', 
                fontSize: '2rem',
                borderRadius: '15px',
                padding: '0.8rem 0'
                }}>
                <div>
                    Placar
                </div>
                <div style={{display:'flex' ,justifyContent: 'center' ,width: '100%' ,fontSize: '4rem'}}>
                    {score}
                </div>
            </div>
        </Div>
    )
}

export default Score

const Div = styled.div`
    width: 70%;
    height: 15vh;
    font-size: 3rem;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
    align-items: center;
    border: solid 1px whitesmoke;
    border-radius: 15px;
    color: whitesmoke;
`