import React from 'react';

const kcal = (props) => {
    return (
        <div>
            <p>{props.calories} kcal · {props.time} Min. · {props.categorie}</p>
        </div>   
    )
};

export default kcal;
