import React from 'react';
import './style.scss';
import useWatch from '../../utils/js/hooks/useWatch';

const PopupModal = (props) => {
    const [seconds, minutes, hours, state, toggleRun, reset] = useWatch();

    const toggle = (e) => {
        e.stopPropagation();
        toggleRun();
    }

    const resetTime = (e) => {
        e.stopPropagation();
        reset();
    }

    const stamp = () => {
        props.setTime(hours,minutes,seconds);
    }

    const submit = <div><button onClick={stamp}>Submit</button></div>

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
                <button onClick={resetTime}>reset</button>
            </div>
            {seconds > 0 ? submit : null}
        </div>
    </div>
}

export default PopupModal;