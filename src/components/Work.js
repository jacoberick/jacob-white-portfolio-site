import React from "react";

const Work = () => {
  return (
    <div className="my-work-section">
      <h1 id="myWorkHeader">My Work</h1>
      <div className="portfolio">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/jacoberick/Full-Stack-App-with-React-and-a-REST-API"
        >
          <img
            src={require("../imgs/fullStackApp.png")}
            alt="My Full Stack App Screenshot"
          />
          <p>Full Stack App with React and REST API</p>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://jacoberick.github.io/to-do-list/"
        >
          <img src={require("../imgs/toDo.png")} alt="" />
          <p>
            React To Do List <span className="live">LIVE</span>
          </p>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://jacoberick.github.io/OOP-Game/"
        >
          <img src={require("../imgs/OOP.png")} alt="" />
          <p>
            Phrase Hunter Game <span className="live">LIVE</span>
          </p>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://jacoberick.github.io/List-Pagination-and-Filtering/"
        >
          <img src={require("../imgs/LPF.png")} alt="" />
          <p>
            List Pagination and Filtering <span className="live">LIVE</span>
          </p>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://jacoberick.github.io/Public-API-Request/"
        >
          <img src={require("../imgs/PAR.png")} alt="" />
          <p>
            Public API Request <span className="live">LIVE</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Work;
