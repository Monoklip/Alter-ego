import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import './war.scss';
import WarItem from './WarItem/WarItem';
import WarItemTitle from './WarItemTitle/WarItemTitle';

const War = () => {

    const [dataWar, setWarData] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/war');

    const getWar = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setWarData(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getWar();
    },[]);
    
    return(
        <>
            <div className='war'>
                <h1 style={{fontSize: `28px`}}>Війна в Україні 2023</h1>
                {dataWar.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <WarItemTitle elem={elem} key={elem.id}/>
                })}
                <h1>Останні новини агресії рф проти України ❯</h1>
                {dataWar.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <WarItem elem={elem} key={elem.id}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default War;