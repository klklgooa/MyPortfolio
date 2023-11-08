import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav>
            <Link to={"/introduction"}><span class="nav_span">나의 소개</span></Link>
            <Link to={"/project"}><span class="nav_span">프로젝트</span></Link>
            <Link to={"/career"}><span class="nav_span">나의 경력</span></Link>
            <Link to={"/vision"}><span class="nav_span">목표</span></Link>
        </nav>
    );
}
export default Nav;
