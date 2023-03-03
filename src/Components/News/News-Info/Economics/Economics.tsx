import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../ELEMENTS/ElemItem/ElemItem';
import ElemItemTitle from '../ELEMENTS/ElemItemTitle/ElemItemTitle';
import '../ELEMENTS/elem.scss';

const Economics = () => {

    const [dataEconomics, setDataEconomics] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/economics');

    const getEconomics = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataEconomics(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getEconomics();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>Економіка</h1>
                {dataEconomics.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'economics'}/>
                })}
                <h1>Економіка ❯</h1>
                {dataEconomics.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'economics'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default Economics;