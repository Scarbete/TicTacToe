import {FC, useEffect, useState} from 'react'
import {calculateWinner} from '../../utils/calculateWinner'
import {Square} from '../Square/Square'
import {SquareIndex, SquareKey} from '../../types/game'
import classes from './Board.module.sass'

type Props = {
    xIsNext: any
    squares: any
    onPlay: any
}

export const Board: FC<Props> = (props) => {

    const {
        xIsNext,
        squares,
        onPlay
    } = props

    const handleClick = (i: any) => {
        if (calculateWinner(squares) || squares[i]) return
        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = 'X'
        }
        else {
            nextSquares[i] = 'O'
        }
        onPlay && onPlay(nextSquares)
    }

    const winner = calculateWinner(squares)

    const [status, setStatus] = useState<string>()

    useEffect(() => {
        if (winner) {
            setStatus(`Winner ${winner}`)
            alert(`Winner ${winner}`)
        }
        else {
            setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`)
        }
    }, [winner])

    return (
        <>
            <div className={classes.status}>{status}</div>
            <div className={classes.boardList}>
                {squares.map((_item: SquareKey, index: SquareIndex) =>
                    <Square
                        key={index}
                        value={squares[index]}
                        onSquareClick={() => handleClick(index)}
                    />
                )}
            </div>
        </>
    )
}