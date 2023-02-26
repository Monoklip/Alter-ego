import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import './elem.scss';
import ElemItem from './ElemItem/ElemItem';
import ElemItemTitle from './ElemItemTitle/ElemItemTitle';

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
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>Війна в Україні 2023</h1>
                {dataWar.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'war'}/>
                })}
                <h1>Останні новини агресії рф проти України ❯</h1>
                {dataWar.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'war'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default War;