import './war-from-home-pages.scss';
import { Link } from 'react-router-dom';

const WarFromHomePages = (props: {elem: {title: string; image: string; id: number; }}) => {

    const {
        title,
        image,
        id
    } = props.elem;

    return (
        <div className='war-from-home-pages'>
            <Link to={`/war/${title}/${id}`}>
                <div className="war-from-home-pages_image" style={{backgroundImage: `url(${image})`}}></div>
                <div className='war-from-home-pages_title'>{title}</div>
            </Link>
        </div>
    )
};

export default WarFromHomePages;