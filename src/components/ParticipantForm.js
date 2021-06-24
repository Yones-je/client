import React, { useState } from 'react';
import { addParticipantToLocalStorage } from '../utils';

const ParticipantForm = ({onSubmit}) => {

  const [participant, setParticipant] = useState('');

  const handleChange = e => {
    setParticipant(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (participant === '') return;
    addParticipantToLocalStorage(participant);
    onSubmit('name');
    setParticipant('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={participant} onChange={handleChange} className="form__input-text" />
      <input type="submit" value="+" className="form__submit" />
    </form>
  )
}

export default ParticipantForm;
