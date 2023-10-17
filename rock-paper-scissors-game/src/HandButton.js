import Handlcon from "./Handlcon";

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
  <button onClick = {handleClick}>
    <Handlcon value ={value}/>

  </button>)
}

export default HandButton;
