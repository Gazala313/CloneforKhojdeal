import MiddleMain from "./MiddleMain";

function Middle() {
  const newArticle = [
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/04/cover-a-woman-with-long-wavy-hair.jpg",
      id: 1,
      smallHeading: "HAIR CARE PRODUCTS",
      heading: "A Guide to Selecting the Best Shampoo",
      discription:
        "There are so many shampoos to choose from on the market these days that it can be tough to know which one to buy. With all of the conflicting"
    },
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/04/cover-a-man-grilling-meat-on-a-grill.jpg",
      id: 2,
      smallHeading: "OUTDOOR COOKING",
      heading: "The Right Grills for You",
      discription:
        "Types of Grills Wood Pellet Grills Wood pellet grills are a type of grill that uses compressed wood pellets as fuel. These grills are popular becaus..."
    },
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/04/cover-a-man-playing-games.jpg",
      id: 3,
      smallHeading: "COMPUTERS & ACCESSORIES",
      heading: "Gaming Laptops Buying Guide: What You Need to Know",
      discription:
        "What To Look For In A Gaming Laptop The best gaming laptop depends on a few key factors. Here are a few tips to help you choose the right one for you..."
    },
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/04/silver-espresso-machine.jpg",
      id: 4,
      smallHeading: "KITCHEN & DINING",
      heading: "Everything You Need to Know About Buying Espresso Machines",
      discription:
        "Types of Espresso Machine Automatic Espresso machines These machines are designed to make it easy to brew a perfect cup of espresso, and"
    },
    {
      image:
        " https://cdn.findthisbest.com/storage/images/2022/04/3796e4f3b6bd2527235bb0ecd8a7e9cb.jpg",
      id: 5,
      smallHeading: "KITCHEN & DINING",
      heading: "Everything You Need to Know About Buying Coffee Makers",
      discription:
        "Types of the coffee maker Cold Brew Coffee Maker If you like your coffee on the iced or cold side, a cold brew coffee maker is for you. These"
    },
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/04/dog-shampoos.jpg",
      id: 6,
      smallHeading: "DOG SUPPLIES",
      heading: "Guidelines for Choosing the Right Dog Shampoos",
      discription:
        "Choosing the best dog shampoo is essential for you and your dog. To help you buy the best shampoo suitable for your dog, we have listed things to cons..."
    },
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/04/cover-a-red-teapot-on-the-table.jpg",
      id: 7,
      smallHeading: "KITCHEN & DINING",
      heading: "Finding the Best Teapots for Your Home",
      discription:
        "Material:  Teapots can be made of different materials and divided into different types. The popular and most common materials for teapots includ..."
    },
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/04/cover-dishwasher-cleaner.jpg",
      id: 8,
      smallHeading: "HOUSEHOLD SUPPLIES",
      heading: "Get the Best Dishwasher Cleaners",
      discription:
        "If you’re shopping for the best dishwasher cleaner, you must consider the below-mentioned factors to make an informed buying decision. Certifications..."
    },
    {
      image:
        "https://cdn.findthisbest.com/storage/images/2022/04/cover-a-laptop-on-wooden-table.jpg",
      id: 9,
      smallHeading: "COMPUTERS & ACCESSORIES",
      heading: "Ready for the Course: How to Buy the Right 144Hz Laptops",
      discription:
        "Frequently Asked Questions 1. Which type of display is the best for content consumption and gaming? Without a doubt, IPS panels are all-rounders whe..."
    }
  ];
  return (
    <div style={{ backgroundColor: "rgb(233, 238, 247)" }}>
      <div
        style={{
          fontSize: "25px",
          color: "black",
          fontWeight: "500",
          paddingTop: "150px"
        }}
      >
        Featured Topics
      </div>
      <div style={{ fontSize: "15px", color: "grey", paddingTop: "10px" }}>
        Advice, staff picks, and more. Let us help you.
      </div>
      <div className="search_result">
        {newArticle.map((item, ind) => {
          return (
            <MiddleMain
              image={item.image}
              key={item.id}
              smallHeading={item.smallHeading}
              heading={item.heading}
              discription={item.discription}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Middle;
