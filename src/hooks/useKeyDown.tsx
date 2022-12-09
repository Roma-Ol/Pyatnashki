import React, { useEffect } from 'react';

const useKeyDown = () => {
    useEffect(() => {
        function handleKeyDown(e) {

            switch (e.code) {
                case 'ArrowUp':
                    console.log('UP');
                    break;
                case 'ArrowDown':
                    console.log('DN');
                    break;
                case 'ArrowLeft':
                    console.log('LEFT');
                    break;
                case 'ArrowRight':
                    console.log('RIGHT');
                    break;

                default:
                    return
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return function cleanup() {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
}

export default useKeyDown