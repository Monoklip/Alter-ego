import './elem-from-home-pages.scss';
import { Link } from 'react-router-dom';

const ElemFromHomePages = (props: {elem: {title: string; image: string; id: number; }; item: string; }) => {

    const item = props.item;

    const {
        title,
        image,
        id
    } = props.elem;

    return (
        <div className='elem-from-home-pages'>
            <Link to={`/${item}/${title}/${id}`}>
                <div className="elem-from-home-pages_image" style={{backgroundImage: `url(${image})`}}></div>
                <div className='elem-from-home-pages_title'>{title}</div>
            </Link>
        </div>
    )
};

export default ElemFromHomePages;