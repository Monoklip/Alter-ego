import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsAll from '../News-All/NewsAll';
import ElemFromHomePages from '../ELEMENTS/Elem from HomePages/ElemFromHomePages';
import './home.scss';
import StatisticItem from './StatisticItem/StatisticItem';

const Home = (props: { dataWar: any
    dataScience: any
    dataSociety: any
    dataPolitics: any
    dataEconomics: any
    dataWorld: any
    dataEcology: any
    dataSport: any
    dataTechno: any
    dataLite: any
    dataGames: any
    dataIncidents: any
    dataHealth: any
    dataTourism: any
    dataCuriosities: any
    dataPogoda: any;
   }) => {

    const { 
        dataWar,
        dataScience,
        dataSociety,
        dataPolitics,
        dataEconomics,
        dataWorld,
        dataEcology,
        dataSport,
        dataTechno,
        dataLite,
        dataGames,
        dataIncidents,
        dataHealth,
        dataTourism,
        dataCuriosities,
        dataPogoda,
    } = props;

    const [urlStatistic, setUrlStatistic] = useState<string>('http://localhost:3000/home');
    const [dataStatistic, setDataStatistic] = useState([]);

    const todayDate = new Date().getDate();
    const todayMouth = new Date().getMonth()+1;
    const todayYear = new Date().getFullYear(); 

    const auditTodayDate = () => {
      if(todayDate < 10){
        return `0${new Date().getDate()}`;
      }
      else{
        return new Date().getDate();
      }
    };

    const auditTodayMouth = () => {
      if(todayMouth < 10){
        return `0${new Date().getMonth()+1}`;
      }
      else{
        return new Date().getMonth()+1;
      }
    };

    const [toDay, setToDay] = useState(auditTodayDate() + '.' + auditTodayMouth() + '.' + todayYear);

    const getStatistic = async() => {
        const response = await fetch(urlStatistic);
        const data = await response.json();
        setDataStatistic(data);
    };
    
    useEffect(()=>{
        getStatistic();
    },[]);

    return(
        <div className='home'>
            <div className="home-statistic">
                <h1>???????????? ???????????? ???? {toDay}</h1>
                <div className="home-statistic-war">
                    {dataStatistic.map((elem: {name: string; image: string; die: number; diePlus: number; id: number; }) => {
                        return <StatisticItem elem={elem} key={elem.id}/>
                    })}
                </div>
            </div>
            <div className="home-mainNews">
                <div className="home-mainNews-center">
                    <Link to={'/war'}>?????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataWar.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'war'}/>
                        })}
                    </div>
                    <Link to={'/society'}>???????????? ?????????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataSociety.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'society'}/>
                        })}
                    </div>
                    <Link to={'/politics'}>???????????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataPolitics.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'politics'}/>
                        })}
                    </div>
                    <Link to={'/economics'}>?????????????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataEconomics.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'economics'}/>
                        })}
                    </div>
                    <Link to={'/world'}>???????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataWorld.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'world'}/>
                        })}
                    </div>
                    <Link to={'/ecology'}>???????????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataEcology.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'ecology'}/>
                        })}
                    </div>
                    <Link to={'/sport'}>?????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataSport.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'sport'}/>
                        })}
                    </div>
                    <Link to={'/science'}>?????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataScience.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'science'}/>
                        })}
                    </div>
                    <Link to={'/techno'}>?????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataTechno.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'techno'}/>
                        })}
                    </div>
                    <Link to={'/lite'}>???????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataLite.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'lite'}/>
                        })}
                    </div>
                    <Link to={'/games'}>???????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataGames.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'games'}/>
                        })}
                    </div>
                    <Link to={'/incedents'}>?????????????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataIncidents.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'incedents'}/>
                        })}
                    </div>
                    <Link to={'/health'}>????????????'?? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataHealth.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'health'}/>
                        })}
                    </div>
                    <Link to={'/tourism'}>???????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataTourism.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'tourism'}/>
                        })}
                    </div>
                    <Link to={'/curiosities'}>?????????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataCuriosities.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'curiosities'}/>
                        })}
                    </div>
                    <Link to={'/pogoda'}>???????????? ???</Link>
                    <div className="home-mainNews-center_item">
                        {dataPogoda.slice(0,3).map((elem: {title: string; image: string; id: number; }) =>{
                          return <ElemFromHomePages elem={elem} key={elem.id} item={'pogoda'}/>
                        })}
                    </div>
                </div>
                <NewsAll/>
            </div>
        </div>
    )
};

export default Home;