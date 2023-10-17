import React from 'react';

const Simpson = ({simpson}) => {
    return (
        <div>
            <div className={'simpsons'} id={'simpson'}>
                <h2>{simpson.name} <br/> {simpson.surname}</h2>
                <img src={simpson.photo} alt={simpson.name}/>
                <h4>Age: {simpson.age}</h4>
                <div>{simpson.info} </div>
            </div>
        </div>
    );
};

export {Simpson};