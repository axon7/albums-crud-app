import "whatwg-fetch";
import { filterTitles, sortByNumber, sortByTitle } from "./utils";

const sortTitleRadioBtn = document.querySelector("#sort-title");
const sortSubsRadioBtn = document.querySelector("#sort-subscribers");
const sortVideosRadioBtn = document.querySelector("#sort-videos");
const sortViewsRadioBtn = document.querySelector("#sort-views");
const main = document.querySelector("main");
const searchBar = document.forms.search.querySelector("input");
const clearButton = document.querySelector(".button");
let appData = [];
let primalData = [];
let currentSortOption = "";
const titles = [];

const createItemHTML = itemObject => {
  return `<li class="channel__item">
      <a href="${itemObject.customUrl}">
          <img class="channel__image" alt="${itemObject.title}" src="${
    itemObject.thumbnails.medium.url
  }">
      </a>
      <h2 class="channel__title">${itemObject.title}</h2>
      <div class="channel__info">
          <div class="channel__info-statistics"><p>SUBSCRIBERS:</p><span id="subscribers">${new Intl.NumberFormat(
            "en-US"
          ).format(itemObject.statistics.subscriberCount)}</span></div>
          <div class="channel__info-statistics"><p>VIDEOS:</p><span id="videos">${new Intl.NumberFormat(
            "en-US"
          ).format(itemObject.statistics.videoCount)}</span></div>
          <div class="channel__info-statistics"><p>VIEWS:</p><span id="views">${new Intl.NumberFormat(
            "en-US"
          ).format(itemObject.statistics.viewCount)}</span></div>
      </div>
  </li>`;
};

const renderChannels = data => {
  const channelsList = document.createElement("ul");
  channelsList.className = "channels-list";

  data.forEach(item => {
    channelsList.innerHTML += createItemHTML(item);
  });
  main.appendChild(channelsList);
};

const renderSearchedChannels = matches => {
  const filteredData = [...primalData].filter(item => {
    return matches.indexOf(item.title) > -1;
  });
  main.innerHTML = "";
  appData = filteredData;
  if (currentSortOption === "title") {
    renderChannels(sortByTitle(appData, currentSortOption));
  } else {
    renderChannels(sortByNumber(appData, currentSortOption));
  }
};

const showDefaultState = () => {
  renderChannels(primalData);
};

const uncheckAllRadioBtns = () => {
  const buttons = document.querySelectorAll(".choice--radio");
  buttons.forEach(button => {
    button.checked = false;
  });
};

clearButton.addEventListener("click", () => {
  main.innerHTML = "";
  document.querySelector("input").value = "";
  uncheckAllRadioBtns();
  showDefaultState();
});

sortTitleRadioBtn.addEventListener("click", () => {
  currentSortOption = "title";
  main.innerHTML = "";
  renderChannels(sortByTitle(appData, "title"));
});

sortSubsRadioBtn.addEventListener("click", () => {
  currentSortOption = "subscriberCount";
  main.innerHTML = "";
  renderChannels(sortByNumber(appData, "subscriberCount"));
});
sortVideosRadioBtn.addEventListener("click", () => {
  currentSortOption = "videoCount";
  main.innerHTML = "";
  renderChannels(sortByNumber(appData, "videoCount"));
});
sortViewsRadioBtn.addEventListener("click", () => {
  currentSortOption = "viewCount";
  main.innerHTML = "";
  renderChannels(sortByNumber(appData, "viewCount"));
});

searchBar.addEventListener("keyup", e => {
  renderSearchedChannels(filterTitles(titles, e.target.value));
});

fetch("channels.json")
  .then(res => res.json())
  .then(data => {
    appData = data;
    primalData = data;
    renderChannels(appData);

    for (let i = 0; i < appData.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      const title = appData[i].title;
      titles.push(title);
    }
  });
