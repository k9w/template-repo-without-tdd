import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import [constructor] from './business-logic.js'

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");

function getElements(response) {
  if (response.main) {
    $('showHumidity').text(`text ${reponse.name} is ${response.main.humidity}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(city) {
  const response = await WeatherService.getWeather(city);
  getElements(response);
}

$(document).ready(function() {
  $('#dinoaur-form').submit(function(event) {
    event.preventDefault();
    result = $('result').val();

    let promise = Dinosaur.getDinoWords();
    promise.then(function(response) {
      const body = JSON.parse(response);

    }, function(error) {

    });
    
    
    $('.result').html("");
  });  
});

