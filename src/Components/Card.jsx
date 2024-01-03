import cardBack from "../assets/cardBack.png"
import "/src/Styles/Card.css"
const Card = (props) => {
    const { cardimg, flipped, cardId, handleClick } = props;

    return (
        <div
        onClick={() => handleClick(cardId)}
        id={cardId}
        className={`card ${flipped ? "flipped" : ""}`}
      >
        <div className="card-inner">
          <div className="card-front">
            <img src={cardimg} alt="Playing Card" />
          </div>
          <div className="card-back">
            <img src={cardBack} alt="Card Backside" />
          </div>
        </div>
      </div>
    );
};

export default Card;
