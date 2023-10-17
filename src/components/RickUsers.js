import React, {useEffect, useState} from 'react';
import {RickUser} from "./RickUser";

const RickUsers = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]')
            .then(resp => resp.json())
            .then(value => setUsers(value))
    }, [])

    return (
        <div>
            <h1>2. Створити компонент який описує персонажа (id,name,status,species,gender,image) з цього апі 6
                персонажів</h1>
            <div className={'box'}>
                {
                    users.map((user, index) => <RickUser key={index} user={user}/>)
                }
            </div>
        </div>
    );
};

export {RickUsers};