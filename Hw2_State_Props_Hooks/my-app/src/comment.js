import { useState } from 'react';
import './CommentList.css';

function CommentList() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addComment = () => {
    if (text.trim() !== '') {
      setComments([...comments, text]);
      setText('');
    }
  };

  const removeComment = (commentToRemove) => {
    setComments(comments.filter((comment) => comment !== commentToRemove));
  };

  return (
    <div className="comment-list-container">
      <h1 className="title">Comment List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your text here"
          value={text}
          onChange={handleChange}
          className="input"
        />
        <button onClick={addComment} className="add-button">Add Comment</button>
      </div>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment-item">
            <span className="comment-text">{comment}</span>
            <button onClick={() => removeComment(comment)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
