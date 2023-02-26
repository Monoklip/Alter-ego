import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../War/ElemItem/ElemItem';
import ElemItemTitle from '../War/ElemItemTitle/ElemItemTitle';
import '../War/elem.scss';

const Tourism = () => {

    const [dataTourism, setDataTourism] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/tourism');

    const getTourism = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataTourism(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getTourism();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>Екоголія</h1>
                {dataTourism.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'tourism'}/>
                })}
                <h1>Новини спорту ❯</h1>
                {dataTourism.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'tourism'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default Tourism;