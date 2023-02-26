import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../War/ElemItem/ElemItem';
import ElemItemTitle from '../War/ElemItemTitle/ElemItemTitle';
import '../War/elem.scss'
const Sport = () => {

    const [dataSport, setDataSport] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/sport');

    const getSport = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataSport(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getSport();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>СПОРТ</h1>
                {dataSport.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'sport'}/>
                })}
                <h1>Новини спорту ❯</h1>
                {dataSport.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'sport'}/>
                })}
            </div>
            <NewsAll />
        </>
    )
};

export default Sport;