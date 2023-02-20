import { SetStateAction, useEffect, useState } from 'react';
import './account.scss';
import DisplayStatistic from './DisplayStatistic/DisplayStatistic';

const Account = () => {

    const [accFromlocalStorage, setAccFromLocalStorage] = useState(JSON.parse(localStorage.getItem('Unian.I.A.') as string) || []);

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [displaySingIn, setDisplaySingIn] = useState<boolean>(true);
    const [displaySetting, setDisplaySetting] = useState<boolean>(false);

    const [errorText, setErrorText] = useState<string>("");

    const [dataStatistic, setDataStatistic] = useState([]);

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

    const getStatistic = async() => {
        const response = await fetch('http://localhost:3000/home');
        const data = await response.json();
        setDataStatistic(data);

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
                        {dataStatistic.map((elem: {name: string; image: string; die: number; diePlus: number; id: number; }) => {
                            return <DisplayStatistic elem={elem} getStatistic={getStatistic}/>
                        })}
                    </div>
                </div>
            }
            <button onClick={exitAccount}>del</button>
        </div>
    )
};

export default Account;