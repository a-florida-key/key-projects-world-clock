let torontoDateElement = document.querySelector("#toronto-date");
let torontoTimeElement = document.querySelector("#toronto-time");
torontoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
torontoTimeElement.innerHTML = moment
  .tz("America/Toronto")
  .format("h:mm [<small>]A[</small>]");

let londonDateElement = document.querySelector("#london-date");
let londonTimeElement = document.querySelector("#ondon-time");
londonDateElement.innerHTML = moment().format("MMMM Do, YYYY");
londonTimeElement.innerHTML = moment
  .tz("Europe/London")
  .format("h:mm [<small>]A[</small>]");
