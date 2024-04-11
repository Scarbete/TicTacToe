import { Game } from './components/Game/Game'
import classes from './App.module.sass'


export const App = () => {
    return (
        <div className={classes.app}>
            <Game />
        </div>
    )
}