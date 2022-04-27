import Nav from "../Nav/Nav";
import "./main.css";

function Main1() {
  return (
    <div>
      <div className="MainChar">
        <div style={{ fontSize: "25px", fontWeight: "600" }}>
          Featured Articles
        </div>
        <div
          style={{
            fontSize: "15px",
            color: "rgb(58, 135, 236)",
            fontWeight: "600"
          }}
        >
          View All
        </div>
      </div>
      <div className="searchresult">
        <Nav />
      </div>
    </div>
  );
}
export default Main1;
