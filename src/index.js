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

