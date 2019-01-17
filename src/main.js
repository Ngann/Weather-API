import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dino } from './../src/dino.js';
// import { WeatherService } from './../src/weather-service.js';
import { Bike } from './../src/bike.js';

$(document).ready(function() {
  //BIKE INDEX //
  let bikeServices = new Bike();
  let promise = bikeServices.getBikeInfor();

  promise.then(function(response) {
    let bikeBody = JSON.parse(response);
     $('.bikeName').text(`Bike brand ${bikeBody.manufacturer.name}`);
     $('.bikeId').text(`Bike Id ${bikeBody.manufacturer.id}`);
  }, function(error) {
    $('.bikeErrors').text(`There was an error processing your request: ${error.message}`);
  });

  /// Weather Services ///
  // $('#weatherLocation').click(function() {
  //   let key = process.env.API_KEY
  //   let city = $('#location').val();
  //   $('#location').val("");
  //
  //
  //   let weatherService = new WeatherService();  // create instance of WeatherService class
  //   let promise = weatherService.getWeatherByCity(city);  // call the instance method and pass in user input
  //
  //   promise.then(function(response) {
  //     let body = JSON.parse(response);
  //     $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
  //     $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  //   }, function(error) {
  //     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  //   });
  // });


///// DINO ///
  // let dinoServices = new Dino();
  // let promise = dinoServices.getDinoLorem();
  //
  // promise.then(function(response) {
  //   let dinoBody = JSON.parse(response);
  // }, function(error) {
  //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  // });

});
