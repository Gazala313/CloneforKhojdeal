import "./picture.css";
function Picture1(props) {
  return (
    <div className="itm2">
      <img src={props.image} alt="#"></img>
      <h2 className="Heading2">{props.heading}</h2>
    </div>
  );
}
export default Picture1;
