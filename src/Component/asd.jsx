import { useState } from "react";
import intros from "./Data/intros";
import Login from "./Login";
import Introduction from "./Introduction";

function asd() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <Collapse isOpen={true}>
          {false ? (
            <Introduction/>
          ) : (
            <Login />
          )}
      </Collapse>

      
    </div>
  );
}

export default asd;