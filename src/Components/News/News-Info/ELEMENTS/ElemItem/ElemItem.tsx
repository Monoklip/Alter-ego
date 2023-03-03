import './elem-item.scss';
import { Link } from 'react-router-dom';

const ElemItem = (props: { elem: { title: string; details: string; image: string; date: string; id: number; }; item: string; }) => {

    const item = props.item;

    const {
        title,
        details,
        image,
        date,
        id
    } = props.elem;

    return(
        <Link to={`/${item}/${title}/${id}`} className='elem-item'>
            <div className="elem-item_image" style={{ backgroundImage: `url(${image})`}}></div>
            <div className="elem-item_content">
                <div className="elem-item_content-title">{title}</div>
                <div className="elem-item_content-date">{date}</div>
            </div>
        </Link>
    )
};

export default ElemItem;