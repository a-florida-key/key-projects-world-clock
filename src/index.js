function updateCityTimes() {
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = document.querySelector(".date");
    let torontoTimeElement = document.querySelector(".time");
    torontoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    torontoTimeElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = document.querySelector(".date");
    let londonTimeElement = document.querySelector(".time");
    londonDateElement.innerHTML = moment().format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment.tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
      </div></div>`;
}

setInterval(updateCityTimes, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
