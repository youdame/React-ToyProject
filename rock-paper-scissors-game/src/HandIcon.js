import rock from "./assets/rock.svg";
import scissor from "./assets/scissor.svg";
import paper from "./assets/paper.svg";
import "./HandButton"

const IMAGES ={
  rock,
  scissor,
  paper
}
function HandIcon({value, className}) {
  const src = IMAGES[value];

  return <img src={src} className = {className}alt= {value} />;
}

export default HandIcon;