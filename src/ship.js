export const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
};

const Ship = (type) => {
    const id = type;
    const length = shipLengths[type];
    let direction = "horizontal";

    const getDirection = () => direction;

    const changeDirection = () => {
        direction === "horizontal" ? (direction = "vertical") : (direction = "horizontal");
    }

    const hits = Array(length).fill(null);
    const hit = (i) => (hits[i] = "hit");
    const getHits = () => hits;

    const isSunk = () => hits.every((h) => h === "hit");

    return { id, length, hit, getHits, isSunk, getDirection, changeDirection };
    
};

export default Ship;