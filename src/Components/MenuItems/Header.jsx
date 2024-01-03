import Counter from "./Counter"
import "/src/Styles/Header.css"
const Header = (props) => {

    const {score, bestScore} = props;

    return (
        <header>
            <section className="left">
            <h1 className="title">Welcome to the <span className="left__span">PURPLE</span> game!</h1>
            <h2 className="subHeader">Click on the gifS to earn points, click twice on the same one and you're <span className="sub__span">TOAST!</span></h2>
            </section>
            <section className="right">
                <Counter score={score} bestScore={bestScore} />
            </section>
        </header>
    )
}

export default Header