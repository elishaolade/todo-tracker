import React, {useEffect, useState} from 'react';
import PopupModal from '../modal';
import './style.scss';

const TodoItem = (props) => {
    const [id, setId] = useState('');
    const [done, setDone] = useState(false);
    const [text, setText] = useState('');
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setId(props.id);
        setDone(props.done);
        setText(props.text);
    }, [props.done, props.id])

    const toggleDone = (id) => {
        props.toggleComplete(id);
    }

    const showModal = () => {
        setOpenModal(!openModal);
    }

    return <div className={`todo-item ${done ? 'todo-item--done': 'todo-item--yet'}`} onClick={showModal}>
        <div className="todo-item__modal">
            {openModal && <PopupModal title={text} /> }
        </div>
        <div className="todo-item__inner">
            <input className="todo-item__checkbox" onChange={() => toggleDone(id)} checked={done} type="checkbox" value={`${done}`} />
            <span className="todo-item__text">{text}</span>
        </div>
    </div>
}

export default TodoItem;