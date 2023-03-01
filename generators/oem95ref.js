	var starta = Math.floor(Math.random() * 266) + 100;
	var startb = Math.floor(Math.random() * 2) + 98;
	var startaa = starta * 100;
	var parta = startaa + startb;
	var mida = Math.floor(Math.random() * 9) + 1;
	var midb = Math.floor(Math.random() * 9) + 1;
	var midc = Math.floor(Math.random() * 9) + 1;
	var midd = Math.floor(Math.random() * 9) + 1;
	var mide = Math.floor(Math.random() * 9) + 1;
	var midf = Math.floor(Math.random() * 9) + 1;
	var end = Math.floor(Math.random() * 90000) + 10000;
	var midaa = mida * 100000;
	var midbb = midb * 10000;
	var midcc = midc * 1000;
	var middd = midd * 100;
	var midee = mide * 10;
	var add = mida + midb + midc + midd + mide + midf;
	var check = add / 7;
	var partb = midaa + midbb + midcc + middd + midee + midf;

	if (Number.isInteger(check) == true){
		document.getElementById("key").innerHTML = parta + "-OEM-0" + partb + "-" + end;
	} else {
		window.location.reload();
	}



