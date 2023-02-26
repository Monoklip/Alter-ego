import { useEffect, useState } from 'react';
import ElemItem from '../War/ElemItem/ElemItem';
import ElemItemTitle from '../War/ElemItemTitle/ElemItemTitle';
import '../War/elem.scss';
import NewsAll from '../News-All/NewsAll';

const Society = () => {

    const [dataSociety, setSocietyData] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/society');

    const getSociety = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setSocietyData(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getSociety();
    },[]);
    
    return(
        <>
            <div className='elem'>
                <h1 style={{fontSize: `28px`}}>НОВИНИ УКРАЇНИ</h1>
                {dataSociety.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItemTitle elem={elem} key={elem.id} item={'society'}/>
                })}
                <h1>ОСТАННІ НОВИНИ УКРАЇНИ ❯</h1>
                {dataSociety.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <ElemItem elem={elem} key={elem.id} item={'society'}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default Society;