import { FC, useState } from "react";
import clsx from "clsx";

import { PlayboardStyles } from "./playboard.linaria";

type PlayboardProps = {
    order: string[]
}

const Playboard: FC<PlayboardProps> = ({ order }) => {
    return (
        <div className={PlayboardStyles}>
            { order.map((item, index) => {
                return (
                    <div key={item}
                         className={clsx('unit', item === '' && 'empty')}>{item}</div>
                )
            })}
        </div>
    )
}

export default Playboard