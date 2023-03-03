import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../ELEMENTS/ElemItem/ElemItem';
import ElemItemTitle from '../ELEMENTS/ElemItemTitle/ElemItemTitle';
import '../ELEMENTS/elem.scss';

const Science = () => {

    const [dataScience, setDataScience] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/science');

    const getScience = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataScience(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getScience();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>наука</h1>
                {dataScience.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'science'}/>
                })}
                <h1>Новини спорту ❯</h1>
                {dataScience.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'science'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default Science;