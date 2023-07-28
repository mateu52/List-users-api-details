import React from "react";
import { useParams } from "react-router-dom";
import './style/style.css';

function UserDeatils({ users }){
    const { id } = useParams();
    const { name, location, email, registered, picture } = users.find((user) => user.login.uuid === id)
    
    return(
        <div className="user user--p user-details">
            <p className="user--p"><img alt="img" className="user--img" src={picture.large}></img></p>
            <p className="user--name user--p">
                {name.first && name.last ? 
                    <p>{name.first} {name.last}</p> :
                    'Nie przekazano imienia i nazwiska' } 
            </p>
            <p className="user--p">{location.city}, {location.street.name || 'brak'} {location.street.number}</p>
            <p className="user--p">{email}</p>
            <p className="user--p">registered: {new Date(registered.date).toLocaleDateString('pl')}</p>
        </div>
    )
}

export default UserDeatils;