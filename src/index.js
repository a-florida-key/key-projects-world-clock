let torontoDateElement = document.querySelector("#toronto-date");
let torontoTimeElement = document.querySelector("#toronto-time");
torontoDateElement.innerHTML = moment().format("MMMM Do, YYYY");
torontoTimeElement.innerHTML = moment
  .tz("Asia/Tokyo")
  .format("h:mm [<small>]A[</small>]");
