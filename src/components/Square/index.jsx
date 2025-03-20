import { CIRCLE, CROSS, EMPTY } from "../../constants";

import Circle from "../Circle";
import Cross from "../Cross";

import "./index.css";

const Square = ({ position, value, playerTurn }) => {
  const handleClick = () => {
    if (value === EMPTY) playerTurn(position);
  };

  return (
    <div className="square" onClick={handleClick}>
      {value == CIRCLE && <Circle />}
      {value == CROSS && <Cross />}
    </div>
  );
};

export default Square;
