import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import IntroCard from "./components/IntroCard";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import FormatSelect from "./components/FormatSelect";
import { useState } from "react";

function App() {
  const [containerFormat, setContainerFormat] = useState("desktop");

  const handleSelection = (event) => {
    if (event.target.value === "desktop") {
      setContainerFormat("desktop");
    } else if (event.target.value === "tablet") {
      setContainerFormat("tablet");
    } else if (event.target.value === "mobile") {
      setContainerFormat("mobile");
    }
  };

  const cardsData = [
    {
      id: 1,
      title: "Hello React!",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam.`,
      url: "/#",
    },
    {
      id: 2,
      title: "Hello Vue!",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam.`,
      url: "/#",
    },
    {
      id: 3,
      title: "Hello Thomas!",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam.`,
      url: "/#",
    },
    {
      id: 4,
      title: "Hello somebody!",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam.`,
      url: "/#",
    },
  ];

  return (
    <div className={` ${containerFormat}`}>
      <div className={`container-fluid`}>
        <div className="top">
          <Navbar />
        </div>
        <div className="intro">
          <IntroCard />
        </div>
        <div className="cards-grid container-lg text-center mt-2">
          <div className="row justify-content-center">
            {cardsData.map((element) => {
              return (
                <div className="col h-50" key={element.id}>
                  <Cards
                    title={element.title}
                    text={element.text}
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="select mt-2">
          <select
            className="form-select form-select-sm"
            aria-label="Small select example"
            onChange={handleSelection}
            id="classSelect"
          >
            <option selected value="desktop">
              Desktop
            </option>
            <option value="tablet">Tablet</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
