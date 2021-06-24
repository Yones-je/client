import getFromLocalStorage from "./getFromLocalStorage";

const removeFromLocalStorage = id => { 
  const participants = getFromLocalStorage('participants');

  const newParticipants = participants.filter(el => el.id !== id);
  localStorage.setItem('participants', JSON.stringify(newParticipants));
}

export default removeFromLocalStorage;