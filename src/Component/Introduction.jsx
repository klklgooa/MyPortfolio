
// import { useState } from "react";
// import intros from "./Data/intros";
// import Login from "./Login";

// function Introduction() {
//   const [index, setIndex] = useState(0);
//   const contentChange = (event) => {
//     setIndex(event.target.value);
//   };
//   return (
//     <div>
//       {intros.map((intro, index) => (
//         <button onClick={contentChange} value={index}>
//           {intro.tab}
//         </button>
//       ))}
//       <br/> <br/>
//       {intros[index].content}
//     </div>
//   );
// }

// export default Introduction;

///////////

import React, { useState } from "react";
import intros from "./Data/intros";
import Login from "./Login";

function Introduction() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };

  const [id, SetId] = useState("");
  const [pwd, SetPwd] = useState("");
  const changeId = (e) => {
    SetId(e.target.value);
  };
  const changePwd = (e) => {
    SetPwd(e.target.value);
  };
  if (id === "user" && pwd === "1234") {
    return (
      <div>
        {intros.map((intro, index) => (
          <button key={index} onClick={contentChange} value={index}>
            {intro.tab}
          </button>
        ))}
        <br /> <br />
        {intros[index].content}
      </div>);
  } else
    return (
      <Login id={id} pwd={pwd} changeId={changeId} changePwd={changePwd} />
    );
};

export default Introduction;


