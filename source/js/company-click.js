$(function () {

	//http://www.site.com.br/${data}/${data}/${origem}/${destino}

	// $('#decolar').on('click', function () {

	// 	var url = 'http://www.decolar.com/shop/flights/results/roundtrip/${dataOrigin}/${dataDestination}/${dtaIn}/2${dataOut}/1/0/0';

	// });

	// $('#voopter').on('click', function () {


	// 	var url = 'http://voopter.com.br/SAO/NYC#dl%5B%5D=20160330&dr%5B%5D=20160409&na=1&nc=0&ni=0&sn=true';
	// });

});

$('#apply').on('click', applyValue);

var elOrigin = '.searchbox__text--origin',
	elDestination = '.searchbox__text--destination',
	elIn = '.searchbox__date--in',
	elOut = '.searchbox__date--out';

function getValues () {
	dataOrigin = $(elOrigin).val();
	dataDestination = $(elDestination).val();
	dataIn = $(elIn).val();
	dataOut = $(elOut).val();
}

function applyValue () {
	var dataHref;


	getValues();

	$('.company__item').each(function (data) {
		console.log(data);

		dataHref = $(this).find('a').data('href');

		dataHref = dataHref.replace("${dataOrigin}", dataOrigin);
		dataHref = dataHref.replace("${dataDestination}", dataDestination);
		dataHref = dataHref.replace("${dtaIn}", dataIn);
		dataHref = dataHref.replace("${dataOut}", dataOut);

		$(this).find('a').attr('href', dataHref);
	});

	// var dataHref = $('.company__item a').data('href');


		

	// $('.company__item a').attr('href', dataHref);	
}

// var searchbox = class Search {
//   constructor(origin, destination, dataIn, dataOut) {
//     this.origin = origin;
//     this.destination = destination;
//     this.dataIn = dataIn;
//     this.dataOut = dataOut;
//   }
// }