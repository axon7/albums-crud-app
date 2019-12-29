const manipulateSVG = value => {
  const bluePath = document.querySelector(".blue");
  bluePath.style.strokeDasharray = `${value}, 490`;
};

let appData = [];
const ul = document.querySelector("ul");
const summary = document.querySelector("#summary");
const appTitle = document.querySelector("#appTitle");
let dropdown = document.getElementById("dropdown");
let weekOrMonth = dropdown.options[dropdown.selectedIndex].value;

const showWeekOrMonth = () => {
  let weekOrMonth = document.getElementById("dropdown").value;
  renderItems(appData[weekOrMonth]);
};

const createLeaderboardItem = itemObject => {
  return `<li data-name="${itemObject.name}">
     <p>${itemObject.name}</p>
     <p>${itemObject.mins}m</p>
  </li>`;
};

const createSummary = itemObject => {
  appTitle.textContent = `PEDRO'S ${itemObject.type.toUpperCase()}LY GOAL`;
  const value = (itemObject.mins * 490) / 50;
  manipulateSVG(value);
  return ` 
  <div id="insideProgressBar">
  <span id="current">Current</span>
  <span id="progressBarMins">${itemObject.mins}m</span>
  <span id="progressBarTotalGoal">50m Goal</p>
  </div>
  <div id="toAchieveGoal"> 
    <p><b>${itemObject.moreMins}</b> more mins. to achieve this ${itemObject.type}'s Goal.</p>
    <div id="streaks">
      <div class="streak">
        <p class="streakCount"><b>${itemObject.currentStreak}</b> </p>
        <p>Current Streak</p>
      </div>
      <div class="streak">
        <p class="streakCount"><b>${itemObject.bestStreak}</b></p>
        <p>Best Streak</p> 
      </div> 
      
    </div>
  </div>`;
};

const renderItems = data => {
  summary.innerHTML = createSummary(data[3]);
  ul.innerHTML = "";
  data.forEach(item => {
    ul.innerHTML += createLeaderboardItem(item);
  });
};

window.onload = function() {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      appData = data;
      renderItems(appData.week);
    });
};
