import { FC, useState } from "react";
import clsx from "clsx";

import { PlayboardStyles } from "./playboard.linaria";
import { useShuffle } from '../../hooks/useShuffle';
import useKeyDown from "../../hooks/useKeyDown";

const Playboard: FC = () => {
    const [order, setOrder] = useState(['','1','2','3','4','5','6','7','8','9','10','11','12','13','14', '15'])
    const { shuffleOrder } = useShuffle(order, setOrder);
    useKeyDown(order, setOrder, shuffleOrder);

    return (
        <>
            <div className={ PlayboardStyles }>
                { order.map((item, index) => {
                    return(
                        <div key={ item }
                             className={ clsx('unit', item === '' && 'empty') }>{ item }</div>
                    )
                })}
            </div>
            <button onClick={ shuffleOrder }>Shuffle</button>
        </>
    )
}

export default Playboard