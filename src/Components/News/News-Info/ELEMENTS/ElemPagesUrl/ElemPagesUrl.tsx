import NewsAll from '../../News-All/NewsAll';
import './elem-pages-url.scss';

const ElemPagesUrl = (props: {elem: { title: string; details: string; id: number; image: string; }}) => {

    const {
        title,
        details,
        image,
        id
    } = props.elem;

    return(
        <div className='elem-pages-url'>
            <div className='elem-pages-url_item'>
                <h1>{title}</h1>
                <div className="elem-pages-url_item-image">
                    <img src={`${image}`} alt="" />
                </div>
                <p>{details}</p>
            </div>
            <NewsAll/>
        </div>
    )
};

export default ElemPagesUrl;