import './news-menu.scss';
import { Link, useLocation } from 'react-router-dom';

const NewsMenu = (props: { clickLeftMenu: any; setClickLeftMenu: any; UnClickleftMenu: any }) => {

    const {
        clickLeftMenu,
        setClickLeftMenu,
        UnClickleftMenu
    } = props;

    const openMenu = () => {
        setClickLeftMenu(!clickLeftMenu);
    };

    const useExactMatch = (path: string = ''): boolean =>{
        const location = useLocation();
        return path === location.pathname;
    };

    return (
        <div className="news-menu">
            <div className='news-menu_width1360'>
                <Link to={'./'}>
                    <div className="news-menu_logo">
                        <img src="https://www.unian.ua/images/unian-logo.svg" alt="" />
                    </div>
                    <div className="news-menu_logo-textTitle">
                        <p>Інформаційне агентство</p>
                    </div>
                </Link>
                <ul className='news-menu-main' >
                    <li><Link to={'/'} className={useExactMatch('/') ? 'active' : ''}>Головна</Link></li>
                    <li><Link to={'/war'} className={useExactMatch('/war') ? 'active' : ''}>Війна</Link></li>
                    <li><Link to={'./society'} className={useExactMatch('/society') ? 'active' : ''}>Україна</Link></li>
                    <li><Link to={'./politics'} className={useExactMatch('/politics') ? 'active' : ''}>Політика</Link></li>
                    <li><Link to={'./economics'} className={useExactMatch('/economics') ? 'active' : ''}>Економіка</Link></li>
                    <li><Link to={'./world'} className={useExactMatch('/world') ? 'active' : ''}>Світ</Link></li>
                    <li><Link to={'./ecology'} className={useExactMatch('/ecology') ? 'active' : ''}>Екологія</Link></li>
                    <li><Link to={'./sport'} className={useExactMatch('/sport') ? 'active' : ''}>Спорт</Link></li>
                    <li><Link to={'./science'} className={useExactMatch('/science') ? 'active' : ''}>Наука</Link></li>
                    <li><Link to={'./techno'} className={useExactMatch('/techno') ? 'active' : ''}>Техно і звязок</Link></li>
                    <li><Link to={'./lite'} className={useExactMatch('/lite') ? 'active' : ''}>Лайт</Link></li>
                    <li><Link to={'./games'} className={useExactMatch('/games') ? 'active' : ''}>Ігри</Link></li>
                    <li><Link to={'./incidents'} className={useExactMatch('/incidents') ? 'active' : ''}>Інциденти</Link></li>
                    <li><Link to={'./health'} className={useExactMatch('/health') ? 'active' : ''}>Здоровя</Link></li>
                    <li><Link to={'./tourism'} className={useExactMatch('/tourism') ? 'active' : ''}>Туризм</Link></li>
                    <li><Link to={'./curiosities'} className={useExactMatch('/curiosities') ? 'active' : ''}>Курйози</Link></li>
                    <li><Link to={'./pogoda'} className={useExactMatch('/pogoda') ? 'active' : ''}>Погода</Link></li>
                </ul>
            </div>
            <div className="news-menu-header" >
                <div className="news-menu-image" style={{padding: '10px', boxSizing: 'border-box'}} onClick={openMenu}>
                    <img src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" alt="" />
                </div>
                <Link to={'/'} onClick={UnClickleftMenu}>
                    <div className="news-menu-image">
                        <img src="https://www.unian.ua/images/unian-logo.svg" alt="" />
                    </div>
                </Link>
                <div className="news-menu-image" style={{padding: '10px', boxSizing: 'border-box'}}>
                    <img src="https://img.icons8.com/emoji/256/magnifying-glass-tilted-left-emoji.png" alt="" />
                </div>
            </div>
            {clickLeftMenu &&
                <div className='news-menu_width1150'>
                    <Link to={'./'} onClick={UnClickleftMenu}>
                        <div className="news-menu_logo">
                            <img src="https://www.unian.ua/images/unian-logo.svg" alt="" />
                        </div>
                        <div className="news-menu_logo-textTitle">
                            <p>Інформаційне агентство</p>
                        </div>
                    </Link>
                    <ul className='news-menu-main' onClick={UnClickleftMenu}>
                        <li><Link to={'./'}>Головна</Link></li>
                        <li><Link to={'./war'}>Війна</Link></li>
                        <li><Link to={'./society'}>Україна</Link></li>
                        <li><Link to={'./politics'}>Політика</Link></li>
                        <li><Link to={'./economics'}>Економіка</Link></li>
                        <li><Link to={'./world'}>Світ</Link></li>
                        <li><Link to={'./ecology'}>Екологія</Link></li>
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
                </div>
            }
        </div>
    )
};

export default NewsMenu;