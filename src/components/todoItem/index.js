import React, {useEffect, useState} from 'react';
import PopupModal from '../modal';
import './style.scss';

const TodoItem = (props) => {
    const [id, setId] = useState('');
    const [done, setDone] = useState(false);
    const [text, setText] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

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

    const setTime = (hrs, mins, secs) => {
        setHours(hrs);
        setMinutes(mins);
        setSeconds(secs);
    }

    return <div className={`todo-item ${done ? 'todo-item--done': 'todo-item--yet'}`} onClick={showModal}>
        <div className="todo-item__modal">
            {openModal && <PopupModal title={text} setTime={setTime} /> }
        </div>
        <div className="todo-item__inner">
            <input className="todo-item__checkbox" onChange={() => toggleDone(id)} checked={done} type="checkbox" value={`${done}`} />
            <span className="todo-item__text">{text}</span>
            <span className="todo-item__time">{hours}:{minutes}:{seconds}</span>
        </div>
    </div>
}

export default TodoItem;