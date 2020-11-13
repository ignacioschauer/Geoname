	$('#btnRun1').click(function() {

		$.ajax({
			url: "libs/php/getNearbyPlace.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLatNearbyPlace').val(),
				lng: $('#selLngNearbyPlace').val()
				},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtNearbyPlace').html('1. Nearby Place Found: ' + result['data'][0]['countryName']);
				}
			
			},
			error: function(jqXHR, exception) {
				var msg = '';
                if (jqXHR.status === 0) {
            	msg = 'ERROR: Not connect.\n Verify Network.';
        		} else if (jqXHR.status == 404) {
            	msg = 'ERROR: Requested page not found. [404]';
        		} else if (jqXHR.status == 500) {
            	msg = 'ERROR: Internal Server Error [500].';
        		} else if (exception === 'parsererror') {
            	msg = 'ERROR: Requested JSON parse failed.';
        		} else if (exception === 'timeout') {
            	msg = 'ERROR: Time out error.';
        		} else if (exception === 'abort') {
            	msg = 'ERROR: Ajax request aborted.';
        		} else {
            	msg = 'ERROR: Uncaught Error.\n' + jqXHR.responseText;
        		}
        	$('#txtNearbyPlace').html(msg);
    		},
		}); 
	});
	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/getTimeZone.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLatTimeZone').val(),
				lng: $('#selLngTimeZone').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtTimeZone').html('2. Time Zone : ' + result['data']['timezoneId']);
				}
			
			},
			error: function(jqXHR, exception) {
				var msg = '';
                if (jqXHR.status === 0) {
            	msg = 'ERROR: Not connect.\n Verify Network.';
        		} else if (jqXHR.status == 404) {
            	msg = 'ERROR: Requested page not found. [404]';
        		} else if (jqXHR.status == 500) {
            	msg = 'ERROR: Internal Server Error [500].';
        		} else if (exception === 'parsererror') {
            	msg = 'ERROR: Requested JSON parse failed.';
        		} else if (exception === 'timeout') {
            	msg = 'ERROR: Time out error.';
        		} else if (exception === 'abort') {
            	msg = 'ERROR: Ajax request aborted.';
        		} else {
            	msg = 'ERROR: Uncaught Error.\n' + jqXHR.responseText;
        		}
        	$('#txtTimeZone').html(msg);
    		},
		}); 
	});

	$('#btnRun3').click(function() {

		$.ajax({
			url: "libs/php/getCountrySubdivision.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#selLatCountrySubdivision').val(),
				lng: $('#selLngCountrySubdivision').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCountrySubdivision').html('3. Country Subdivision: ' + result['data']['adminName1']);
				}
			
			},
			error: function(jqXHR, exception) {
				var msg = '';
                if (jqXHR.status === 0) {
            	msg = 'ERROR: Not connect.\n Verify Network.';
        		} else if (jqXHR.status == 404) {
            	msg = 'ERROR: Requested page not found. [404]';
        		} else if (jqXHR.status == 500) {
            	msg = 'ERROR: Internal Server Error [500].';
        		} else if (exception === 'parsererror') {
            	msg = 'ERROR: Requested JSON parse failed.';
        		} else if (exception === 'timeout') {
            	msg = 'ERROR: Time out error.';
        		} else if (exception === 'abort') {
            	msg = 'ERROR: Ajax request aborted.';
        		} else {
            	msg = 'ERROR: Uncaught Error.\n' + jqXHR.responseText;
        		}
        	$('#txtCountrySubdivision').html(msg);
    		},		
		}); 
	});