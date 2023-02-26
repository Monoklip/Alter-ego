import { SetStateAction, useEffect, useState } from 'react';
import './account.scss';
import DisplayNewsItem from './DisplayNewsItem/DisplayNewsItem';
import DisplayStatistic from './DisplayStatistic/DisplayStatistic';
import NewNews from './NewNews/NewNews';

const Account = () => {

    const [accFromlocalStorage, setAccFromLocalStorage] = useState(JSON.parse(localStorage.getItem('Unian.I.A.') as string) || []);

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [displaySingIn, setDisplaySingIn] = useState<boolean>(true);
    const [displaySetting, setDisplaySetting] = useState<boolean>(false);

    const [displaySettingWar, setDisplaySettingWar] = useState<boolean>(true);
    const [displaySettingSociety, setDisplaySettingSociety] = useState<boolean>(false);
    const [displaySettingPolitics, setDisplaySettingPolitics] = useState<boolean>(false);
    const [displaySettingEconomics, setDisplaySettingEconomics] = useState<boolean>(false);
    const [displaySettingWorld, setDisplaySettingWorld] = useState<boolean>(false);
    const [displaySettingEcology, setDisplaySettingEcology] = useState<boolean>(false);
    const [displaySettingSport, setDisplaySettingSport] = useState<boolean>(false);
    const [displaySettingScience, setDisplaySettingScience] = useState<boolean>(false);
    const [displaySettingTechno, setDisplaySettingTechno] = useState<boolean>(false);
    const [displaySettingLite, setDisplaySettingLite] = useState<boolean>(false);
    const [displaySettingGames, setDisplaySettingGames] = useState<boolean>(false);
    const [displaySettingIncidents, setDisplaySettingIncidents] = useState<boolean>(false);
    const [displaySettingHealth, setDisplaySettingHealth] = useState<boolean>(false);
    const [displaySettingTourism, setDisplaySettingTourism] = useState<boolean>(false);
    const [displaySettingCuriosities, setDisplaySettingCuriosities] = useState<boolean>(false);
    const [displaySettingPogoda, setDisplaySettingPogoda] = useState<boolean>(false);

    const arrDisplay = [setDisplaySettingWar, setDisplaySettingSociety, setDisplaySettingPolitics, setDisplaySettingEconomics, setDisplaySettingWorld, setDisplaySettingEcology, setDisplaySettingEcology, setDisplaySettingSport, setDisplaySettingScience, setDisplaySettingTechno, setDisplaySettingLite, setDisplaySettingGames, setDisplaySettingIncidents, setDisplaySettingHealth, setDisplaySettingHealth, setDisplaySettingTourism, setDisplaySettingCuriosities, setDisplaySettingPogoda];

    const [errorText, setErrorText] = useState<string>("");

    const [dataStatistic, setDataStatistic] = useState([]);
    const [dataWar, setDataWar] = useState([]);
    const [dataSociety, setDataSociety] = useState([]);
    const [dataEconomics, setDataEconomics] = useState([]);
    const [dataPolitics, setDataPolitics] = useState([]);
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

    const loginHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setLogin(event.target.value);
    };

    const passwordHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    const clickSingIn = async () => {
        const response = await fetch('http://localhost:3000/account');
        const data = await response.json();

        data.some((elem: { login: string; password: string; }) => {
            if (login === elem.login && password === elem.password) {
                setDisplaySingIn(false);
                setDisplaySetting(true);

                setErrorText('');

                localStorage.setItem('Unian.I.A.', JSON.stringify("Welcome"));
            }
            else {
                setErrorText('Невірний логін або пароль')
            }
        });
    };

    useEffect(() => {
        auditDispalay();
        getStatistic();
        getWarDisplay();
    }, [accFromlocalStorage]);

    const exitAccount = () => {
        localStorage.removeItem('Unian.I.A.');
        setAccFromLocalStorage(JSON.parse(localStorage.getItem('Unian.I.A.') as string));
        auditDispalay();
    };

    const auditDispalay = () => {
        if (accFromlocalStorage === 'Welcome') {
            setDisplaySingIn(false);
            setDisplaySetting(true);
        }
        else {
            setDisplaySingIn(true);
            setDisplaySetting(false);
        }
    };

    const getStatistic = async () => {
        const response = await fetch('http://localhost:3000/home');
        const data = await response.json();
        setDataStatistic(data);

    };

    const getWarDisplay = async () => {
        const response = await fetch('http://localhost:3000/war');
        const data = await response.json();
        setDataWar(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingWar(true); });
    };

    const getSocietyDisplay = async () => {
        const response = await fetch('http://localhost:3000/society');
        const data = await response.json();
        setDataSociety(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingSociety(true); });
    };

    const getPoliticsDisplay = async () => {
        const response = await fetch('http://localhost:3000/politics');
        const data = await response.json();
        setDataPolitics(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingPolitics(true); });
    };

    const getEconomicsDisplay = async () => {
        const response = await fetch('http://localhost:3000/economics');
        const data = await response.json();
        setDataEconomics(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingEconomics(true); });
    };

     const getWorldDisplay = async () => {
        const response = await fetch('http://localhost:3000/world');
        const data = await response.json();
        setDataWorld(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingWorld(true); });
    };

    const getEcologyDisplay = async () => {
        const response = await fetch('http://localhost:3000/ecology');
        const data = await response.json();
        setDataEcology(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingEcology(true); });
    };

    const getSportDisplay = async () => {
        const response = await fetch('http://localhost:3000/sport');
        const data = await response.json();
        setDataSport(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingSport(true); });
    };

    const getScienceDisplay = async () => {
        const response = await fetch('http://localhost:3000/science');
        const data = await response.json();
        setDataScience(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingScience(true); });
    };

    const getTechnoDisplay = async () => {
        const response = await fetch('http://localhost:3000/techno');
        const data = await response.json();
        setDataTechno(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingTechno(true); });
    };

    const getLiteDisplay = async () => {
        const response = await fetch('http://localhost:3000/lite');
        const data = await response.json();
        setDataLite(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingLite(true); });
    };

    const getGamesDisplay = async () => {
        const response = await fetch('http://localhost:3000/games');
        const data = await response.json();
        setDataGames(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingGames(true); });
    };

    const getIncidentsDisplay = async () => {
        const response = await fetch('http://localhost:3000/incidents');
        const data = await response.json();
        setDataIncidents(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingIncidents(true); });
    };

    const getHealthDisplay = async () => {
        const response = await fetch('http://localhost:3000/health');
        const data = await response.json();
        setDataHealth(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingHealth(true); });
    };

    const getTourismDisplay = async () => {
        const response = await fetch('http://localhost:3000/tourism');
        const data = await response.json();
        setDataTourism(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingTourism(true); });
    };

    const getCuriositiesDisplay = async () => {
        const response = await fetch('http://localhost:3000/curiosities');
        const data = await response.json();
        setDataCuriosities(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingCuriosities(true); });
    };

    const getPogodaDisplay = async () => {
        const response = await fetch('http://localhost:3000/pogoda');
        const data = await response.json();
        setDataPogoda(data);

        arrDisplay.forEach(elem => { elem(false); setDisplaySettingPogoda(true); });
    };

    return (
        <div className='account'>
            {displaySingIn &&
                <div className="account-singIn">
                    <h2>Вхід</h2>
                    <p>Введіть логін:</p>
                    <input type="text" placeholder='Login' onChange={loginHandleChange} />
                    <p>Введіть пароль:</p>
                    <input type="password" placeholder='Password' onChange={passwordHandleChange} />
                    <div className="account-singIn_error">{errorText}</div>
                    <button onClick={clickSingIn}>Уввійти</button>
                </div>
            }
            {displaySetting &&
                <div className="account-setting">
                    <div className='account-setting-staristic'>
                        {dataStatistic.map((elem: { name: string; image: string; die: number; diePlus: number; id: number; }) => {
                            return <DisplayStatistic elem={elem} getStatistic={getStatistic} key={elem.id} />
                        })}
                    </div>
                    <div className="account-setting-btnAll">
                        <button onClick={getWarDisplay}>Війна</button>
                        <button onClick={getSocietyDisplay}>Україна</button>
                        <button onClick={getPoliticsDisplay}>Політика</button>
                        <button onClick={getEconomicsDisplay}>Економіка</button>
                        <button onClick={getWorldDisplay}>Світ</button>
                        <button onClick={getEcologyDisplay}>Екологія</button>
                        <button onClick={getSportDisplay}>Спорт</button>
                        <button onClick={getScienceDisplay}>Наука</button>
                        <button onClick={getTechnoDisplay}>Техно і звязок</button>
                        <button onClick={getLiteDisplay}>Лайт</button>
                        <button onClick={getGamesDisplay}>Ігри</button>
                        <button onClick={getIncidentsDisplay}>Інциденти</button>
                        <button onClick={getHealthDisplay}>Здоровя</button>
                        <button onClick={getTourismDisplay}>Туризм</button>
                        <button onClick={getCuriositiesDisplay}>Курйози</button>
                        <button onClick={getPogodaDisplay}>Погода</button>
                    </div>
                    <div className="account-setting-newsAll">
                        {displaySettingWar &&
                            <>
                                <NewNews item={'war'} getData={getWarDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Війна</h2>
                                    {dataWar.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'war'} getData={getWarDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingSociety &&
                            <>
                                <NewNews item={'society'} getData={getSocietyDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Новини про Україну</h2>
                                    {dataSociety.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'society'} getData={getSocietyDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingPolitics &&
                            <>
                                <NewNews item={'politics'} getData={getPoliticsDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Політика</h2>
                                    {dataPolitics.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'politics'} getData={getPoliticsDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingEconomics &&
                            <>
                                <NewNews item={'economics'} getData={getEconomicsDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Економіка</h2>
                                    {dataEconomics.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'economics'} getData={getEconomicsDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingWorld &&
                            <>
                                <NewNews item={'world'} getData={getWorldDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Новини світу</h2>
                                    {dataWorld.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'world'} getData={getWorldDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingEcology &&
                            <>
                                <NewNews item={'ecology'} getData={getEcologyDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Екологія</h2>
                                    {dataEcology.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'ecology'} getData={getEcologyDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingSport &&
                            <>
                                <NewNews item={'sport'} getData={getSportDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Спорт</h2>
                                    {dataSport.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'sport'} getData={getSportDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingScience &&
                            <>
                                <NewNews item={'science'} getData={getScienceDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Наука</h2>
                                    {dataScience.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'science'} getData={getScienceDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingTechno &&
                            <>
                                <NewNews item={'techno'} getData={getTechnoDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>ТЕХНО І ЗВ'ЯЗОК</h2>
                                    {dataTechno.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'techno'} getData={getTechnoDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingLite &&
                            <>
                                <NewNews item={'lite'} getData={getLiteDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>лайт</h2>
                                    {dataLite.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'lite'} getData={getLiteDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingGames &&
                            <>
                                <NewNews item={'games'} getData={getGamesDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Ігри</h2>
                                    {dataGames.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'games'} getData={getGamesDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingIncidents &&
                            <>
                                <NewNews item={'incidents'} getData={getIncidentsDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Інциденти</h2>
                                    {dataIncidents.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'incidents'} getData={getIncidentsDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingHealth &&
                            <>
                                <NewNews item={'health'} getData={getHealthDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Здоров'я</h2>
                                    {dataHealth.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'health'} getData={getHealthDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingTourism &&
                            <>
                                <NewNews item={'tourism'} getData={getTourismDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Здоров'я</h2>
                                    {dataTourism.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'tourism'} getData={getTourismDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingCuriosities &&
                            <>
                                <NewNews item={'curiosities'} getData={getCuriositiesDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Курйози</h2>
                                    {dataCuriosities.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'curiosities'} getData={getCuriositiesDisplay} />
                                    })}
                                </div>
                            </>
                        }
                        {displaySettingPogoda &&
                            <>
                                <NewNews item={'pogoda'} getData={getPogodaDisplay}/>
                                <div className='account-setting-newsAll-delRenameNews'>
                                    <h2>Погода</h2>
                                    {dataPogoda.map((elem: {title: string; image: string; details: string; id: number; }) => {
                                        return <DisplayNewsItem elem={elem} key={elem.id} item={'pogoda'} getData={getPogodaDisplay} />
                                    })}
                                </div>
                            </>
                        }
                    </div>
                </div>
            }
            <button onClick={exitAccount}>del</button>
        </div>
    )
};

export default Account;