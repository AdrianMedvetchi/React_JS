import { PropTypes } from "prop-types";

function Message({ text, time, author}) {
    return (
        <div>
            <h3>{author}</h3>
            <p>{text}</p>
            <p>{time}</p>
        </div>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Message;