import React, { useState } from 'react';

const SetParticipants = ({onSubmit}) => {
  const [participants, SetParticipants] = useState()

  return (
    <form onSubmit={}>
      <input type="text" placeholder="Name" onChange={} className="form__input-text" />
      <input type="submit" value="+" className="form__submit" />
    </form>
  )
}

export default SetParticipants
