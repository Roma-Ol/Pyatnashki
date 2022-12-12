import {useEffect, useState} from "react";
import {useStopwatch} from "react-timer-hook";
import Confetti from 'react-confetti'

import Playboard from "./components/Playboard/Playboard";
import Stats from "./components/Stats/Stats";
import useKeyDown from "./hooks/useKeyDown";
import {useShuffle} from "./hooks/useShuffle";
import {PyatnashkiStyles} from "./Pyatnashki.linaria";

const Pyatnashki = () => {
    const [order, setOrder] = useState(['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'])
    const [movesCount, setMovesCount] = useState(0);
    const [gameWon, setGameWon] = useState(false);
    const [gameInProgress, setGameInProgress] = useState(false)
    const {shuffleOrder} = useShuffle(order, setOrder);
    const {seconds, minutes, hours, start, pause} = useStopwatch({autoStart: false});
    const victoryPattern = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

    useKeyDown(order, start, setOrder, setMovesCount, shuffleOrder, setGameInProgress);

    useEffect(() => {
        shuffleOrder();
    }, [])

    useEffect(() => {
        if (movesCount > 0 && order.every((value, index) => value === victoryPattern[index])) {
            setGameWon(true)
            pause();
        }
    }, [order]);


    return (
        <>
            {gameWon && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
            <div className={PyatnashkiStyles}>
                <h1 className={'pyatnashki__header'}>React 15 puzzle</h1>
                <Stats seconds={seconds}
                       minutes={minutes}
                       hours={hours}
                       movesCount={movesCount}/>
                <div className="pyatnashki__content">
                    {gameInProgress
                        ? <>
                            {gameWon &&
                                <div className={'pyatnashki__content__overlay game-won__content'}>
                                    <div>Game won, congrats</div>
                                    <button onClick={() => {
                                        setMovesCount(0);
                                        shuffleOrder();
                                        setGameWon(false)
                                    }}>Play Again
                                    </button>
                                </div>
                            }
                        </>
                        : <div className={'pyatnashki__content__overlay pyatnashki__rules'}>
                            <p>Use keyboard arrows to move blocks.</p>
                            <p>Use Space to restart game.</p>
                            <button onClick={() => {
                                setGameInProgress(true);
                                setMovesCount(0);
                                start();
                            }
                            }>Start
                            </button>
                        </div>
                    }
                    <Playboard order={order}/>
                </div>

                <div className={'pyatnashki__shame-zone'}>
                    <button
                        onClick={() => setOrder(['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'])}>
                        Button for those losers who can't solve it
                    </button>
                    <p>(Shame zone)</p>
                </div>
            </div>
        </>

    )
}

export default Pyatnashki