import './news-all.scss';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import NewsAllItem from './NewsAllItem/NewsAllItem';

const NewsAll = () => {
    
    const [ul, setUl] = useState<boolean>(false);
    const [backgroundButton, setBackgroungButton] = useState('#f4f4f6');
    const [colorText, setColorText] = useState('#25252c');
    const [colorArrow, setColorArrow] = useState('#efa205');

    const [dataNewsAll, setDataNewsAll] = useState([]);
    const [url, setUrl] = useState<string>('http://localhost:3000/war');

    const getNewsAll = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataNewsAll(data);
    };

    useEffect(()=>{
        getNewsAll();
    },[])

    const click = () => {
        setUl(!ul);

        if(ul === false){
            setBackgroungButton('#efa205');
            setColorText('white');
            setColorArrow('white');
        }
        else{
            setBackgroungButton('#f4f4f6');
            setColorText('#25252c');
            setColorArrow('#efa205');
        }
    };

    return(
        <div className='news-all'>
            <div className="news-all-poslugi">
                <div className="news-all-poslugi_select" onClick={click} style={{background: `${backgroundButton}`, color: `${colorText}`}}>ПОСЛУГИ <span style={{color: `${colorArrow}`}}>🡇</span>
                    {ul &&
                        <div className="news-all-poslugi_select-option">
                            <ul>
                                <li><Link to={'/'}>Реклама</Link></li>
                                <li><Link to={'/'}>Прес-центр</Link></li>
                                <li><Link to={'/'}>Фотобанк</Link></li>
                                <li><Link to={'/'}>Моніторинг</Link></li>
                                <li><Link to={'/'}>Передплата</Link></li>
                            </ul>
                        </div>
                    }
                </div>
                <Link to={'/account'}>
                    <div className="news-all-poslugi_account">Особистий кабінет</div>
                </Link>
                
            </div>
            <div className="news-all-reklama">
                <h1>Реклама ❯</h1>
                <div className="news-all-reklama-box">
                    <p>Тут може бути ваша реклама</p>
                </div>
                <h1>Останні новини ❯</h1>
                {dataNewsAll.sort((a: any, b: any) => { return b.id - a.id}).map((elem: {title: string; date: string; id: number;}) => {
                    return <NewsAllItem elem={elem} key={elem.id}/>
                })}
            </div>
        </div>
    )
};

export default NewsAll;