import React from "react";
import './style.css';
import { useParams } from 'react-router-dom';
function UserDeatils({ users }){
    const { id } = useParams();
    const { name, location, email, registered, picture } = users.find((user) => user.login.uuid === id)
    return(
        <div className="user">
            <p><img alt="img" className="user--img" src={picture.large}></img></p>
            <p className="user--name">
                {name.first && name.last ? 
                    <p>{name.first} {name.last}</p> :
                    'Nie przekazano imienia i nazwiska' } 
            </p>
            <p>{location.city}, {location.street.name || 'brak'} {location.street.number}</p>
            <p>{email}</p>
            <p>registered: {new Date(registered.date).toLocaleDateString('pl')}</p>
        </div>
    )
}

export default UserDeatils;