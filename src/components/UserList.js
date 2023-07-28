import React from 'react';
import User from './User';
import { Link } from 'react-router-dom';
import './style/style.css';
import { Eclipse } from "react-loading-io";
function UserList({ users, loading }){
    return(
        <div>
        {loading ? <Eclipse size={164} /> :
        <div className='users'>
            {users.map((user) => {
                return(
                    <div key={user.login.uuid} className='user-container'>
                        <Link to={`/users/${user.login.uuid}`}>
                            <User loading={loading}
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
        }
        </div>
    )
}

export default UserList;