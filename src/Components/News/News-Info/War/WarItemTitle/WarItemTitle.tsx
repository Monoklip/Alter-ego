import './war-item-title.scss';
import { Link } from 'react-router-dom';

const WarItemTitle = (props: {elem: { title: string; image: string; details: string; date: string; id: number; }}) => {

    const {
        title,
        details,
        image,
        date,
        id
    } = props.elem;

    return(
        <Link to={`/war/${title}/${id}`}>
            <div className='war-item-title' style={{backgroundImage: `url(${image})`}}>
                <h1>{title}</h1>
                <p>{date}</p>
            </div>
        </Link>
    )
};

export default WarItemTitle;