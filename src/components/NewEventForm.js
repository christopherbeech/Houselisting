import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [price, setPrice] = useState('')
    const [rooms, setRooms] = useState('')
    const [size, setSize] = useState('')
    const [location, setLocation] = useState('')



    // const handleChange = (e) => {
    //     // console.log(e.target.value)
    //     setTitle(e.target.value)
    // }

    const resetForm = () => {
        setTitle('');
        setDate('');
        setPrice('');
        setRooms('');
        setSize('');
        setLocation('')

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const  event = {
            title: title,
            date: date,
            price: price,
            rooms: rooms,
            size: size,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        
        // console.log(event)
        addEvent(event);
        resetForm();
    }

    return (
       <form className="new-event-form" onSubmit={handleSubmit}>
           <label>
                <span>Title</span>  
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}
                    required
                />
           </label>
           <label>
               <span>Date</span>
               <input
                    type="date" 
                    onChange={(e) => setDate(e.target.value)} 
                    value={date} 
                    required
                />
           </label>
           <label>
                <span>Price</span>  
                <input 
                    type="text" 
                    onChange={(e) => setPrice(e.target.value)} 
                    value={price}
                    required
                />
           </label>
           <label>
               <span>Number of Rooms</span>
               <input
                    type="text" 
                    onChange={(e) => setRooms(e.target.value)} 
                    value={rooms} 
                    required
                />
           </label>
           <label>
                <span>Size (sqft)</span>  
                <input 
                    type="text" 
                    onChange={(e) => setSize(e.target.value)} 
                    value={size}
                    required
                />
           </label>
           <label>
               <span>Location<br /> (city, state, zipcode)</span>
               <input
                    type="text" 
                    onChange={(e) => setLocation(e.target.value)} 
                    value={location} 
                    required
                />
           </label>
            <div className='btn-container'>
                <button>Submit</button>
                <button onClick={resetForm} >Reset</button>
            </div>
       </form>
    )
}
