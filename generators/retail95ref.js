var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 10);
var c = Math.floor(Math.random() * 10);
var d = Math.floor(Math.random() * 10);
var e = Math.floor(Math.random() * 10);
var f = Math.floor(Math.random() * 10);
var g = Math.floor(Math.random() * 7) + 1;
var starta = Math.floor(Math.random() * 10);
var startb = Math.floor(Math.random() * 10);
var startc = Math.floor(Math.random() * 10);
var startaa = starta * 100;
var startbb = startb * 10;
var startcc = startc;
var add = a + b + c + d + e + f + g;
var aa = a * 1000000;
var bb = b * 100000;
var cc = c * 10000;
var dd = d * 1000;
var ee = e * 100;
var ff = f * 10;
var gg = g;
var key2 = aa + bb + cc + dd + ee + ff + gg;
var key1 = startaa + startbb + startcc;
var validcheck = add / 7;

if (Number.isInteger(validcheck) == true) {
	if (key1 != 333){
		if (key1 != 444){
			if (key1 != 555) {
				if (key1 != 666) {
					if (key1 != 777) {
						if (key1 != 888){
							if (key1 != 999) {
								if (key1 <= 99){
									window.location.reload();
								} else {
									if (key2 >= 1000000) {
										document.getElementById("key").innerHTML = key1 + "-" + key2;
									} else {
										window.location.reload();
									}
								}
							} else {
								window.location.reload();
							}
						} else {
							window.location.reload();
						}
					} else {
						window.location.reload();
					}
				} else {
					window.location.reload();
				}
			} else {
				window.location.reload();
			}
		} else {
			window.location.reload();
		}
	} else {
		window.location.reload();
	}
} else {
	window.location.reload();
}