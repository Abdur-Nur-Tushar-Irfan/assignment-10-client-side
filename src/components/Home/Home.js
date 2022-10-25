import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const Home = () => {
    const {user} =useContext(AuthContext)
    return (
        <div>
           <h1>This is Home Page {user?.displayName}</h1> 
        </div>
    );
};

export default Home;