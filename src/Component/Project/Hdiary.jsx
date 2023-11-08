import '../CSS/Project.css';
import hdiary_logo from '../../image/hdiary_1.png';
import hdiary_2 from '../../image/hdiary_2.png';
import hdiary_3 from '../../image/hdiary_3.png';
import hdiary_4 from '../../image/hdiary_4.png';
import hdiary_5 from '../../image/hdiary_5.png';
import hdiary_6 from '../../image/hdiary_6.png';
import hdiary_7 from '../../image/hdiary_7.png';
import '../CSS/Project.css';

const Hdiary = () => {
  return (
    <div>
      <h1>건강관리 Android 어플리케이션</h1>
      <img src={hdiary_logo} alt="hdiary" />
      <p>Hdiary</p>

      <div>
        <img class ='hdiary_img' src={hdiary_2} alt="hdiary" />&nbsp;
        <img class ='hdiary_img' src={hdiary_3} alt="hdiary" />
        <img class ='hdiary_img' src={hdiary_4} alt="hdiary" />
        <img class ='hdiary_img' src={hdiary_5} alt="hdiary" />
        <img class ='hdiary_img' src={hdiary_6} alt="hdiary" />
        <img class ='hdiary_img' src={hdiary_7} alt="hdiary" />
      </div>
      <br/><br/><br/><br/>
      <fieldset>
        <legend>Hdiary 프로젝트 개요</legend>
        <ul>
          <li>이메일 형식의 회원관리</li>
          <li>사용자들의 관심을 끌고 유용한 정보들을 자연스럽게 제공하는 AutoScroll banner 사용</li>
          <li>BMI 계산 기능으로 자신의 체형을 객관적으로 판단, 만보기 기능으로 활동량 측정</li>
          <li>약 먹는 시간, 운동 시간, 비타민 섭취 확인 알림을 함으로써 건강하고 규칙적인 생활습관 유지</li>
          <li>현재 걸음 수와 목표치의 %를 바 형태로 보여주는 만보기 기능</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Hdiary;
