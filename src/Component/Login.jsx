import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { id, pwd, changeId, changePwd } = props;
  return (
    <div>
      <h3 align="center">로그인</h3>
      <table align="center" width="10%">
        <tr>
          <td width="50%">아이디</td>
          <td>
            <input type="text" size="8" value={id} onChange={changeId} />
          </td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td>
            <input type="password" size="8" value={pwd} onChange={changePwd} />
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Login;

// function LoginModal({ isOpen, onClose, onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // 로그인 로직을 수행합니다.
//     // 예를 들어, username과 password를 검증하고 유효한 경우 onLogin 콜백을 호출할 수 있습니다.
//     // 여기에서는 간단한 예시를 보여주기 위해 항상 로그인 성공으로 가정합니다.
//     onLogin();
//     onClose(); // 모달 닫기
//     navigate("/");
//   };

//   return (
//     <div className={`modal ${isOpen ? "open" : "closed"}`}>
//       <div className="modal-content">
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <button onClick={() => { onLogin(); navigate("/intro"); }}>Login</button>
//         <button onClick={() => { onClose(); navigate("/"); }}>Close</button>
//       </div>
//     </div>
//   );
// }

// export default LoginModal;
