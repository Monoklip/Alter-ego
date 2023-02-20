import NewsAll from '../../News-All/NewsAll';
import './war-pages-url.scss';

const WarPagesUrl = (props: {elem: { title: string; details: string; id: number; image: string; }}) => {

    const {
        title,
        details,
        image,
        id
    } = props.elem;

    return(
        <div className='war-pages-url'>
            <div className='war-pages-url_item'>
                <h1>{title}</h1>
                <div className="war-pages-url_item-image">
                    <img src={`${image}`} alt="" />
                </div>
                <p>{details}</p>
            </div>
            <NewsAll/>
        </div>
    )
};

export default WarPagesUrl;