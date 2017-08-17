var token='SejvJtuereiUnonhReHcrmR6AASychnonnozxRYxBrBD4A4efs79BUgK3iQQ';

var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://pruebas.mienvio.mx/api/addresses",
		  "method": "POST",
		  "headers": {
		    "content-type": "application/json",
		    "authorization": "Bearer "+token
	  },
		  "processData": false,
		  "data": {
		  			object_type : "QUOTE",
		  			name: "Mauricio Lopez",
		  			street: "Pro Año, #28",
		  			street2: "Colonia Valle Gomez, Del Venustiano Carranza",
		  			zipcode: "15210",
		  			email: "harry1607@hotmail.com",
		  			phone: "5510157122"
		  		}
		}

jQuery.ajax(settings).done(function (response) {
  console.log(response);
});


var settings = {
		  "async": true,
		  "crossDomain": true, 	
		  "url": "http://pruebas.mienvio.mx/api/addresses",
		  "method": "POST",
		  "headers": {
		    "content-type": "application/json",
		    "authorization": "Bearer "+token
	  },
		  "processData": false, 
		  "data": {
		  			object_type : "QUOTE",
		  			name: "Leonel Lopez",
		  			street: "Norte 66",
		  			street2: "Colonia Valle Gomez, Del Venustiano Carranza",
		  			zipcode: "07890",
		  			email: "leonel.lopez.web@outlook.com",
		  			phone: "5523526419"
		  		}
		}

jQuery.ajax(settings).done(function (response) {
  console.log(response);
});
