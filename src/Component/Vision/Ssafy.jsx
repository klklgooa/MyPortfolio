import "../CSS/Vision.css";
import ssafy1 from '../../image/ssafy1.png';
import ssafy2 from '../../image/ssafy2.png';
import ssafy3 from '../../image/ssafy3.png';
const Ssafy = () => {
  return (
    <div>
      <h1>Ssafy(Samsung SW Academy For Youth)</h1>
      <a href="https://www.ssafy.com"><img class='ssafy_logo' src={ssafy1} alt="ssafy" /></a>
      <h2>Click!</h2>
      <br /><br /><br />
      <img class='ssafy_img' src={ssafy2} alt="ssafy" />

      <br /><br /><br />
      <img class='ssafy_img' src={ssafy3} alt="ssafy" />
      <br /><br /><br />
      <fieldset>
        <legend>Ssafy의 개요</legend>
        <ul>
          <li>최고 수준의 교육을 제공합니다.</li>
          <li>맞춤형 교육을 제공합니다.</li>
          <li>자기주도적 학습을 지향합니다.</li>
          <li>취업 경쟁력을 높일 수 있는 효율적인 취업지원 서비스를 제공합니다.</li>
          <li>고용노동부의 취업지원 노하우를
            기반으로 교육생에게 최적의 일자리
            정보를 제공</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Ssafy;