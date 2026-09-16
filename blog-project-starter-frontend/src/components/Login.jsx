import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../config/firebase';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {

        auth.onAuthStateChanged(function(user){
            if(user){
                navigate("/home")
            }else{
                navigate("/login")
            }
        })
        window.scrollTo(0, 0);
    }, []);

    

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        signInWithEmailAndPassword(auth, email, password)
            .then(function(){
                alert("login success")
                navigate('/home')
            })
            .catch(function(){
                const message = "Invalid credentials. Enter a valid email and password.";
                setError(message);
                alert(message);
            });
    };

    return (
        <div className="auth-page page-container">
            <form onSubmit={handleLogin} className="auth-form surface">
                <p className='eyebrow'>Welcome back</p><h1 className="section-heading">Log in.</h1>
                <div className="form-field">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="field"
                    />
                </div>
                <div className="form-field">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="field"
                    />
                </div>
                {error && <p className="form-error" role="alert">{error}</p>}
                <p className='auth-switch' onClick={() => navigate("/signup")}>New user? Register here</p>
                <button type="submit" className="button-style">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
