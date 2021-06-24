import React, { useState } from 'react';
import { addTimeToLocalStorage } from '../utils';

const TimerForm = ({onSubmit}) => {
  const [time, setTime] = useState('7');

  const handleChange = e => {
    setTime(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (time === '') return;
    addTimeToLocalStorage(time);
    onSubmit('timer');
  };
  
  return (
      <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Minutes" value={time} onChange={handleChange} className="form__input-text" />
      <input type="submit" value="Set" className="form__submit" />
    </form>
  )
};

export default TimerForm;
