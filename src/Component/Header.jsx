import Typewriter from "typewriter-effect";
function Header() {
  return (
    <div
      className="Main"
      style={{
        backgroundColor: "rgb(58, 135, 236)",
        height: "600px",
        borderBottomLeftRadius: "200px 22px",
        borderBottomRightRadius: "200px 22px"
      }}
    >
      <div className="head">
        <div className="head1">
          <div
            style={{ padding: "4px 15px", fontSize: "20px", fontWeight: "800" }}
          >
            FINDTHISBEST
          </div>
          <ul>
            <li>
              <a
                href="#"
                style={{
                  color: "rgb(235, 232, 232)",
                  backgroundColor: "rgb(81, 150, 240)",
                  borderRadius: "5px"
                }}
                className="bar"
              >
                United States &#9662;
              </a>
              <ul className="dropdown">
                <li>{/* <a href="#">United States</a> */}</li>
                <li>
                  <a href="#">United Kingdom</a>
                </li>
                <li>
                  <a href="#">Canada</a>
                </li>
                <li>
                  <a href="#">Australia</a>
                </li>
                <li>
                  <a href="#">Deutsch</a>
                </li>
                <li>
                  <a href="#">France</a>
                </li>
                <li>
                  <a href="#">Espana</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="head1" style={{ padding: "8px 25px" }}>
          <div style={{ padding: "8px 15px" }} className="bar">
            Home
          </div>
          <div style={{ padding: "8px 15px" }} className="bar">
            Blog
          </div>
          <ul>
            <li>
              <a
                href="#"
                style={{ color: "rgb(235, 232, 232)" }}
                className="bar"
              >
                Best Products &#9662;
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#">Appliances</a>
                </li>
                <li>
                  <a href="#">Automation</a>
                </li>
                <li>
                  <a href="#">Beauty and Personal Care</a>
                </li>
                <li>
                  <a href="#">Automation</a>
                </li>
                <li>
                  <a href="#">Cell Phones and Accessories</a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Health and Household</a>
                </li>
                <li>
                  <a href="#">Indrustrial Scientific</a>
                </li>
                <li>
                  <a href="#">Art Craft and Sewing</a>
                </li>
                <li>
                  <a href="#">Baby Products</a>
                </li>
                <li>
                  <a href="#">Books</a>
                </li>
                <li>
                  <a href="#">Clothes shoes snd Jewelry</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="help">
        <div>Help you find the</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span> best </span>
          <span style={{ color: "rgb(5, 5, 105)", paddingLeft: "13px" }}>
            <Typewriter
              options={{
                strings: [" laptop", " camera", " shoes", " headphone"],
                autoStart: true,
                loop: true
              }}
            />
          </span>
        </div>
      </div>
      <div className="check">
        <div>Check out our reviews before buying anything</div>
        <div>We aim to help you make better shopping decisions</div>
      </div>
      <div className="btn">
        <input
          type="text"
          placeholder="Search..."
          style={{
            height: "70px",
            width: "700px",
            fontSize: "20px",
            borderRadius: "5px"
          }}
        />
        <button
          style={{ height: "75px", width: "60px", borderRadius: "5px" }}
          className="search-btn"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
