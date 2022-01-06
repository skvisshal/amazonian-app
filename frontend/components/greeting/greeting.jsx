import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="greeting-message">
            <div>Hello, Sign in</div>
            <Link className="auth-link" to="/signup">Sign Up</Link>{' or '}
            <Link className="auth-link" to="/login">Login</Link>
        </div>
        
    );
    const personalGreeting = () => (
        <div className="greeting-message">
            <div>Hello, {currentUser.name.split(' ')[0]}</div>
            <span className="signout-button" onClick={logout}>Sign Out</span>
        </div>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
