import React from 'react';

const Alert = (props) => {
    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: '450px',
        height: '50px',
        marginTop: '15px',
        padding: '15px',
        borderRadius: '8px',
    }
    return (
        <div style={style}>
            {props.title}
        </div>

    );
};

export default Alert;