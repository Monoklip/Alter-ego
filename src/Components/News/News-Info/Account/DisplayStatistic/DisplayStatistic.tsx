import { SetStateAction, useState } from 'react';
import './display-statistic.scss';

const DisplayStatistic = (props: { elem: { name: string; image: string; die: number; diePlus: number; id: number; }; getStatistic: () => void; }) => {

    const {
        name,
        image,
        die,
        diePlus,
        id
    } = props.elem;

    const [newDie, setNewDie] = useState(0);
    const [value, setValue] = useState('');

    const newDieHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNewDie(event.target.value as unknown as number);
        setValue(event.target.value);
    };


    const getStatisticItem = async() => {
        await fetch(`http://localhost:3000/home/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                image: image,
                die: Number(die) + Number(newDie),
                diePlus: Number(newDie),
                name: name,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        props.getStatistic();

        setNewDie('' as unknown as number);
        setValue('');
    };

    return(
        <div className='display-statistic'>
            <div className="display-statistic_count">
                <img src={`${image}`} alt="" />
                <span>{die}</span>
            </div>
            <h1>{name}</h1>
            <div className="display-statistic_btn">
                <input type="text" placeholder='К-сть' onChange={newDieHandleChange} value={value}/>
                <button onClick={getStatisticItem}>Змінити</button>
            </div>
        </div>
    )
};

export default DisplayStatistic;