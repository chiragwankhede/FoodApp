import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./components/Body";



const Applayout = () => {
  return <div className="app">
  <Header/>
  <Body/>



  </div>;
  
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
