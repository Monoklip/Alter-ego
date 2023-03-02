import './news-info.scss';
import { Routes, Route } from 'react-router-dom';
import War from './War/War';
import Home from './Home/Home';
import Society from './Society/Society';
import  { useEffect, useState } from 'react';
import Account from './Account/Account';
import Sport from './Sport/Sport';
import ElemPagesUrl from './War/ElemPagesUrl/ElemPagesUrl';
import Economics from './Economics/Economics';
import Politics from './Politics/Politics';
import World from './World/World';
import Ecology from './Ecology/Ecology';
import Science from './Science/Science';
import Techno from './Techno/Techno';
import Lite from './Lite/Lite';
import Games from './Games/Games';
import Incidents from './Incidents/Incidents';
import Health from './Health/Health';
import Tourism from './Tourism/Tourism';
import Curiosities from './Curiosities/Curiosities';
import Pogoda from './Pogoda/Pogoda';
import NoPages from './NoPages/NoPages';

const NewsInfo = (props: { UnClickMenu: any }) => {

    const {
        UnClickMenu
    } = props;

    const [dataWar, setDataWar] = useState([]);
    const [dataSociety, setDataSociety] = useState([]);
    const [dataPolitics, setDataPolitics] = useState([]);
    const [dataEconomics, setDataEconomics] = useState([]);
    const [dataWorld, setDataWorld] = useState([]);
    const [dataEcology, setDataEcology] = useState([]);
    const [dataSport, setDataSport] = useState([]);
    const [dataScience, setDataScience] = useState([]);
    const [dataTechno, setDataTechno] = useState([]);
    const [dataLite, setDataLite] = useState([]);
    const [dataGames, setDataGames] = useState([]);
    const [dataIncidents, setDataIncidents] = useState([]);
    const [dataHealth, setDataHealth] = useState([]);
    const [dataTourism, setDataTourism] = useState([]);
    const [dataCuriosities, setDataCuriosities] = useState([]);
    const [dataPogoda, setDataPogoda] = useState([]);

    const getWarPages = async() => {
        const response = await fetch('http://localhost:3000/war');
        const data = await response.json();
        setDataWar(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getSocietyPages = async() => {
        const response = await fetch('http://localhost:3000/society');
        const data = await response.json();
        setDataSociety(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getPoliticsPages = async() => {
        const response = await fetch('http://localhost:3000/politics');
        const data = await response.json();
        setDataPolitics(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getEconimicsPages = async() => {
        const response = await fetch('http://localhost:3000/economics');
        const data = await response.json();
        setDataEconomics(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getEcologyPages = async() => {
        const response = await fetch('http://localhost:3000/ecology');
        const data = await response.json();
        setDataEcology(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getSportPages = async() => {
        const response = await fetch('http://localhost:3000/sport');
        const data = await response.json();
        setDataSport(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getSciencePages = async() => {
        const response = await fetch('http://localhost:3000/science');
        const data = await response.json();
        setDataScience(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getWorldPages = async() => {
        const response = await fetch('http://localhost:3000/world');
        const data = await response.json();
        setDataWorld(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getLitePages = async() => {
        const response = await fetch('http://localhost:3000/lite');
        const data = await response.json();
        setDataLite(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getGamesPages = async() => {
        const response = await fetch('http://localhost:3000/games');
        const data = await response.json();
        setDataGames(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getTechnoPages = async() => {
        const response = await fetch('http://localhost:3000/techno');
        const data = await response.json();
        setDataTechno(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getIncidentsPages = async() => {
        const response = await fetch('http://localhost:3000/incidents');
        const data = await response.json();
        setDataIncidents(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getHealthPages = async() => {
        const response = await fetch('http://localhost:3000/health');
        const data = await response.json();
        setDataHealth(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getTourismPages = async() => {
        const response = await fetch('http://localhost:3000/tourism');
        const data = await response.json();
        setDataTourism(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getCuriositiesPages = async() => {
        const response = await fetch('http://localhost:3000/curiosities');
        const data = await response.json();
        setDataCuriosities(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getPogodaPages = async() => {
        const response = await fetch('http://localhost:3000/pogoda');
        const data = await response.json();
        setDataPogoda(data.sort((a: any, b: any) =>  b.id - a.id ));
    };

    const getNewsAll = () => {
        getWarPages();
        getSocietyPages();
        getSportPages();
        getPoliticsPages();
        getEconimicsPages();
        getEcologyPages();
        getSciencePages();
        getWorldPages();
        getLitePages();
        getTechnoPages();
        getGamesPages();
        getIncidentsPages();
        getHealthPages();
        getTourismPages();
        getCuriositiesPages();
        getPogodaPages();
    };

    useEffect(()=>{
        getNewsAll();
    },[]);

    return(
        <div className="news-info" onClick={UnClickMenu}>
            <Routes>
                <Route path='/' element={<Home 
                        dataWar={dataWar}
                        dataScience={dataScience}
                        dataSociety={dataSociety}
                        dataPolitics={dataPolitics}
                        dataEconomics={dataEconomics}
                        dataWorld={dataWorld}
                        dataEcology={dataEcology}
                        dataSport={dataSport}
                        dataTechno={dataTechno}
                        dataLite={dataLite}
                        dataGames={dataGames}
                        dataIncidents={dataIncidents}
                        dataHealth={dataHealth}
                        dataTourism={dataTourism}
                        dataCuriosities={dataCuriosities}
                        dataPogoda={dataPogoda}
                         />}>
                </Route>
                <Route path='/account' element={<Account/>}></Route>
                <Route path='/war' element={<War/>}></Route>
                <Route path='/society' element={<Society/>}></Route>
                <Route path='/economics' element={<Economics/>}></Route>
                <Route path='/sport' element={<Sport/>}></Route>
                <Route path='/politics' element={<Politics/>}></Route>
                <Route path='/world' element={<World/>}></Route>
                <Route path='/ecology' element={<Ecology/>}></Route>
                <Route path='/science' element={<Science/>}></Route>
                <Route path='/techno' element={<Techno/>}></Route>
                <Route path='/lite' element={<Lite/>}></Route>
                <Route path='/games' element={<Games/>}></Route>
                <Route path='/incidents' element={<Incidents/>}></Route>
                <Route path='/health' element={<Health/>}></Route>
                <Route path='/tourism' element={<Tourism/>}></Route>
                <Route path='/curiosities' element={<Curiosities/>}></Route>
                <Route path='/pogoda' element={<Pogoda/>}></Route>
                <Route path='*' element={<NoPages/>}></Route>

                {dataWar.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/war/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataSociety.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/society/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataPolitics.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/politics/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataEconomics.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/economics/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataWorld.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/world/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataEcology.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/ecology/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataSport.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/sport/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataScience.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/science/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataTechno.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/techno/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataLite.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/lite/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataGames.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/games/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataIncidents.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/incidents/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataHealth.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/health/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataTourism.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/tourism/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataCuriosities.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/curiosities/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
                {dataPogoda.map((elem: {title: string; image: string; id: number; details: string; }) => {
                    return <Route path={`/pogoda/${elem.title}/${elem.id}`} element={<ElemPagesUrl elem={elem} key={elem.id}/>}></Route>
                })}
            </Routes>
        </div>
    )
};

export default NewsInfo;