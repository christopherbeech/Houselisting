import React from 'react';
import styles from './EventList.module.css';

export default function EventList({events, handleClick}) {

    return(
        <div>
            {events.map((event, index) => (
            <div className={styles.card} key={event.id}>
                <h2>Title:</h2><p>{event.title}</p>
                <br />
                <h2>Date Posted:</h2><p>{event.date}</p>
                <br />
                <h2>Price:</h2><p>{event.price}</p>
                <br />
                <h2>Num of Rooms:</h2><p>{event.rooms}</p>
                <br />
                <h2>Size</h2><p>{event.size} sqft</p>
                <br />
                <h2>Location:</h2><p>{event.location}</p>
                <br />

                <button onClick={() => handleClick(event.id)}>Delete Button</button>
            </div>
            ))}
        </div>
    )
}
