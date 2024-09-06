import React, { useState } from "react";
import { Home, Journey, Skills, Work, Contact, Allwork } from "./sections";

export default function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const handleExploreMore = () => {
    setCurrentPage("allwork");
  };

  const handleBackToMain = () => {
    setCurrentPage("main");
  };
  const basename = import.meta.env.MODE == "production" ? "/MyPortfolio" : "";
  return (
    <div className="font-caros">
      {currentPage === "main" ? (
        <>
          <Home onShowPages={() => setCurrentPage("main")} />
          <Journey />
          <Skills />
          <Work onExploreMore={handleExploreMore} />
          <Contact />
        </>
      ) : (
        <Allwork onBack={handleBackToMain} />
      )}
    </div>
  );
}
