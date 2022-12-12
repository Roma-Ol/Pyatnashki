import {useEffect, useState} from "react";
import { useStopwatch } from "react-timer-hook";
import Confetti from 'react-confetti'

import Playboard from "./components/Playboard/Playboard";
import Stats from "./components/Stats/Stats";
import useKeyDown from "./hooks/useKeyDown";
import {useShuffle} from "./hooks/useShuffle";

const Pyatnashki = () =>{
    const [order, setOrder] = useState(['','1','2','3','4','5','6','7','8','9','10','11','12','13','14', '15'])
    const [movesCount, setMovesCount] = useState(0);
    const [gameWon, setGameWon] = useState(false);
    const { shuffleOrder } = useShuffle(order, setOrder);
    const { seconds, minutes, hours, start } = useStopwatch({ autoStart: false });
    const victoryPattern = ['','1','2','3','4','5','6','7','8','9','10','11','12','13','14', '15']

    useKeyDown(order, start, setOrder, setMovesCount, shuffleOrder);

    useEffect(() => {
        if (movesCount > 0 && order.every((value, index) => value === victoryPattern[index])) {
            setGameWon(true)
        }
    }, [order]);

    return (

        <div className='pyatnashki'>
            { gameWon &&
                <div>
                    <Confetti width={ window.innerWidth } height={ window.innerHeight } />
                    <div>Game won, congrats</div>
                    <button onClick={ () => { setMovesCount(0); shuffleOrder(); setGameWon(false)} }>Play Again</button>
                </div>
            }

            <div>
                <p>Attention!</p>
                <p>Shame zone</p>
                <button onClick={ () => setOrder(['','1','2','3','4','5','6','7','8','9','10','11','12','13','14', '15'])}>
                    Button for those losers who can't solve it
                </button>
            </div>

            <h1 className={ 'pyatnashki__header'}>React Numbers sliding puzzle</h1>
            <div className='pyatnashki__body'>
                <div className={ 'pyatnashki__rules'}>
                    <p>Use keyboard arrows to move blocks.</p>
                    <p>Use Space to restart a game.</p>
                </div>
                <Playboard order={ order }/>
                <Stats seconds={ seconds }
                        minutes={ minutes }
                        hours={ hours }
                        movesCount={ movesCount }/>
            </div>
        </div>
    )
}

export default Pyatnashki