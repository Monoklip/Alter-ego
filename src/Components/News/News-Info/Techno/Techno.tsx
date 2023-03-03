import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import ElemItem from '../ELEMENTS/ElemItem/ElemItem';
import ElemItemTitle from '../ELEMENTS/ElemItemTitle/ElemItemTitle';
import '../ELEMENTS/elem.scss';

const Techno = () => {

    const [dataTechno, setDataTechno] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/techno');

    const getTechno = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataTechno(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getTechno();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>Техно і зв'язок</h1>
                {dataTechno.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'techno'}/>
                })}
                <h1>Новини спорту ❯</h1>
                {dataTechno.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'techno'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default Techno;