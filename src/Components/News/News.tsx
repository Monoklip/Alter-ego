import { useState } from 'react';
import NewsInfo from './News-Info/NewsInfo';
import NewsMenu from './News-menu/NewsMenu';
import './news.scss';

const News = () => {

    const [clickLeftMenu, setClickLeftMenu] = useState<boolean>(false);

    const UnClickleftMenu = () => {
        setClickLeftMenu(false);
    };
    
    return(
        <div className="news">
            <NewsMenu clickLeftMenu={clickLeftMenu} setClickLeftMenu={setClickLeftMenu} UnClickleftMenu={UnClickleftMenu}/>
            <NewsInfo UnClickleftMenu={UnClickleftMenu}/>
        </div>
    )
};

export default News;