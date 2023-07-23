import './App.css';
import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDeatils from './components/UserDetails';
function App() {
  const [ users, setUsers ] = useState([]);
  const [ isLoading, setLoading ] = useState(true)
    useEffect(() => {
      const timer = setTimeout(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
              setUsers(data.results)
              setLoading(false)
            })
            .catch(error => console.log(error))
      },1000);
      return () => clearTimeout(timer);
      
    },[])
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <p>
              <Link to="/" style={{ textDecoration: "none", color: "black"}}>Lista</Link>
            </p>
          </nav>
          <Routes>
            <Route path="/users/:id" element={<UserDeatils users={users} />} />
            <Route exact path="/" element={<UserList users={users} loading={isLoading} />} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
