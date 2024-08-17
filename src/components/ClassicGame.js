import ClassicGrid from "./ClassicGrid";
import LegendsBar from "./LegendsBar";
import CryptoJS from "crypto-js";

function ClassicGame() {
  const legends = [
    "Bloodhound",
    "Gibraltar",
    "Lifeline",
    "Pathfinder",
    "Wraith",
    "Bangalore",
    "Caustic",
    "Mirage",
    "Octane",
    "Wattson",
    "Crypto",
    "Revenant",
    "Loba",
    "Rampart",
    "Horizon",
    "Fuse",
    "Valkyrie",
    "Seer",
    "Ash",
    "Mad Maggie",
    "Newcastle",
    "Vantage",
    "Catalyst",
    "Ballistic",
    "Conduit",
    "Alter"
  ];


  function randomNumberOnDay() {
    let currentDay = Math.floor(new Date() / (1000 * 60 * 60 * 24));
    const hash = CryptoJS.SHA256(currentDay.toString()).toString(CryptoJS.enc.Hex);
    const hashInt = parseInt(hash, 16);
    const randomNumber = hashInt % 26;
    return randomNumber;
  }

  return (
    <div className="Classic-game">
      <p><i>(debug) Today's character : {legends[randomNumberOnDay()]}</i></p>
      <LegendsBar />
      <ClassicGrid />
    </div>
  );
}

export default ClassicGame;