(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
	var c = document.getElementById('current-time');
	
	var d = new Date();
	if (hours > 12) {
		hours -= 12;
	}
	var hours = d.getHours();
	
	c.innerHTML = hours + ':' + d.getMinutes();
});


})();