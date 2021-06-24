const addParticipantToLocalStorage = (participant) => {
    const participants = JSON.parse(localStorage.getItem('participants')) || [];
    participants.push(participant);
    localStorage.setItem('participants', JSON.stringify(participants));
  };
  
const addTimeToLocalStorage = time => {
  localStorage.setItem('timer', time);
}

  export {
    addParticipantToLocalStorage,
    addTimeToLocalStorage
  };