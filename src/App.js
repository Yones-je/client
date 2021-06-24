import React, { useEffect, useState } from 'react'
import {
  Clock,
  Footer,
  Header,
  ParticipantList,
  ParticipantForm,
  TimerForm
} from './components'
import { getFromLocalStorage } from './utils';
import './styles/App.css';

const App = () => {
  const [participants, setParticipants] = useState(getFromLocalStorage('participants'));
  const [time, setTime] = useState(localStorage.getItem('timer') || '7');

  const onSubmit = category => category === 'name'
  ? setParticipants(getFromLocalStorage('participants')) 
  : setTime(localStorage.getItem('timer'));

 useEffect(() => {
  console.log(participants);
 },[participants])

  return (
    <div className="App">
     <Header />
     <div className="input-container" >
       <ParticipantForm onSubmit={category => onSubmit(category)} />
       <TimerForm onSubmit={category => onSubmit(category)}/>
     </div>
     <Clock time={time * 60}/>
     <ParticipantList participants={participants} />
     <Footer />
    </div>
  );
}

export default App;
