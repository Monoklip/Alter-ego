import './statistic-item.scss';

const StatisticItem = (props: { elem: { name: string; die: number; diePlus: number; image: string; }; }) => {

    const {
        name,
        die,
        diePlus,
        image 
    } = props.elem;

    return(
        <div className="war_item">
            <div className="war_item-count">
                <div className="war_item-count_image">
                    <img src={`${image}`} alt="" />
                </div>
                <div className="war_item-count_num">
                    <h1>{die}</h1>
                    <p>+{diePlus}</p>
                </div>
            </div>
            <div className="war_item-count_name">{name}</div>
        </div>
    )
};

export default StatisticItem;