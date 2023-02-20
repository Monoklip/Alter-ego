import { useEffect, useState } from 'react';
import NewsAll from '../News-All/NewsAll';
import './society.scss';
import SocietyItemTitle from './SocietyItemTitle/SocietyItemTitle';
import SocietyItem from './SocietyItem/SocietyItem';

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
            <div className='society'>
                <h1 style={{fontSize: `28px`}}>НОВИНИ УКРАЇНИ</h1>
                {dataSociety.slice(0,1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <SocietyItemTitle elem={elem} key={elem.id}/>
                })}
                <h1>ОСТАННІ НОВИНИ УКРАЇНИ ❯</h1>
                {dataSociety.slice(1).map((elem: {title: string; details: string; image: string; date: string; id: number; }) =>{
                    return <SocietyItem elem={elem} key={elem.id}/>
                })}
            </div>
            <NewsAll/>
        </>
    )
};

export default Society;