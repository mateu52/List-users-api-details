import React from 'react';
import User from './User';
import { Link } from 'react-router-dom';
import './style.css';

function UserList({ users }){
    return(
        <div className='users'>
            {users.map((user) => {
                return(
                    <div key={user.login.uuid}>
                        <Link to={`/users/${user.login.uuid}`}>
                            <User
                                name={user.name.first}
                                surname={user.name.last}
                                street={user.location.street.name}
                                street_number={user.location.street.number} //ulica, miasto
                                city={user.location.city}
                                email={user.email}
                                registered={user.registered.date}
                                picture={user.picture.large}
                            />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default UserList;