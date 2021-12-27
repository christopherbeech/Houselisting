import './App.css';
import {useState} from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);
  
  const addEvent = (event) => {
    setEvents((prevEvents) => {
       return [...prevEvents, event]
    })

    setShowModal(false)
  }

  const handleClick = (id) => {
      setEvents((prevEvents) => {
        return prevEvents.filter((event) => {
          return id !== event.id;
        })
      })
    console.log(id)
  }


  const subtitle ="Create a property listing today!"

  return (
    <div className="App">
      <Title title="Property Listing" subtitle={subtitle}/>
      {showEvents && ( 
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>Show events</button>
      </div>)}
      {showEvents && <EventList events={events} handleClick={handleClick} />}


        {showModal && <Modal isSalesModal={true}>
          <NewEventForm  addEvent={addEvent} />
        </Modal>}
        <br />
        <br />
        <div>
          <button onClick={() => setShowModal(true)}>Add New Event</button>
        </div>
    </div>
  );
}

export default App;
