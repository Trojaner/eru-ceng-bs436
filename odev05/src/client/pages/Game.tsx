import style from './Game.module.scss';

import { Button, Typography } from '@material-ui/core';
import { shuffle } from "lodash";
import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';

enum GameState {
    Playing,
    Defeat,
    Victory
}

interface IGameProps {
    cards?: string[];
}

function Game(props: IGameProps = defaultProps) {
    const [gameState, setGameState] = useState(GameState.Playing);
    const [failedAttempts, setFailedAttempts] = useState(0);
    const [selectedCard, setSelectedCard] = useState(-1);

    const startNewGame = () => {
        setGameState(GameState.Playing);
        setFailedAttempts(0);
        setSelectedCard(-1);
    };

    const cards =
        props.cards
            .map((img, i) =>
                <Card
                    key={i}
                    imageUrl={img}
                    revealed={selectedCard === 0 || gameState === GameState.Defeat}
                    onCardSelected={() => onCardSelected(i)} />
            );

    useEffect(() => {
        startNewGame();
    }, []);

    const onCardSelected = (index) => {
        console.log(index);

        if (gameState !== GameState.Playing) {
            return;
        }

        setSelectedCard(index);

        if (index === 0) {
            setGameState(GameState.Victory);
        } else {
            if (failedAttempts === 1) {
                setGameState(GameState.Defeat);
            } else {
                setFailedAttempts(failedAttempts + 1);
            }
        }
    };

    let gameResult;
    let failedMessage;

    if (failedAttempts === 1) {
        failedMessage = <p>Yanlis secenek ama bir hakkin daha var.</p>;
    }

    switch (gameState) {
        case GameState.Victory:
            gameResult = (
                <div className={style["game-result"]}>
                    <Typography variant="h2">Kazandın!</Typography>
                    <Button variant="contained" color="primary" onClick={startNewGame}>Yeni oyun</Button>
                </div>
            );

        case GameState.Defeat:
            gameResult = (
                <div className={style["game-result"]}>
                    <Typography variant="h2">Yanlış cevap!</Typography>
                    <Button variant="contained" color="primary" onClick={startNewGame}>Yeni oyun</Button>
                </div>
            );
    }

    return (
        <>
            {
                gameResult ? <></> : failedMessage
            }
            {
                gameResult ? gameResult :
                    <>
                        <Typography variant="body2">
                            Kedi kartını bulmak için kartın üzerine tıklamalısın.
                       </Typography>
                        <Typography variant="body2">
                            Yeni bir oyun oynamak istersen <span onClick={startNewGame} className='link'>buraya</span> tıklayabilirsin.
                        </Typography>
                    </>
            }
            {cards}
        </>
    );
}

const defaultProps: IGameProps = {
    cards: ["assets/cat.png", "assets/dog.png", "assets/dog.png"]
};

Game.defaultProps = defaultProps;
export default Game;