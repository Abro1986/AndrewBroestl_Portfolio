console.log('working');

$('#mailform').submit(function (e) {

	e.preventDefault();
	$.ajax({
		url: 'https://fathomless-fortress-45044.herokuapp.com/api/mail',
		type: 'POST',
		data: $(this).serialize(),
		success: function(data) {
			$('#mailform').html(data);
		},
		error: function (jXHR, textStatus, errorThrown) {
                console.log(errorThrown);
        },
	})
});