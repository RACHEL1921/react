//rfc raccourci extension
import { useState } from 'react';
import React, { Fragment } from 'react'

export default function TaskForm(props) {
    const [textEntered, setTextEntered] = useState('');

    const onChangeHandler = function (event) {
    setTextEntered(event.target.value);
    };


    const submitHandler = function(event){
        event.preventDefault();
        props.createTask(textEntered);
        setTextEntered('');
        };

        console.log('Text Entered :', textEntered);
    

  return (
    <>
     <form
     onSubmit={submitHandler}
     className="my-4 form-floating">
     <input
        type="text"
        name="task"
        className="form-control"
        onChange={onChangeHandler}
        />
        <label htmlFor="task">Enter a task</label>
        <input type="submit" value="Save" />
     </form>

        <div className='d-grid gap-2 d-md-block'>
            <button
            onClick={submitHandler}
            type="button"
            className="btn py-2 btn-primary me-md-3">
                Add
            </button>
            <button
            onClickCapture={() => props.searchTask(textEntered)}
            type="button"
            className="btn py-2 btn-secondary">
                Get Tasks
            </button>

        </div>
        </>
  )
}
