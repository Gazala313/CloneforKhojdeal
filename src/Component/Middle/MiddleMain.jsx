import Middle from "./Middle";
import "./middle.css";

function MiddleMain(props) {
  return (
    <div>
      <div className="itm0">
        <img src={props.image} alt=""></img>
        <div className="flex-container">
          <div className="mainsmall">{props.smallHeading}</div>
          <div className="mainHeading">{props.heading}</div>
          <div className="maindisc">{props.discription}</div>
        </div>
      </div>
    </div>
  );
}
export default MiddleMain;
