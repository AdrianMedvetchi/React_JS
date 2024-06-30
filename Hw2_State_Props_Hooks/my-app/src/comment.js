import React, { useState, useEffect } from 'react';
import './CommentList.css'; // Import the CSS file for styles

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addComment = () => {
    if (text.trim() !== '') { // Prevent adding empty comments
      setComments([...comments, { id: Date.now(), text }]);
      setText(''); // Clear the input after adding a comment
    }
  };

  const removeComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="comments-list-container">
      <h1 className="title">Список комментариев</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Введите ваш комментарий здесь"
          value={text}
          onChange={handleChange}
          className="input"
        />
        <button onClick={addComment} className="add-button">Добавить комментарий</button>
      </div>
      <ul className="comments-list">
        {comments.map(comment => (
          <li key={comment.id} className="comment-item">
            <span className="comment-text">{comment.text}</span>
            <button onClick={() => removeComment(comment.id)} className="remove-button">Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
