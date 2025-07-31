import React, { useState } from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";
import photo2 from '@/assets/photo2.png';
import photo1 from '@/assets/photo1.jpg';
import Angry from '@/assets/angry.svg';

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div>
            <div>
                <img width={100} height={100} src={photo2} alt=""/>
                <img width={100} height={100} src={photo1} alt=""/>
            </div>
            <div>
                <Angry className={classes.icon} width={50} height={50} />
            </div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>increment</button>
            <Outlet />
        </div>
    );
};
