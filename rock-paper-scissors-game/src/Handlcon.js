import rock from "./assets/rock.svg";
import scissor from "./assets/scissor.svg";
import paper from "./assets/paper.svg";


const IMAGES ={
  rock,
  scissor,
  paper
}
function Handlcon({value}) {
  const src = IMAGES[value];
  return <img src={src} alt= {value} />;
}

export default Handlcon;