import React, { useState,useContext } from "react";
import "./Homepage.css";
import mjImage from "../assets/MJ.png";
import QuestionBox from "../components/QuestionBox.jsx";
import ToggleButton from "./ToggleButton.jsx";
import { AppContext } from "./ParentContext.jsx";

const Homepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const {click, setClick} = useContext(AppContext);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div id="container" className={isDarkMode ? "dark-mode" : "light-mode"}>
      <nav className="navbar">
      <div className="logo">
                    <div className="left-text">
                        Pop
                    </div>
                    <div className="search">
                    <svg width="25" height="25" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2735 32.5466C7.3006 32.5466 0 25.2466 0 16.2735C0 7.30001 7.3006 0 16.2735 0C25.247 0 32.547 7.29996 32.547 16.2735C32.547 25.2466 25.247 32.5466 16.2735 32.5466ZM16.2735 2.65692C8.76529 2.65692 2.65692 8.76529 2.65692 16.2735C2.65692 23.782 8.76529 29.8897 16.2735 29.8897C23.7816 29.8897 29.8901 23.782 29.8901 16.2735C29.8901 8.76529 23.7817 2.65692 16.2735 2.65692Z" fill="#FEC080"/>
<path d="M6.65332 11.2361C6.53783 11.2361 6.4211 11.2063 6.31472 11.1427C5.99946 10.9559 5.89568 10.5479 6.08313 10.2327C8.20942 6.65271 12.1144 4.42846 16.2735 4.42846C16.6407 4.42846 16.9377 4.72554 16.9377 5.09267C16.9377 5.45984 16.6406 5.75692 16.2735 5.75692C12.5807 5.75692 9.11363 7.73205 7.22543 10.9111C7.10087 11.12 6.88032 11.2361 6.65332 11.2361Z" fill="#FEC080"/>
<path d="M5.09276 16.5486C4.72628 16.5486 4.42856 16.2515 4.42856 15.8844C4.42856 14.9412 4.54075 14.4158 4.73929 13.568C4.82296 13.2106 5.18038 12.9901 5.53711 13.0725C5.89453 13.1562 6.11636 13.5129 6.03268 13.8703C5.84651 14.6662 5.75697 15.084 5.75697 15.8844C5.75697 16.2515 5.45993 16.5486 5.09276 16.5486Z" fill="#FEC080"/>
<path d="M39.0153 42.5566C37.9502 42.5566 36.95 42.1428 36.1969 41.3904L25.4753 30.6681C24.6437 29.8365 24.37 28.809 24.704 27.7738C24.9758 26.9318 25.6141 26.2209 26.1395 25.6967C26.9179 24.9183 27.8759 24.1218 29.0766 24.1218C29.5897 24.1218 30.359 24.2801 31.1108 25.0325L41.833 35.7534C42.5855 36.5072 42.9999 37.5074 42.9999 38.5725C42.9999 39.6363 42.5855 40.6379 41.833 41.3903C41.08 42.1428 40.0798 42.5566 39.0153 42.5566ZM27.2221 28.6352C27.226 28.6352 27.261 28.6975 27.3538 28.7896L38.0754 39.5118C38.5768 40.0126 39.4532 40.0126 39.9545 39.5118C40.2049 39.2602 40.3431 38.9268 40.3431 38.5726C40.3431 38.2171 40.2049 37.8838 39.9539 37.6321L29.2323 26.911C29.1382 26.8164 29.0753 26.7814 29.0591 26.7762C29.0494 26.7814 28.7763 26.8164 28.018 27.5753C27.2597 28.3329 27.2234 28.6067 27.2214 28.6352C27.2221 28.6352 27.2221 28.6352 27.2221 28.6352Z" fill="#FEC080"/>
                    </svg>
                    </div>
                    <div className="right-text">
                        uiz
                    </div>
                </div>
                <div className={isDarkMode ? "dark-mode" : "light-mode"} id="theme-toggle">
                    <ToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />  
                </div>
      </nav>
      <div className="box">
        <div className="Left">
        <div className="Heading">
                        Quizzes that Echo Culture's Vibrant Rhythm!
                    </div>
                    <div className="Tagline">
                    Quiz Your Way to Pop-culture Brilliance!
                    </div>
                    <div className="Start-button">
                        <button onClick={()=>{
                          setClick("QuestionBox")
                        }} role= "button" className="Start-btn">Start</button>
                    </div>
              
        </div>
        <div className="Right">
          <div className="Michael-Jackson">
            <img id="fixing" src={mjImage} width="558px" height="615px" alt="Michael Jackson" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
