import './elem-item-title.scss';
import { Link } from 'react-router-dom';

const ElemItemTitle = (props: {elem: { title: string; image: string; details: string; date: string; id: number; }; item: string;}) => {

    const item = props.item;

    const {
        title,
        details,
        image,
        date,
        id
    } = props.elem;

    return(
        <Link to={`/${item}/${title}/${id}`}>
            <div className='elem-item-title' style={{backgroundImage: `url(${image})`}}>
                <h1>{title}</h1>
                <p>{date}</p>
            </div>
        </Link>
    )
};

export default ElemItemTitle;