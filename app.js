$(document).ready(function() {
	var numCount = +prompt("Enter Number");
		while (numCount % 1 != 0) {
			var numCount = +prompt("Enter Whole Number");
		}
	var fizzBuzz = function() {
		$('#button').click(function(){
			$('.displayed').fadeOut('fast');
			for (var i = 1; i < (numCount + 1); i++) {
				if (((i % 3) == 0) && ((i % 5) != 0)) {
					$('#display').append('<div class="displayed"> fizz </div>');
				}
				else if (((i % 5) == 0) && ((i % 3) != 0)) {
					$('#display').append('<div class="displayed"> buzz </div>');
				}
				else if (((i % 5) == 0) && ((i % 3) == 0)) {
					$('#display').append('<div class="displayed"> fizz buzz </div>');
				}
				else {
					$('#display').append('<div class="displayed">' + i + '</div>');
				}
			}
		});
	};
	fizzBuzz();	
});