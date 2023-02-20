import NewsInfo from './News-Info/NewsInfo';
import NewsMenu from './News-menu/NewsMenu';
import './news.scss';

const News = () => {
    return(
        <div className="news">
            <NewsMenu/>
            <NewsInfo/>
        </div>
    )
};

export default News;