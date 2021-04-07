import { MouseEventHandler } from "react";

interface ICardProps {
    imageUrl: string;
    revealed: boolean;
    onCardSelected: MouseEventHandler;
}

const backUrl = "assets/card.png";
export default function Card(props: ICardProps) {
    if (props.revealed) {
        return (
            <img src={props.imageUrl} />
        );
    }

    return (
        <img src={backUrl} onClick={props.onCardSelected} />
    );
}