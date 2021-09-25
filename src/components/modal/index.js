import React from 'react';
import './style.scss';
import useWatch from '../../utils/js/hooks/useWatch';

const PopupModal = (props) => {
    const [seconds, minutes, hours, state, toggleRun] = useWatch();

    const toggle = (e) => {
        e.stopPropagation();
        toggleRun();
        console.log(state);
    }

    return <div className="popup-modal">
        <div className="popup-modal__head">
            <h6 className="popup-modal__title">{props.title}</h6>
        </div>
        <div className="popup-modal__body">
            <div className="popup-modal__time-wrapper">
                <h3 className="popup-modal__time">{hours}:{minutes}:{seconds}</h3>
            </div>
            <div>
                <button onClick={toggle}>{state}</button>
                <button>reset</button>
            </div>
        </div>
    </div>
}

export default PopupModal;