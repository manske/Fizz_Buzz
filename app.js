$(document).ready(function() {
	$('#button').click(function(){
		for (var i = 0; i < 101; i++) {
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
});