(function() {
"use strict";
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

	var btnEstimate = document.getElementById('btn-estimate');

	btnEstimate.disabled = true;

	state.addEventListener('change', function(){
		
		if (state.value === '') {
			btnEstimate.disable = true;
		} else {
			btnEstimate.disabled = false;
		}

	});

	var btnEstimate = document.getElementById('btn-estimate');

	
}));



function estimateTotal(event) {
	event.preventDefault();
	
	var state = document.getElementById('s-state');
	
	if (state.value === '') {
		alert('Please choose your shipping state.');
		
		state.focus();
	}
}

})();