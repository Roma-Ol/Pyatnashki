import {FC} from "react";

type StatsProps = {
    seconds: number,
    minutes: number,
    hours: number
    movesCount: number
}

const Stats: FC<StatsProps> = ({
   seconds,
   minutes,
   hours,
   movesCount
}) => {
    return (
        <div className="pyatnashki__stats">
            <p>{`Moves: ${movesCount}`}</p>
            <p>{`Time: ${hours}h : ${minutes}m : ${seconds}s`}</p>
        </div>
    )
}

export default Stats