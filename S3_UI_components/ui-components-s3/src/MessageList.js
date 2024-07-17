import { messages } from './data.js';
import Message from './Message';

function MessageList() {
    return (
        <div>
            {messages.map(msg => (
                <Message key={msg.id} {...msg} />
            ))}
        </div>
    )
}

export default MessageList;