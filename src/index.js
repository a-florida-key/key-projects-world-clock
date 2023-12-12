function updateCityTimes() {
  let torontoDateElement = document.querySelector("#toronto-date");
  let torontoTimeElement = document.querySelector("#toronto-time");
  torontoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  torontoTimeElement.innerHTML = moment
    .tz("America/Toronto")
    .format("h:mm:ss:SSS [<small>]A[</small>]");

  let londonDateElement = document.querySelector("#london-date");
  let londonTimeElement = document.querySelector("#london-time");
  londonDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = moment
    .tz("Europe/London")
    .format("h:mm:ss:SSS [<small>]A[</small>]");
}
setInterval(updateCityTimes, 1);
