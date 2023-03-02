import './no-page.scss';
import NewsAll from "../News-All/NewsAll";

const NoPages =() => {
    return(
        <>
            <div className='no-page'>
                <h1>Сторінки не існує</h1>
            </div>
            <NewsAll/>
        </>
        
    )
};

export default NoPages;