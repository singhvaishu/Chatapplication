// import React from 'react'
// const Login = () => {
//     return (
//         <div className='formContainer'>
//             <div className='formWrapper'>
//                 <span className="logo">SnapConvo</span>
//                 <span className="title">Login</span>
//                 <form>
//                     <input type="email" placeholder='email' />
//                     <input type="password" placeholder='password' />
//                     <button>Login</button>
//                 </form>
//                 <p>You don't have an account ? Please Register</p>
//             </div>

//         </div>
//     )
// }

// export default Login

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (err) {
            setErr(true);
        }
    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Snap Canvo</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;