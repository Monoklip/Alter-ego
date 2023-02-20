import './news-info.scss';
import { Routes, Route } from 'react-router-dom';
import War from './War/War';
import Home from './Home/Home';
import Society from './Society/Society';
import { useEffect, useState } from 'react';
import WarPagesUrl from './War/WarPagesUrl/WarPagesUrl';
import SocietyPagesUrl from './Society/SocietyPagesUrl/SocietyPagesUrl';
import Account from './Account/Account';

const NewsInfo = () =>{

    const [dataWar, setDataWar] = useState([]);
    const [dataSociety, setDataSociety] = useState([]);

    const getWarPages = async() => {
        const response = await fetch('http://localhost:3000/war');
        const data = await response.json();
        setDataWar(data);
    };

    const getSocietyPages = async() => {
        const response = await fetch('http://localhost:3000/society');
        const data = await response.json();
        setDataSociety(data);
    };

    useEffect(()=>{
        getWarPages();
        getSocietyPages();
    },[]);

    return(
        <div className="news-info">
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/account' element={<Account/>}></Route>
                <Route path='/war' element={<War/>}></Route>
                <Route path='/society' element={<Society/>}></Route>

                {dataWar.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/war/${elem.title}/${elem.id}`} element={<WarPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataSociety.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/society/${elem.title}/${elem.id}`} element={<SocietyPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
            </Routes>
        </div>
    )
};

export default NewsInfo;