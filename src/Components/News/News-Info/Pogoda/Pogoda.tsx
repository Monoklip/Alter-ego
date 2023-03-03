import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../ELEMENTS/ElemItem/ElemItem';
import ElemItemTitle from '../ELEMENTS/ElemItemTitle/ElemItemTitle';
import '../ELEMENTS/elem.scss';

const Pogoda = () => {

    const [dataPogoda, setDataPogoda] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/pogoda');

    const getPogoda = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataPogoda(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getPogoda();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>Погода</h1>
                {dataPogoda.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'pogoda'}/>
                })}
                <h1>Новини спорту ❯</h1>
                {dataPogoda.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'pogoda'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default Pogoda;