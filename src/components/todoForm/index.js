import React, {useState} from 'react';
const TodoForm = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(value);
        props.addItem(value);
        setValue('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <div className="todo-form__inner">
                Add item: <input className="todo-form__input" type="text" value={value} onChange={handleChange}/>
            </div>
        </form>
    )
}

export default TodoForm;