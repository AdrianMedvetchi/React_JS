import React from 'react';
import './Message.css';
function Message({author, message, date}) {
    return ( 
        <div className="message">
            <h1 className="message__author">{author}</h1>
            <p className="message__text">{message}</p>
            <p className="message__date">{date}</p>
        </div>
     );
}

export default Message;