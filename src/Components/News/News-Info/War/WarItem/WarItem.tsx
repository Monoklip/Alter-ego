import './war-item.scss';
import { Link } from 'react-router-dom';

const WarItem = (props: { elem: { title: string; details: string; image: string; date: string; id: number; }; }) => {

    const {
        title,
        details,
        image,
        date,
        id
    } = props.elem;

    return(
        <Link to={`/war/${title}/${id}`} className='war-item'>
            <div className="war-item_image" style={{ backgroundImage: `url(${image})`}}></div>
            <div className="war-item_content">
                <div className="war-item_content-title">{title}</div>
                <div className="war-item_content-date">{date}</div>
            </div>
        </Link>
    )
};

export default WarItem;