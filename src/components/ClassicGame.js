import React, { useState } from "react";
import ClassicGrid from "./ClassicGrid";
import LegendsBar from "./LegendsBar";
import { legends } from "../data/Legends";

function ClassicGame() {
  const [legendsGrid, setLegendsGrid] = useState([]);
  const guessedLegend = getRandomLegend();

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
    const submittedLegend = legends.find((l) => l.legend === legend);
    const newLegend = {
      legend: legend,
      class: {
        value: submittedLegend.class,
        state: submittedLegend.class === guessedLegend.class ? "success" : "error"
      },
      release: {
        value: submittedLegend.release,
        state: submittedLegend.release === guessedLegend.release ? "success" : (submittedLegend.release > guessedLegend.release ? "too-big" : "too-small")
      },
      gender: {
        value: submittedLegend.gender,
        state: submittedLegend.gender === guessedLegend.gender ? "success" : "error"
      },
      age: {
        value: submittedLegend.age,
        state: submittedLegend.age === guessedLegend.age ? "success" : (submittedLegend.age > guessedLegend.age ? "too-big" : "too-small")
      },
      homeworld: {
        value: submittedLegend.homeworld,
        state: submittedLegend.homeworld === guessedLegend.homeworld ? "success" : "error"
      }
    };
    const newLegendsGrid = [...legendsGrid, newLegend];
    setLegendsGrid(newLegendsGrid);
  };

  return (
    <div className="Classic-game">
      <LegendsBar onLegendSubmit={legendSubmit} />
      {legendsGrid.length > 0 && <ClassicGrid legendsGrid={legendsGrid} />}
    </div>
  );
}

export default ClassicGame;