import React, {useEffect} from 'react';

const useKeyDown = (
    order: string[],
    start: () => void,
    setOrder: (newOrder: string[]) => void,
    setMovesCount,
    shuffleOrder: () => void,
    setGameInProgress,
) => {
    const emptyIndex = order.indexOf('');

    function getYAxis() {
        const result = (emptyIndex) / 4;
        const positionRatio = result.toString().indexOf('.') === -1
            ? 0
            : result.toString().slice(2);

        switch (positionRatio) {
            case '25':
                return 2;
            case '5':
                return 3;
            case '75':
                return 4;

            default:
                return 1
        }
    }


    useEffect(() => {
        function handleKeyDown(e) {
            const yAxis = getYAxis();

            switch (e.code) {
                case 'ArrowUp':
                    order[emptyIndex + 4] && setOrder([
                        ...order.slice(0, emptyIndex),
                        order[emptyIndex + 4],
                        ...order.slice(emptyIndex + 1, emptyIndex + 4),
                        '',
                        ...order.slice(emptyIndex + 5)
                    ]);
                    setMovesCount((prev) => prev + 1);
                    break;

                case 'ArrowDown':
                    order[emptyIndex - 4] && setOrder([
                        ...order.slice(0, emptyIndex - 4),
                        '',
                        ...order.slice(emptyIndex - 3, emptyIndex),
                        order[emptyIndex - 4],
                        ...order.slice(emptyIndex + 1)
                    ]);
                    setMovesCount((prev) => prev + 1);
                    break;

                case 'ArrowLeft':
                    yAxis !==4 && setOrder([
                        ...order.slice(0, emptyIndex),
                        order[emptyIndex + 1],
                        '',
                        ...order.slice(emptyIndex + 2)
                    ]);
                    setMovesCount((prev) => prev + 1);
                    break;

                case 'ArrowRight':
                    yAxis !== 1 && setOrder([
                        ...order.slice(0, emptyIndex - 1),
                        '',
                        order[emptyIndex - 1],
                        ...order.slice(emptyIndex + 1)
                    ]);
                    setMovesCount((prev) => prev + 1);
                    break;
                case 'Space':
                    setGameInProgress(true);
                    shuffleOrder();
                    setMovesCount(0);
                    start();

                default:
                    return
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return function cleanup() {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [order]);
}

export default useKeyDown