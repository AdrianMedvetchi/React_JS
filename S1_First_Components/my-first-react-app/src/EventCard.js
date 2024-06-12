import React from "react";
import './EventCard.css';

const EventCard = ({ name, date, location }) => {
  return (
    <div className="event-card">
      <h2>{name}</h2>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default EventCard;
