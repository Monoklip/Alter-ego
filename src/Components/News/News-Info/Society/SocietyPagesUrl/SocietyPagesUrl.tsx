import NewsAll from '../../News-All/NewsAll';
import './society-pages-url.scss';

const SocietyPagesUrl = (props: {elem: { title: string; details: string; id: number; image: string; }}) => {

    const {
        title,
        details,
        image,
        id
    } = props.elem;

    return(
        <div className='society-pages-url'>
            <div className='society-pages-url_item'>
                <h1>{title}</h1>
                <div className="society-pages-url_item-image">
                    <img src={`${image}`} alt="" />
                </div>
                <p>{details}</p>
            </div>
            <NewsAll/>
        </div>
    )
};

export default SocietyPagesUrl;