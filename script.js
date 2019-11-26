var friends = ['Tony', 'Shannon', 'Shelby', 'Rachael', 'David'];
var places = ['bathroom', 'kitchen', 'study', 'bedroom', 'wine cellar', 'office', 'basement', 'attic', 'game room', 'living room'];
var weapons = ['teddy bear', 'pickle', 'noisy cricket', 'lance', 'excalibur', 'elder wand', 'scepter', 'trident', 'crossbow', 'ham sandwich', 'lightsaber', 'thunderbolts', 'icicle', 'rubber chicken', 'katana', 'gauntlets', 'mjolnir', 'taser', 'frying pan', 'butter knife'];

for (var i = 0; i <= 99; i++) {
	click(i);
}

function click(num) {
	var colDiv = $('<div class="col-md-6 col-lg-3"></div>');
	var cardDiv = $('<div class="card shadow mb-3"></div>');
	var cardBody = $('<div class="card-body text-center text-nowrap"></div>');
	var h4 = $(`<h4>Accusation #${num + 1}</h4>`);
	colDiv.append(cardDiv);
	cardDiv.append(cardBody);
	cardBody.append(h4);
	$('section').append(colDiv);
	cardBody.click(() => {
		var friend = friends[num % friends.length];
		var place = places[num % places.length];
		var weapon = weapons[num % weapons.length];
		Swal.fire(`Accusation #${num + 1}: I accuse ${friend}, with the ${weapon} in the ${place}!`);
	});
}