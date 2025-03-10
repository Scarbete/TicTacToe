import {useState} from 'react'
import {Squares} from '../../types/game'
import {Board} from '../Board/Board'
import classes from './Game.module.sass'


export const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]

    const handlePlay = (nextSquares: Squares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    const jumpTo = (nextMove: number) => {
        setCurrentMove(nextMove)
    }

    const moves = history.map((_squares, move) => {
        let description

        if (move > 0) {
            description = 'Go to move #' + move
        }
        else {
            description = 'Go to game start'
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>
                    {description}
                </button>
            </li>
        )
    })

    return (
        <div className={classes.game}>
            <div className='game-board'>
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className={classes.gameInfo}>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

