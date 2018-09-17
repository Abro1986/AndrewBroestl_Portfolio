console.log('working');
let localHost = 'http:localhost:8080/api/mail'
let deployed = 'https://fathomless-fortress-45044.herokuapp.com/api/mail'

$('#mailform').submit(function (e) {

	e.preventDefault();
	$.ajax({
		url: deployed,
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