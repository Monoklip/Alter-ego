import { useState } from 'react';
import NewsInfo from './News-Info/NewsInfo';
import NewsMenu from './News-menu/NewsMenu';
import './news.scss';

const News = () => {

    const [clickLeftMenu, setClickLeftMenu] = useState<boolean>(false);

    const UnClickMenu = () => {
        setClickLeftMenu(false);
    };
    
    return(
        <div className="news">
            <NewsMenu clickLeftMenu={clickLeftMenu} setClickLeftMenu={setClickLeftMenu} UnClickMenu={UnClickMenu}/>
            <NewsInfo UnClickMenu={UnClickMenu}/>
        </div>
    )
};

export default News;