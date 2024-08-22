import React, { useState } from "react";
import ClassicGrid from "./ClassicGrid";
import LegendsBar from "./LegendsBar";
import { legends } from "../data/Legends";
import "../styles/ClassicGame.css";
import Countdown from "./Countdown";
import { getRandomLegend } from "../utils/RandomGenerator";

function ClassicGame() {
  const [legendsGrid, setLegendsGrid] = useState([]);
  const guessedLegend = getRandomLegend();
  const yesterdayLegend = getRandomLegend(true);
  const [hasWon, setHasWon] = useState(false);

  const legendSubmit = (legend) => {
    const submittedLegend = legends.find((l) => l.legend === legend);
    if (submittedLegend.legend === guessedLegend.legend) {
      setHasWon(true);
    }
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
      {!hasWon && <LegendsBar onLegendSubmit={legendSubmit} />}
      {hasWon && <div className="win">You won!</div>}
      {legendsGrid.length > 0 && <ClassicGrid legendsGrid={legendsGrid} />}
      <div className="precedent-legend">
        Yesterday's legend was : <span className="yesterday-name">{yesterdayLegend.legend}</span>
      </div>
      {hasWon && <Countdown />}
    </div>
  );
}

export default ClassicGame;
