import './news-menu.scss';
import { Link } from 'react-router-dom';

const NewsMenu = () => {
    return (
        <div className="news-menu">
            <Link to={'./'}>
                <div className="news-menu_logo">
                    <img src="https://www.unian.ua/images/unian-logo.svg" alt="" />
                </div>
                <div className="news-menu_logo-textTitle">
                    <p>Інформаційне агентство</p>
                </div>
            </Link>
            <ul className='news-menu-main'>
                <li><Link to={'./'}>Головна</Link></li>
                <li><Link to={'./war'}>Війна</Link></li>
                <li><Link to={'./society'}>Україна</Link></li>
                <li><Link to={'./politics'}>Політика</Link></li>
                <li><Link to={'./economics'}>Економіка</Link></li>
                <li><Link to={'./world'}>Світ</Link></li>
                <li><Link to={'./'}>Спецпроекти</Link></li>
                <li><Link to={'./sport'}>Спорт</Link></li>
                <li><Link to={'./science'}>Наука</Link></li>
                <li><Link to={'./techno'}>Техно і звязок</Link></li>
                <li><Link to={'./lite'}>Лайт</Link></li>
                <li><Link to={'./games'}>Ігри</Link></li>
                <li><Link to={'./incidents'}>Інциденти</Link></li>
                <li><Link to={'./health'}>Здоровя</Link></li>
                <li><Link to={'./tourism'}>Туризм</Link></li>
                <li><Link to={'./curiosities'}>Курйози</Link></li>
                <li><Link to={'./pogoda'}>Погода</Link></li>
            </ul>
            <div className="news-menu-main">

            </div>
        </div>
    )
};

export default NewsMenu;