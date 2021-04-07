import style from './Index.module.scss';

import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <>
            <div className={style.container}>
                <Typography variant="h3">
                    Kart oyunu
                </Typography>
                <div className={style.padding} />
                <Typography variant="body1">
                    Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen 2. seçim hakkın tanınacaktır.
                    <br/>
                </Typography>
                <div className={style.padding} />
                <Link to={"/Game"}>
                    <Button variant="contained" color="primary">Oyna</Button>
                </Link>
            </div>
        </>
    );
}