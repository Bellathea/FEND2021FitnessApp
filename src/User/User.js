import React from 'react';

const user = (props) => {
    return (
    <h1>Guten<br/>{props.greeting}<br/>{props.name},</h1>
    )
};

export default user;