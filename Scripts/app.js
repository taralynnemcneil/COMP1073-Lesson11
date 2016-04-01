/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    
    var header = $('#mainHeader').load("partials/nav.html",  function(){
        var bodyid = $('body').attr('id');
        switch (bodyid) {
            case 'bodyIndex':
                $('#index').attr('class','active');
                break;
            case 'bodyProjects':
                $('#projects').attr('class','active');
                break;
            case 'bodyContact':
                $('#contact').attr('class','active');
                break;
        }
        
    });
    
    
    
})();

