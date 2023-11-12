// import { Route, Routes, Switch, Router } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
// import React, { useState } from "react";

// import Header from "./Component/Header";
// import Nav from "./Component/Nav";
// import Article from "./Component/Article";
// import Footer from "./Component/Footer";
// import index from "./Component/index";
// import Introduction from "./Component/Introduction";
// import Project from "./Component/Project";
// import Vision from "./Component/Vision";
// import Career from "./Component/Career";
// import Login from "./Component/Login";

// import "./App.css";
// import Register from "./Component/Register";
// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userInfo, setUserInfo] = useState({});

//   const handleLogin = (username, password) => {
//     // 간단한 클라이언트 측 인증 예제
//     if (username === 'user' && password === 'password') {
//       // 인증 성공 시, isAuthenticated를 true로 설정하고 userInfo에 사용자 정보 저장
//       setIsAuthenticated(true);
//       setUserInfo({ username });
//     } else {
//       // 인증 실패 시, 다시 Login 페이지로 이동하거나 오류 메시지 표시
//       alert('Authentication failed. Please check your credentials.');
//     }
//   };

//   return (
//     <HashRouter>
//       <div>
//         <Header />
//         <div className="container">
//           <Nav />
//           <Routes>
//             <Route path="/" Component={index} />
//             <Route path="/introduction" Component={Introduction} />
//             <Route path="/project" Component={Project} />
//             <Route path="/Vision" Component={Vision} />
//             <Route path="/career" Component={Career} />
//             <Route path="/login" Component={Login} />
//           </Routes>

//           <Article />
//         </div>
//         <Footer />
//       </div>
//     </HashRouter>
//   );
// }
// export default App;


import { Route, Routes, Switch, Router, Navigate } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import React, { useState } from "react";

import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Article from "./Component/Article";
import Footer from "./Component/Footer";
import Index from "./Component/index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Vision from "./Component/Vision";
import Career from "./Component/Career";
import Login from "./Component/Login";

import "./App.css";
import Register from "./Component/Register";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleRegister = (username, password) => {
    // 회원가입 로직을 여기에 구현하세요 (실제 앱에서는 서버에 저장될 수 있음)
    setUserInfo({ username, password });
    setIsAuthenticated(true);
  };

  const handleLogin = (username, password) => {
    // 간단한 클라이언트 측 인증 예제
    if (username === userInfo.username && password === userInfo.password) {
      // 인증 성공 시, isAuthenticated를 true로 설정하고 userInfo에 사용자 정보 저장
      setIsAuthenticated(true);
    } else {
      // 인증 실패 시, 다시 Login 페이지로 이동하거나 오류 메시지 표시
      alert('Authentication failed. Please check your credentials.');
    }
  };

  return (
    <HashRouter>
      <div>
        <Header />
        <div className="container">
          <Nav />
          <Routes>
            {/* <Route path="/introduction" element={<Introduction />} /> */}
            <Route path="/" element={<Index />} />
            <Route path="/project" element={<Project />} />
            <Route path="/Vision" element={<Vision />} />
            <Route path="/career" element={<Career />} />
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/introduction" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/register"
              element={<Register onRegister={handleRegister} />}
            />
            <Route
              path="/introduction"
              element={
                isAuthenticated ? (
                  <Introduction userInfo={userInfo} />
                ) : (
                  <Navigate to="/register" />
                )
              }
            />
          </Routes>
          <Article />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
export default App;
