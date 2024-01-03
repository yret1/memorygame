
import "/src/Styles/Card.css"
const Card = (props) => {
    const { cardimg, flipped, cardId, handleClick } = props;

    return (
        <div
            onClick={() => handleClick(cardId)}
            id={cardId}
            className={flipped ? "card flipped" : "card"}
        >
            <div className='cardFace'>
                <img src={cardimg} alt="Playing Card" />
            </div>
            <div className="cardBack"></div>
        </div>
    );
};

export default Card;
