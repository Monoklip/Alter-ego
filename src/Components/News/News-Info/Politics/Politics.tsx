import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../ELEMENTS/ElemItem/ElemItem';
import ElemItemTitle from '../ELEMENTS/ElemItemTitle/ElemItemTitle';
import '../ELEMENTS/elem.scss';

const Politics = () => {

    const [dataPolitics, setDataPolitics] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/politics');

    const getPolitics = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataPolitics(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getPolitics();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>Політика</h1>
                {dataPolitics.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'politics'}/>
                })}
                <h1>Політика ❯</h1>
                {dataPolitics.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'politics'}/>
                })}
            </div>
            <NewsAll />
        </>
    )
};

export default Politics;