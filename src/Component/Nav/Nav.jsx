import Nav1 from "../Nav1/Nav1";
import "./nav.css";

function Nav() {
  // const [ allChatUsers,setAllChars] = useState([]);
  const allChatUsers = [
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/02/a-big-hole-in-the-wall.jpg",
      id: 1,
      heading: "How To Repair Drywall",
      discription:
        "This step-by-step DIY guide will teach you how to repair small patched holes, large holes, and corner bead repair."
    },
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/02/cover-brown-wooden-table-with-two-drawers.jpg",
      id: 2,
      heading: "How to Paint Wood Furniture: 13 Steps Guide",
      discription:
        "This article teaches how to repaint wooden furniture by following simple steps to get a smooth result."
    },
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/01/cover-a-toilet-and-a-toy.jpg",
      id: 3,
      heading: "Tips on Solving Common Toilet Problems: Useful and Simple Tips",
      discription:
        "This article will tell you how to easily fix common toilet problems sch as a toilet that runs intermittently, a toilet t..."
    }
  ];
  return (
    <div className="search_result">
      {/* <img src="https://cdn.findthisbest.com/storage/images/2022/02/a-big-hole-in-the-wall.jpg"></img>
      <div>How To Repair Drywall</div>
      <div>This step-by-step DIY guide will teach you how to repair small patched holes, large holes, and corner bead repair.</div> */}
      {allChatUsers.map((item, ind) => {
        return (
          <div>
            <Nav1
              key={item.id}
              image={item.image}
              heading={item.heading}
              discription={item.discription}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Nav;
