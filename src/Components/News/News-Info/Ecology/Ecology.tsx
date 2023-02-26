import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../War/ElemItem/ElemItem';
import ElemItemTitle from '../War/ElemItemTitle/ElemItemTitle';
import '../War/elem.scss';

const Ecology = () => {

    const [dataEcology, setDataEcology] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/ecology');

    const getEcology = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataEcology(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getEcology();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>Екоголія</h1>
                {dataEcology.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'ecology'}/>
                })}
                <h1>Новини спорту ❯</h1>
                {dataEcology.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'ecology'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default Ecology;