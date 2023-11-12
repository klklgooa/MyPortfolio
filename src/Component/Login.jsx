// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = (props) => {
//   const { id, pwd, changeId, changePwd } = props;
//   return (
//     <div>
//       <h3 align="center">로그인</h3>
//       <table align="center" width="10%">
//         <tr>
//           <td width="50%">아이디</td>
//           <td>
//             <input type="text" size="8" value={id} onChange={changeId} />
//           </td>
//         </tr>
//         <tr>
//           <td>비밀번호</td>
//           <td>
//             <input type="password" size="8" value={pwd} onChange={changePwd} />
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// };
// export default Login;
/////

// import React, { useState } from 'react';
// import { useAppContext } from './Register';

// function Login() {

//     const { Email, setEmail } = useAppContext();
//     const { Password, setPassword } = useAppContext();

//     const [loginEmail, changeEmail] = useState("");
//     const [loginPassword, changePassword] = useState("");

//     const onEmailHandler = (event) => {
//         changeEmail(event.currentTarget.value);
//     }
//     const onPasswordHandler = (event) => {
//         changePassword(event.currentTarget.value);
//     }
//     const onSubmitHandler = (event) => {
//         // 버튼만 누르면 리로드 되는것을 막아줌
//         event.preventDefault();

//         console.log('Email', loginEmail);
//         console.log('Password', loginPassword);

//         let body = {
//             email: loginEmail,
//             password: loginPassword,
//         }

//         if(Email === loginEmail && Password===loginPassword) {

//         }
//     }

//     return (
//         <div style={{ 
//             display: 'flex', justifyContent: 'center', alignItems: 'center', 
//             width: '300px', height: '300px'
//             }}>
//             <form style={{ display: 'flex', flexDirection: 'column'}}
//                 onSubmit={onSubmitHandler}
//             >
//                 <label>Email</label>
//                 <input type='email' value={loginEmail} onChange={onEmailHandler}/>
//                 <label>Password</label>
//                 <input type='password' value={loginPassword} onChange={onPasswordHandler}/>
//                 <br />
//                 <button formAction=''>
//                     Login
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 간단한 클라이언트 측 인증 예제
    if (username === 'user' && password === 'password') {
      // 인증 성공 시, Index 페이지로 이동
      navigate('/introduction');
    } else {
      // 인증 실패 시, 다시 Login 페이지로 이동하거나 오류 메시지 표시
      alert('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
