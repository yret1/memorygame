import "/src/Styles/Counter.css"

const Counter = ({
    score,
    bestScore
}) => {

    return (
        <div className="scoreCard">

            <div className="current scoreBox">
                <h2>Current Score:</h2>
                <h2>{score || "0"}</h2>
            </div>

            <div className="best scoreBox">
                <h2>High Score:</h2>
                <h2 className="bestS">{bestScore || "0"}</h2>
            </div>
        </div>
    )
};

export default Counter;