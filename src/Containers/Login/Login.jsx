import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const onPasswordChange = (params) => {
        setState({ ...state, password: params.target.value });
    }

    const onEmailChange = (params) => {
        setState({ ...state, email: params.target.value });
    }

    const submitForm = () => {
        if(state.email === "admin@gmail.com" && state.password === "Admin") {
            navigate('/home');
        }
    }

    return(
        <div>
            <div>
                <h3>Email</h3>
                <br></br>
                <textarea 
                    onChange={onEmailChange}
                />
            </div>
            <div>
                <h3>Password</h3>
                <br></br>
                <input
                    type='password' 
                    onChange={onPasswordChange}
                />
            </div>

            <button
                onClick={submitForm}
            >
                Login
            </button>
        </div>
    )
}

export default Login;