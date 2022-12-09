export function useShuffle  (
    order: string[],
    setOrder: (newOrder: string[]) => void
) {
    function shuffleOrder() {
        const shuffled = [...order];
        let currentIndex = shuffled.length,  randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [shuffled[currentIndex], shuffled[randomIndex]] = [
                shuffled[randomIndex], shuffled[currentIndex]];
        }

        setOrder(shuffled);
    }

    return { shuffleOrder }
};