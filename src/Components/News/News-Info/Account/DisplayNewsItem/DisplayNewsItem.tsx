import { SetStateAction, useState } from 'react';
import './display-news-item.scss';

const DisplayNewsItem = (props: { elem: { title: string; image: string; details: string; id: number; }; item: string; getData: any; }) => {

    const {
        title,
        image,
        details,
        id
    } = props.elem;

    const item = props.item;

    const [renameNews, setRenameNews] = useState<boolean>(false);
    const [border, setBorder] = useState<string>('1px solid #efa205');

    const [newTitle, setNewTitle] = useState<string>('');
    const [newDetails, setNewDetails] = useState<string>('');
    const [newImage, setNewImage] = useState<string>('');

    const newTitleHandleChange = (event: { target: { value: SetStateAction<string> }}) => {
        setNewTitle(event.target.value);
    };
    const newDetailsHandleChange = (event: { target: { value: SetStateAction<string> }}) => {
        setNewDetails(event.target.value);
    };
    const newImageHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNewImage(event.target.value);
    };

    const renameBtnSave = async() => {
        if(newTitle.trim() != '' && newDetails.trim() != '' && newImage.trim() != ''){
            await fetch(`http://localhost:3000/${item}/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: newTitle,
                    image: newImage,
                    details: newDetails
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            }).finally(()=>{
                props.getData();
                setRenameNews(!renameNews);
                setBorder('1px solid #efa205');
            });
        }
        else{
            alert('Потрібно зробити зміни у всіх полях');
        }
    };

    const renameBtnOpen = () => {
        setRenameNews(!renameNews);
        setBorder('1px solid red');
    };

    const renameBtnClose =() => {
        setRenameNews(!renameNews);
        setBorder('1px solid #efa205');
    };

    return(
        <div className='display-news-item' style={{border: `${border}`}} >
            <div className="display-news-item_title">
                <h1 onClick={renameBtnOpen}>{title}</h1>
            </div>
           {renameNews && 
                <div className="display-news-item-renameBox">
                    <p>Залоговок</p>
                    <input type="text" onChange={newTitleHandleChange} defaultValue={title}/>
                    <p>Інформація</p>
                    <textarea onChange={newDetailsHandleChange} defaultValue={details}></textarea>
                    <p>Посилання на фото (URL)</p>
                    <input type="text" onChange={newImageHandleChange} defaultValue={image}/>
                    <div className="display-news-item-renameBox-btns">
                        <button className='btn_save' onClick={renameBtnSave}>Зберегти</button>
                        <button className='btn_cancel' onClick={renameBtnClose}>Відмінити</button>
                    </div>
                    
                </div>
           }
        </div>
    )
};

export default DisplayNewsItem;