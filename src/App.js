import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Main1 from "./Component/Main/Main1";
import Middle from "./Component/Middle/Middle";
import Picture from "./Component/Picture/Picture";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main1 />
      <Middle />
      <Picture />
      <Footer />
    </div>
  );
}
