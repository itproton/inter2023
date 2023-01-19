import React, { useState } from 'react';


function login(username: string, password: string) {
    return username === 'foo' && password === 'bar' ?
        Promise.resolve() :
        Promise.reject(new Error('Error incorrect'));
}

/**
 * # Login form
 * - you have incomplete login form
 * - don't add any other react elements, don't use refs
 * 
 * Tasks:
 * - trigger api imported login method with required data
 * - VALIDATE: disable login if email is blank or password under 5 letters
 * - disable login button after login is called, waiting on login function response
 * - show error when login fails. clear error when user types
 * - show alert when login succeed 
 * 
 * Bonus:
 * - focus username
 * @returns 
 */
export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};
