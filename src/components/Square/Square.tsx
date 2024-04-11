import { FC } from 'react'
import classes from './Square.module.sass'

type Props = {
    value: number | string
    onSquareClick: () => void
}

export const Square: FC<Props> = (props) => {

    const {
        value,
        onSquareClick
    } = props

    return (
        <button className={classes.square} onClick={onSquareClick}>
            {value}
        </button>
    )
}