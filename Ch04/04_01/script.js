(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
    var c = document.getElementById('current-time');

    var d = new Date();
    
    c.innerHTML = d.toTimeString();

    c.innerHTML = '1:00 PM';

    });



})();