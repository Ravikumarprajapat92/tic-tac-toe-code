import React, { useState } from 'react';

const Dashboard = () => {
    const [ticTacToe, setTicTacToe] = useState(["", "", "", "", "", "", "", "", "",]);
    const [status, setStatus] = useState(true)
    const [winner, setWinner] = useState()

    const handelClick = (index) => {

        if (!winner) {
            if (!!status && !ticTacToe[index]) {
                ticTacToe[index] = "X"
                setTicTacToe([...ticTacToe])
                setStatus(false);
                console.log(status)

            } else if (!status && !ticTacToe[index]) {
                ticTacToe[index] = "O"
                setTicTacToe([...ticTacToe])
                setStatus(true);
                console.log("o", status)
            }

            checkResult()
        }
    }


    const checkResult = () => {
        let result = ticTacToe;
        console.log(result)

        let winningCases = [
            !!result[0] && result[0] === result[1] && result[1] === result[2],
            !!result[3] && result[3] === result[4] && result[4] === result[5],
            !!result[6] && result[6] === result[7] && result[7] === result[8],
            !!result[0] && result[0] === result[3] && result[3] === result[6],
            !!result[1] && result[1] === result[4] && result[4] === result[7],
            !!result[2] && result[2] === result[5] && result[5] === result[8],
            !!result[0] && result[0] === result[4] && result[4] === result[8],
            !!result[2] && result[2] === result[4] && result[4] === result[6]
        ]


        if (winningCases[0] || winningCases[1] || winningCases[2] || winningCases[3] || winningCases[4] || winningCases[5] || winningCases[6] || winningCases[7] || winningCases[8]) {
            if (!status) {
                setWinner('O is Winner')
            } else {
                setWinner('X is Winner')
            }
        }
    }

    const handeReload = () => {
        window.location.reload()
    }

    return (
        <div className="dashboard container">
            <h1>X --- Tic-tac-toe --- O</h1>
            <h2 className="text-success">{winner}</h2>
            <div className="row text">
                {ticTacToe.map((value, index) => {
                    return (
                        <div className="col-4 mb-3" key={index}>
                            <button onClick={() => handelClick(index)} className="btn btn-block text-light btn-danger">
                                {value}
                            </button>
                        </div>
                    )
                })}
            </div>
            <button onClick={handeReload} className="btn btn-success">Reload</button>
        </div>
    );
}

export default Dashboard;