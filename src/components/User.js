import React from "react";
import './style.css';
function User( props ){
    return(
        <div className="user">
            <p><img alt="img" className="user--img" src={props.picture}></img></p>
            <p className="user--name">
                {props.name && props.surname ? 
                    <p>{props.name} {props.surname}</p> :
                    'Nie przekazano imienia i nazwiska' } 
            </p>
            <p>{props.city}, {props.street || 'brak'} {props.street_number}</p>
            <p>{props.email}</p>
            <p>registered: {new Date(props.registered).toLocaleDateString('pl')}</p>
        </div>
    )
}

export default User;