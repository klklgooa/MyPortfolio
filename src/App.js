import { BrowserRouter, Route, Routes} from "react-router-dom";
import { HashRouter} from "react-router-dom";

import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Article from "./Component/Article";
import Footer from "./Component/Footer";
import index from "./Component/index";
import Introduction from "./Component/Introduction";
import Project from "./Component/Project";
import Vision from "./Component/Vision";
import Career from "./Component/Career";
import Login from "./Component/Login";
import "./App.css";
function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" Component={index} />
            <Route path="/introduction" Component={Introduction} />
            <Route path="/project" Component={Project} />
            <Route path="/Vision" Component={Vision} />
            <Route path="/career" Component={Career} />
            <Route path="/login" Component={Login} />
          </Routes>
          <Article />
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
export default App;
