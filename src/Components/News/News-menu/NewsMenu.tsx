import './news-menu.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NewsMenu = (props: { clickLeftMenu: any; setClickLeftMenu: any; UnClickMenu: any }) => {

    const {
        clickLeftMenu,
        setClickLeftMenu,
        UnClickMenu
    } = props;

    const openMenu = () => {
        setClickLeftMenu(!clickLeftMenu);
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
                <ul className='news-menu-main'>
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
            <div className="news-menu-header" >
                <div className="news-menu-image" style={{padding: '10px', boxSizing: 'border-box'}} onClick={openMenu}>
                    <img src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" alt="" />
                </div>
                <Link to={'/'} onClick={UnClickMenu}>
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