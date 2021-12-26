//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//current Day/montgh/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=d65fab0dd0514419854c7e60a3652d06&dates=${lastYear},${currentDate}&ordering=-rating&page_size=100`;
const upcoming_games = `games?key=d65fab0dd0514419854c7e60a3652d06&dates=${currentDate},${nextYear}&ordering=-added&page_size=100`;
const new_games = `games?key=d65fab0dd0514419854c7e60a3652d06&dates=${lastYear},${currentDate}&ordering=-released&page_size=100`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=d65fab0dd0514419854c7e60a3652d06`;
//Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=d65fab0dd0514419854c7e60a3652d06`;
