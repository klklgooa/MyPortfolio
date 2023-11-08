import React from "react";
import '../CSS/Career.css';
import deep1 from '../../image/deep1.png';
import deep2 from '../../image/deep2.png';
import deep3 from '../../image/deep3.png';
import deep4 from '../../image/deep4.png';
import deep5 from '../../image/deep5.png';
import deep6 from '../../image/deep6.png';

const DeepLearning = () => {
  return (
    <div>
      <h1>딥러닝 스쿨 </h1>
      <img class ='poster' src={deep1} alt="keyard" />&nbsp;<br/>
      <br/><br/><br/><br/>
      <hr/>
      <h1>8월 4일 Infinitt</h1>
      <h3>유방암 검사 AI모델</h3>
      <img class ='images' src={deep2} alt="keyard" />&nbsp;
      <img class ='images' src={deep3} alt="keyard" />&nbsp;
      <br/><br/><br/><br/>
      <hr/>
      <h1>8월 7일 Neurophet</h1>
      <h3>뇌종양 검사 AI모델</h3>
      <img class ='images' src={deep5} alt="keyard" />&nbsp;
      <br/><br/><br/><br/>
      <hr/>
      <h1>8월 8일 Deepnoid</h1>
      <h3>Mnist 데이터 활용</h3>
      <img class ='images' src={deep6} alt="keyard" />&nbsp;
      <br/><br/><br/><br/>
      <hr/>
      <br/><br/>
      <img class ='images' src={deep4} alt="keyard" />&nbsp;
      <br/><br/><br/><br/>
      <fieldset>
        <legend>딥러닝 스쿨 개요</legend>
        <ul>
          <li>AI활용 의학분야 회사들의 교육</li>
          <li>각 회사의 임원이나 실무 담당자의 커리큘럼에 따름</li>
          <li>AI모델 적용한 의학 프로그램 소개 및 회사의 비전 요약</li>
          <li>회사들의 의학 데모프로그램 직접 체험</li>
          <li>Google Colab 환경으로 간단한 의학 AI 생성 및 결과 도출</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default DeepLearning;