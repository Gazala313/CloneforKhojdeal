import "./Nav1.css";
function Nav1(props) {
  return (
    <div className="itm1">
      <img src={props.image} alt="#"></img>
      <div className="flex-container1">
        <h2 className="Heading">{props.heading}</h2>
        <p
          classname="disc"
          style={{ color: "black", padding: "20px", margin: "0px" }}
        >
          {props.discription}
        </p>
        <div className="date">Feb 8,2022</div>
      </div>
    </div>
  );
}
export default Nav1;
