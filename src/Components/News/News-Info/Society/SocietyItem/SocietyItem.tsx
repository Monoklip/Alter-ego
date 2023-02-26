import './society-item.scss';
import { Link } from 'react-router-dom';

const SocietyItem = (props: { elem: { title: string; details: string; image: string; date: string; id: number; }; }) => {

    const {
        title,
        details,
        image,
        date,
        id
    } = props.elem;

    return(
        <Link to={`/society/${title}/${id}`} className='society-item'>
            <div className="society-item_image" style={{ backgroundImage: `url(${image})`}}></div>
            <div className="society-item_content">
                <div className="society-item_content-title">{title}</div>
                <div className="society-item_content-date">{date}</div>
            </div>
        </Link>
    )
};

export default SocietyItem;