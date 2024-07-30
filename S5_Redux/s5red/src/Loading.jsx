
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function Loading({ isLoading }) {
    return (
        <div>
            {isLoading && (<p>Loading... <FontAwesomeIcon icon={faSpinner}/></p>)}
            {!isLoading && (<p>Data loaded successfully</p>)}
        </div>
    );
}

export default Loading;

