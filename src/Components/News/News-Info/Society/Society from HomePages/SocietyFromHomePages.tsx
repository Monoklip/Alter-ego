import './society-from-home-pages.scss';
import { Link } from 'react-router-dom';

const SocietyFromHomePages = (props: {elem: {title: string; image: string; id: number; }}) => {

    const {
        title,
        image,
        id
    } = props.elem;

    return (
        <div className='society-from-home-pages'>
            <Link to={`/society/${title}/${id}`}>
                <div className="society-from-home-pages_image" style={{backgroundImage: `url(${image})`}}></div>
                <div className='society-from-home-pages_title'>{title}</div>
            </Link>
        </div>
    )
};

export default SocietyFromHomePages;