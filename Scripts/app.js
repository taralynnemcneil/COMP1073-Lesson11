/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    var mainContentH1 = $('#mainContent h1')[0];

    var welcome = $('#welcome').text();

    var mainContentH1JS = document.querySelectorAll('#mainContent h1')[1];

    //console.log(mainContentH1.textContent);
    //console.log(mainContentH1JS);
    //console.log(welcome);

    /* ---- this is the way of doing it with pure vanilla JS
    
    var form1JS = document.getElementById('form1');
    form1JS.style.width = "50%";
    ------------------------------------------------------ */

    // this is the same way to do it but shorter using JQUERY
    $('#form1').css('width', '50%');

    // targeting specific attributes (in this case the Placeholder)
    $('#form1 input').attr('placeholder', 'Enter your username');

    // ------------------------------------------------------------ //
    // JQUERY
    // ------------------------------------------------------------ //
    // change color on mouseover
    $('#submitButton').mouseover(function() {
        $('#submitButton').attr('class', 'btn btn-danger');
    });

    $('#submitButton').mouseout(function() {
        $('#submitButton').attr('class', 'btn btn-primary');
    });

    $('#submitButton').click(function() {

    });

    $('#defaultButton').click(function() {
        $('#username').val('Tara McNeil\'s lucky number is: ' + (Math.floor(Math.random() * 49) + 1));
    });


    $('#toggleButton').click(function() {
        if ($('#toggleButton').text() === 'Hide') {
            $('#form1').hide('1000');
            $('#toggleButton').text('Show');
        } else {
            $('#form1').show('1000');
            $('#toggleButton').text('Hide');
        }

    });

    $('#username').click(function() {
        $('#username').select(); // selects all text in the input area
    });


    // ------------------------------------------------------------ //
    // JavaScript
    // ------------------------------------------------------------ //
    /*
    // change color on mouseover
    document.getElementById('submitButton').addEventListener('mouseover', function() {
        document.getElementById('submitButton').setAttribute('class', 'btn btn-danger');
    });
    
    // change back to normal color when not hovering
    document.getElementById('submitButton').addEventListener('mouseout', function() {
        document.getElementById('submitButton').setAttribute('class', 'btn btn-primary');
    });
    
    // make the form disapear after submitting
    document.getElementById('submitButton').addEventListener('click', function() {
        document.getElementById('form1').style.display = 'none';
    });*/

})();

