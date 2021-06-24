import React from 'react'
import {
  Clock,
  Footer,
  Header,
  ParticipantList,
  SetParticipants,
  SetTimer
} from './components'
import './styles/App.css';

const App = () => {
  
  return (
    <div className="App">
     <Header />
     <div className="input-container" >
       <SetParticipants /> 
       <SetTimer />
     </div>
     <Clock />
     <ParticipantList />
     <Footer />
    </div>
  );
}

export default App;
