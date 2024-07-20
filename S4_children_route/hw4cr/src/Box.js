import { Children } from "react";

function Box({ children }) {
    return (
        <div style={
            {
                width: '200px',
                height: '200px',
                backgroundColor: 'lightblue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                margin: '10px'
            }
        }>
            {children}
        </div>
    );
}

export default Box;

