(function() {
"use strict";

document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

function estimateTotal(event) {
	event.preventDefault();
	
	if (document.getElementbyId('s-state').value === '') {
		alert('Please choose your shipping state');

	}
}

})();