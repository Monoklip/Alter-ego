import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsAll from '../News-All/NewsAll';
import SocietyFromHomePages from '../Society/Society from HomePages/SocietyFromHomePages';
import WarFromHomePages from '../War/War from HomePages/WarFromHomePages';
import './home.scss';
import StatisticItem from './StatisticItem/StatisticItem';

const Home = () => {

    const [urlStatistic, setUrlStatistic] = useState<string>('  http://localhost:3000/home');
    const [dataStatistic, setDataStatistic] = useState([]);

    const [urlWar, setUrlWar] = useState<string>('  http://localhost:3000/war');
    const [dataWar, setDataWar] = useState([]);

    const [urlSociety, setUrlSociety] = useState<string>('  http://localhost:3000/society');
    const [dataSociety, setDataSociety] = useState([]);

    // const [url, setUrl] = useState<string>('  http://localhost:3000/home');
    // const [dataStatistic, setDataStatistic] = useState([]);

    // const [url, setUrl] = useState<string>('  http://localhost:3000/home');
    // const [dataStatistic, setDataStatistic] = useState([]);

    const todayDate = new Date().getDate();
    const todayMouth = new Date().getMonth()+1;
    const todayYear = new Date().getFullYear(); 

    const [toDay, setToDay] = useState(todayDate + '.' + todayMouth + '.' + todayYear);

    const getStatistic = async() => {
        const response = await fetch(urlStatistic);
        const data = await response.json();
        setDataStatistic(data);
    };

    const getWar = async() => {
        const response = await fetch(urlWar);
        const data = await response.json();
        setDataWar(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    const getSociety = async() => {
        const response = await fetch(urlSociety);
        const data = await response.json();
        setDataSociety(data.sort((a: any ,b: any) => { return b.id - a.id }));
    };

    useEffect(()=>{
        getStatistic();
        getWar();
        getSociety();
    },[]);

    return(
        <div className='home'>
            <div className="home-statistic">
                <h1>Втрати ворога на {toDay}</h1>
                <div className="home-statistic-war">
                    {dataStatistic.map((elem: {name: string; image: string; die: number; diePlus: number; id: number; }) => {
                        return <StatisticItem elem={elem} key={elem.id}/>
                    })}
                </div>
            </div>
            <div className="home-mainNews">
                <div className="home-mainNews-center">
                    <Link to={'/war'}>Війна ❯</Link>
                    <div className="home-mainNews-center_item">
                        {dataWar.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <WarFromHomePages elem={elem} key={elem.id}/>
                        })}
                    </div>
                    <Link to={'/society'}>Новини України ❯</Link>
                    <div className="home-mainNews-center_item">
                        {dataSociety.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <SocietyFromHomePages elem={elem} key={elem.id}/>
                        })}
                    </div>
                </div>
                <NewsAll/>
            </div>
        </div>
    )
};

export default Home;