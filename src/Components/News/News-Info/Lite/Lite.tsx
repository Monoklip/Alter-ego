import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../War/ElemItem/ElemItem';
import ElemItemTitle from '../War/ElemItemTitle/ElemItemTitle';
import '../War/elem.scss';

const Lite = () => {

    const [dataLite, setDataLite] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/lite');

    const getLite = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataLite(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getLite();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>Екоголія</h1>
                {dataLite.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'lite'}/>
                })}
                <h1>Новини спорту ❯</h1>
                {dataLite.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'lite'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default Lite;