function updateCityTimes() {
  let torontoDateElement = document.querySelector("#toronto-date");
  let torontoTimeElement = document.querySelector("#toronto-time");
  torontoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  torontoTimeElement.innerHTML = moment
    .tz("America/Toronto")
    .format("h:mm:ss [<small>]A[</small>]");

  let londonDateElement = document.querySelector("#london-date");
  let londonTimeElement = document.querySelector("#london-time");
  londonDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = moment
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");

  let chicagoDateElement = document.querySelector("#chicago-date");
  let chicagoTimeElement = document.querySelector("#chicago-time");
  chicagoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  chicagoTimeElement.innerHTML = moment
    .tz("America/chicago")
    .format("h:mm:ss [<small>]A[</small>]");

  let sydneyDateElement = document.querySelector("#sydney-date");
  let sydneyTimeElement = document.querySelector("#sydney-time");
  sydneyDateElement.innerHTML = moment().format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = moment
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updateCityTimes, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityTimeZone}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
      </div>`;
}

let citiesSelect = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
