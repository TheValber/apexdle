import React, { useState } from "react";
import ClassicGrid from "./ClassicGrid";
import LegendsBar from "./LegendsBar";
import { legends } from "../data/Legends";

function ClassicGame() {
  const [legendsGrid, setLegendsGrid] = useState([]);

  function seededShuffle(baseArray, seed) {
    let array = baseArray.slice();
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    function random() {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function getRandomLegend() {
    const fullDate = new Date();
    const date = fullDate.getTime();
    const days = Math.floor(date / (1000 * 60 * 60 * 24));

    const seed = Math.floor(days / 26)
    const index = days % 26

    const shuffledLegends = seededShuffle(legends, seed);
    return shuffledLegends[index];
  }

  const legendSubmit = (legend) => {
    const newLegendsGrid = [...legendsGrid, legend];
    setLegendsGrid(newLegendsGrid);
  };

  return (
    <div className="Classic-game">
      <p><i>(debug) Today's character : {getRandomLegend()}</i></p>
      <LegendsBar onLegendSubmit={legendSubmit} />
      <ClassicGrid legendsGrid={legendsGrid} />
    </div>
  );
}

export default ClassicGame;