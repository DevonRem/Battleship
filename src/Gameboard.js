import { Ship } from "./ship";

const GameBoard = (testing) => {
    const ship = {
      battleship: Ship('battleship'),
      submarine: Ship('submarine'),
      carrier: Ship('carrier'),
      cruiser: Ship('cruiser'),
      destroyer: Ship('destroyer'),
    };
  
    let positions = {};
    const positionCoordinates = [];
    const seeds = [];
    let attacks = {
      mis: [],
      hit: [],
    };
  
    
  };
  
  export default GameBoard;