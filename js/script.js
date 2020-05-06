var APIKeyGoogle = "AIzaSyDLnmaYaDkfgDwgSHFbipNdh5ztO6nFE3E";



$(document).ready(function () {
  var cityInput;
  var userDate;

  $("#submit-button").on("click", function () {
    event.preventDefault();
    console.log("button was clicked");
    $("#user-inputs").addClass("is-hidden");
    $("#date-results").removeClass("is-hidden");
    cityInput = $("#city-input").val();
    userDate = $("#date-input").val();
    getRestaurants();
    console.log(cityInput);
    console.log("user date: " + userDate);
  });

  function getRestaurants() {
    event.preventDefault();

    let corsURL = "https://cors-anywhere.herokuapp.com/";
    var queryURL =
      corsURL +
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" +
      cityInput +
      "+restaurants&key=" +
      APIKeyGoogle;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log("test test");
      console.log(response.results[0].name);

      console.log(response.results[0].formatted_address);
      console.log(response.results[0].rating);
    });
  }

  $("#go-back").click(function () {
    $("#user-inputs").removeClass("is-hidden");
    $("#date-results").addClass("is-hidden");
  });
});

// var NameE = $("<p>").text(
//   "Name " + response.results[0].name 
// )