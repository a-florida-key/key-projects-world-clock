let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = document.querySelector("#tokyo.date");
let tokyoTimeElement = document.querySelector("#tokyo.time");
tokyoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
tokyoTimeElement.innerHTML = moment().format("h:m A");
