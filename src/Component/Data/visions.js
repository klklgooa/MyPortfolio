import Ability from "../Vision/Ability";
import Ssafy from "../Vision/Ssafy";
import Field from "../Vision/Field";

const visions = [
  {
    tab: "목표 능력치",
    content: <Ability></Ability>,
  },
  {
    tab: "Ssafy",
    content: <Ssafy></Ssafy>,
  },
  {
    tab: "목표 분야",
    content: <Field></Field>,
  },
];

export default visions;
