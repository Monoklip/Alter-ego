import { SetStateAction, useState } from 'react';
import './new-news.scss';

const NewNews = (props: { item: string; getData: any; }) => {

    const item = props.item;

    const [title, setTitle] = useState<string>('');
    const [details, setDetails] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const [titleValue, setTitleValue] = useState<string>('');
    const [detailsValue, setDetailsValue] = useState<string>('');
    const [imageValue, setImageValue] = useState<string>('');
    
    const titleHandleChange = (event: { target: { value: SetStateAction<string> }}) => {
        setTitle(event.target.value);
        setTitleValue(event.target.value);
    };

    const detailsHandleChange = (event: { target: { value: SetStateAction<string> }}) => {
        setDetails(event.target.value);
        setDetailsValue(event.target.value);
    };

    const imageHandleChange = (event: { target: { value: SetStateAction<string> }}) => {
        setImage(event.target.value);
        setImageValue(event.target.value);
    };

    const newNews = async() => {
        if(title.trim() !== '' && details.trim() !== '' && image.trim() !== ''){
            await fetch (`http://localhost:3000/${item}`, {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    details: details,
                    image: image
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            }).finally(()=>{
                props.getData();
            });

            setTitle('');
            setDetails('');
            setImage('');

            setTitleValue('');
            setDetailsValue('');
            setImageValue('');
        }
        else{
            alert('Заповніть всі поля');
        }
    };

    return(
        <div className='new-news'>
            <h1>Добавити новину</h1>
            <p>Введіть заголовок</p>
            <input type="text" onChange={titleHandleChange} value={titleValue}/>
            <p>Інформація</p>
            <textarea onChange={detailsHandleChange} value={detailsValue}></textarea>
            <p>Посилання на фото (URL)</p>
            <input type="text" onChange={imageHandleChange} value={imageValue}/>
            <button onClick={newNews}>Добавити</button>
        </div>
    )
};

export default NewNews;