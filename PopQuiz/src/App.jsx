import React, { useState, useContext } from "react";
import "./App.css";
import Homepage from "./components/Homepage.jsx";
import QuestionBox from "./components/QuestionBox.jsx";
import Result from "./components/Result.jsx";
import MainContext, {AppContext} from "./components/ParentContext.jsx"


function App() {
  const{click} = useContext(AppContext);
  const renderPage = ()=>{
    {switch(click){
      case "Homepage":
      return <Homepage/>
      case "QuestionBox":
      return <QuestionBox />
      case "Result":
      return <Result />
    }}
  }
 return (
    <div>
      {renderPage()}
    </div>
 );
}

export default App;