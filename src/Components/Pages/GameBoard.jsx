import { useEffect, useState } from "react";
import Card from "../Card";
import "/src/Styles/Game.css"

const GameBoard = (props) => {


    const {score, setScore, setBestScore} = props;

    const api = "https://api.giphy.com/v1/gifs/search?api_key=vUkhxv2VGT2UzIFnyRnO941Yib6SJz3P&q=purple&limit=10&offset=20&rating=r&lang=en&bundle=messaging_non_clips";

    const [data, setData] = useState(null);
    const [gameover, setGameover] = useState(false);

    const [flipped, setFlipped] = useState(false);
  
    const [cards, setCards] = useState([]);
    const [clicked, setClicked] = useState([]);
  
   useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            console.log(data)
            const images = data.data.map((item) => ({
                url: item.images.fixed_height.url,
                id: item.id,
                flipped: false
            }));
            console.log(images)
            if (images.length === 10) {
                setCards(images);
            }
                
        })
            
    
   }, []);

   useEffect(() => {
    if (gameover) {
      setBestScore((prevBestScore) => Math.max(prevBestScore, score));
      setScore(0);
      setClicked([]);
      setGameover(false);
    }
  }, [gameover]);







    const handleClick = (id) => {
        if (clicked.includes(id)) {
            setGameover(true);
        } else {
            setFlipped(true);
            setScore((prevScore) => prevScore + 1);
            setClicked((prevClicked) => [...prevClicked, id])
            const updatedCards = cards.map((card) => ({ ...card, flipped: true }));
            setCards(updatedCards);

            console.log(clicked)
        }
    };

    useEffect(() => {
        shuffleCards(cards)
    },[cards])



    const shuffleCards = (arr) => {
        let currentPos = arr.length, randomIndex;

        while (currentPos > 0) {
            randomIndex = Math.floor(Math.random() * currentPos);
            currentPos--;

            [arr[currentPos], arr[randomIndex]] = [
                arr[randomIndex], arr[currentPos]];
        }

        setTimeout(() => {
            setFlipped(false)
        }, 800)
        return arr;
    }



    return (
        <div className="gameBoard">
            {cards.map((item) => {
                return (
                   <Card cardimg={item.url} key={item.id} cardId={item.id} id={item.id} flipped={flipped} handleClick={handleClick} />
                )
            })}
        </div>
    )
}

export default GameBoard 