import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css'
const Register = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        if (username === "user" && password === "1234") {
            // Register 버튼 클릭 시, 부모 컴포넌트에서 전달받은 콜백 호출
            onRegister(username, password);
            // Login 페이지로 이동
            navigate('/login');
        }

    };

    return (
        <div className="register-container">
            <h1 id='login_h1'>Login</h1>
            <table id='login_table'>
                <tr className='login_tr'>
                    <td className='register_text'>Username</td>
                    <td className='register_input'><input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></td>
                </tr>
                <tr className='login_tr'>
                    <td className='register_text'>Password</td>
                    <td className='register_input'><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='register_password' /></td>
                </tr>
            </table>
            <br />
            <button onClick={handleRegister}>Submit</button>
            <div id='space'>
            </div>
        </div >
    );
};

export default Register;


// <div className="register-container">
//             <h1>Login</h1>
//             <label>
//                 Username
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </label>
//             <br />
//             <label>
//                 Password
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <br />
//             <button onClick={handleRegister}>Submit</button>
//             <div id='space'>
//             </div>
//         </div>