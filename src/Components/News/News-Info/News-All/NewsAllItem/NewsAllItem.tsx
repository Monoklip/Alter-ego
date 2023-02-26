import './news-all-item.scss';

const NewsAllItem = (props: {elem: {title: string; date: string; }}) => {

    const {
        title,
        date
    } = props.elem;

    return(
        <div className='news-all-item'>
            <p>15:02 <span>{title}</span></p>
        </div>
    )
};

export default NewsAllItem;