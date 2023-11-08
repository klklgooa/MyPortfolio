
import witty2 from '../../image/witty2.png';
import witty3 from '../../image/witty3.png';
import '../CSS/Project.css';

const Witty = () => {
  return (
    <div>
      <h1>Witty(React 기반 Web Application)</h1>
      <img class ='witty_logo' src={witty3} alt="witty" />
      <br/><br/><br/>
      <div>
        &nbsp;
        <img class ='witty_img' src={witty2} alt="witty" />
      </div>
      <br/><br/><br/>
      <fieldset>
        <legend>witty 프로젝트 개요</legend>
        <ul>
          <li>이메일 형식의 회원관리</li>
          <li>피드(게시물)마다 '좋아요'기능</li>
          <li>개인 프로필 커스텀 기능</li>
          <li>팔로우 한 사람들의 피드를 CardView 형태로 보여줌</li>
          <li>피드에 답글을 적을 수 있는 부가 기능</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Witty;
