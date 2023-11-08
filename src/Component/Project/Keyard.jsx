import React from "react";
import '../CSS/Project.css';
import keyard_2 from '../../image/keyard_2.png';
import keyard_1 from '../../image/keyard_1.png';


const Keyard = () => {
  return (
    <div>
      <h1>Javascript를 이용한 동적 페이지</h1>
      <a href="https://klklgooa.github.io/"><img id ='keyard_logo'src={keyard_2} alt="hdiary" /></a>
      <h2>Click!</h2>
      <br/><br/><br/>
      <div>
        <img class ='keyard_1' src={keyard_1} alt="keyard" />&nbsp;
      </div>
      <br/><br/><br/><br/>
      <fieldset>
        <legend>Keyard 프로젝트 개요</legend>
        <ul>
          <li>키보드 커스텀의 요소</li>
          <li>스위치 윤활, 흡음재 세팅, 원리 & 분석</li>
          <li>Javascript로 구현한 타건음 컨텐츠</li>
          <li>타건음 컨텐츠</li>
          <li>reset.css 파일에 모든 html파일이 공통으로 적용되어야 하는 속성과 속성값들을 초기화</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Keyard;
