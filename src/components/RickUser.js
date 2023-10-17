import React from 'react';

const RickUser = ({user}) => {
    console.log(user)
    return (
        <div>
            <div className={'simpsons'}>
                <h3>Id: {user.id}, {user.name},<br/> Status: {user.status}</h3>
                <img src={user.image} alt={user.name}/>
                <h4>Gender: {user.gender}</h4>
                <div>Species: {user.species} </div>
            </div>
        </div>
    );
};

export {RickUser};