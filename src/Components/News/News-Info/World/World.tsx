import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../ELEMENTS/ElemItem/ElemItem';
import ElemItemTitle from '../ELEMENTS/ElemItemTitle/ElemItemTitle';
import '../ELEMENTS/elem.scss';

const World = () => {

    const [dataWorld, setDataWorld] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/world');

    const getWorld = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataWorld(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getWorld();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>Світ</h1>
                {dataWorld.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'world'}/>
                })}
                <h1>Новини спорту ❯</h1>
                {dataWorld.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'world'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default World;