function prices() {
	var origin = document.getElementById("origin").value;
	var destination = document.getElementById("destination").value;
	var ticket = document.getElementById("ticket").value;

	var price = 0;

// beep card

	// recto
	if (origin === "recto" && destination === "recto" && ticket === "beep") {
	price = 13;
	} else if (origin === "recto" && destination === "legarda" && ticket === "beep") {
	price = 15;
	} else if (origin === "recto" && destination === "pureza" && ticket === "beep") {
	price = 16;
	} else if (origin === "recto" && destination === "V-Mapa" && ticket === "beep") {
	price = 18;
	} else if (origin === "recto" && destination === "J-Ruiz" && ticket === "beep") {
	price = 19;
	} else if (origin === "recto" && destination === "gilmore" && ticket === "beep") {
	price = 21;
	} else if (origin === "recto" && destination === "belmonte" && ticket === "beep") {
	price = 22;
	} else if (origin === "recto" && destination === "cubao" && ticket === "beep") {
	price = 23;
	} else if (origin === "recto" && destination === "anonas" && ticket === "beep") {
	price = 25;
	} else if (origin === "recto" && destination === "katipunan" && ticket === "beep") {
	price = 26;
	} else if (origin === "recto" && destination === "santolan" && ticket === "beep") {
	price = 28;
	} else if (origin === "recto" && destination === "marikina" && ticket === "beep") {
	price = 31;
	} else if (origin === "recto" && destination === "antipolo" && ticket === "beep") {
	price = 33;}

	// legarda
	if (origin === "legarda" && destination === "legarda" && ticket === "beep") {
	price = 13;
	} else if (origin === "legarda" && destination === "recto" && ticket === "beep") {
	price = 15;
	} else if (origin === "legarda" && destination === "pureza" && ticket === "beep") {
	price = 15;
	} else if (origin === "legarda" && destination === "V-Mapa" && ticket === "beep") {
	price = 17;
	} else if (origin === "legarda" && destination === "J-Ruiz" && ticket === "beep") {
	price = 18;
	} else if (origin === "legarda" && destination === "gilmore" && ticket === "beep") {
	price = 19;
	} else if (origin === "legarda" && destination === "belmonte" && ticket === "beep") {
	price = 21;
	} else if (origin === "legarda" && destination === "cubao" && ticket === "beep") {
	price = 22;
	} else if (origin === "legarda" && destination === "anonas" && ticket === "beep") {
	price = 24;
	} else if (origin === "legarda" && destination === "katipunan" && ticket === "beep") {
	price = 25;
	} else if (origin === "legarda" && destination === "santolan" && ticket === "beep") {
	price = 27;
	} else if (origin === "legarda" && destination === "marikina" && ticket === "beep") {
	price = 29;
	} else if (origin === "legarda" && destination === "antipolo" && ticket === "beep") {
	price = 32;}

	// pureza
	if (origin === "pureza" && destination === "pureza" && ticket === "beep") {
	price = 13;
	} else if (origin === "pureza" && destination === "recto" && ticket === "beep") {
	price = 16;
	} else if (origin === "pureza" && destination === "legarda" && ticket === "beep") {
	price = 15;
	} else if (origin === "pureza" && destination === "V-Mapa" && ticket === "beep") {
	price = 15;
	} else if (origin === "pureza" && destination === "J-Ruiz" && ticket === "beep") {
	price = 16;
	} else if (origin === "pureza" && destination === "gilmore" && ticket === "beep") {
	price = 18;
	} else if (origin === "pureza" && destination === "belmonte" && ticket === "beep") {
	price = 19;
	} else if (origin === "pureza" && destination === "cubao" && ticket === "beep") {
	price = 20;
	} else if (origin === "pureza" && destination === "anonas" && ticket === "beep") {
	price = 22;
	} else if (origin === "pureza" && destination === "katipunan" && ticket === "beep") {
	price = 23;
	} else if (origin === "pureza" && destination === "santolan" && ticket === "beep") {
	price = 26;
	} else if (origin === "pureza" && destination === "marikina" && ticket === "beep") {
	price = 28;
	} else if (origin === "pureza" && destination === "antipolo" && ticket === "beep") {
	price = 30;}

	// V-Mapa
	if (origin === "V-Mapa" && destination === "V-Mapa" && ticket === "beep") {
	price = 13;
	} else if (origin === "V-Mapa" && destination === "recto" && ticket === "beep") {
	price = 18;
	} else if (origin === "V-Mapa" && destination === "legarda" && ticket === "beep") {
	price = 17;
	} else if (origin === "V-Mapa" && destination === "pureza" && ticket === "beep") {
	price = 15;
	} else if (origin === "V-Mapa" && destination === "J-Ruiz" && ticket === "beep") {
	price = 15;
	} else if (origin === "V-Mapa" && destination === "gilmore" && ticket === "beep") {
	price = 16;
	} else if (origin === "V-Mapa" && destination === "belmonte" && ticket === "beep") {
	price = 17;
	} else if (origin === "V-Mapa" && destination === "cubao" && ticket === "beep") {
	price = 19;
	} else if (origin === "V-Mapa" && destination === "anonas" && ticket === "beep") {
	price = 20;
	} else if (origin === "V-Mapa" && destination === "katipunan" && ticket === "beep") {
	price = 22;
	} else if (origin === "V-Mapa" && destination === "santolan" && ticket === "beep") {
	price = 24;
	} else if (origin === "V-Mapa" && destination === "marikina" && ticket === "beep") {
	price = 26;
	} else if (origin === "V-Mapa" && destination === "antipolo" && ticket === "beep") {
	price = 29;}

	// J-Ruiz
	if (origin === "J-Ruiz" && destination === "J-Ruiz" && ticket === "beep") {
	price = 13;
	} else if (origin === "J-Ruiz" && destination === "recto" && ticket === "beep") {
	price = 19;
	} else if (origin === "J-Ruiz" && destination === "legarda" && ticket === "beep") {
	price = 18;
	} else if (origin === "J-Ruiz" && destination === "pureza" && ticket === "beep") {
	price = 16;
	} else if (origin === "J-Ruiz" && destination === "V-Mapa" && ticket === "beep") {
	price = 15;
	} else if (origin === "J-Ruiz" && destination === "gilmore" && ticket === "beep") {
	price = 14;
	} else if (origin === "J-Ruiz" && destination === "belmonte" && ticket === "beep") {
	price = 16;
	} else if (origin === "J-Ruiz" && destination === "cubao" && ticket === "beep") {
	price = 17;
	} else if (origin === "J-Ruiz" && destination === "anonas" && ticket === "beep") {
	price = 19;
	} else if (origin === "J-Ruiz" && destination === "katipunan" && ticket === "beep") {
	price = 22;
	} else if (origin === "J-Ruiz" && destination === "santolan" && ticket === "beep") {
	price = 24;
	} else if (origin === "J-Ruiz" && destination === "marikina" && ticket === "beep") {
	price = 26;
	} else if (origin === "J-Ruiz" && destination === "antipolo" && ticket === "beep") {
	price = 29;}

	// gilmore
	if (origin === "gilmore" && destination === "gilmore" && ticket === "beep") {
	price = 13;
	} else if (origin === "gilmore" && destination === "recto" && ticket === "beep") {
	price = 21;
	} else if (origin === "gilmore" && destination === "legarda" && ticket === "beep") {
	price = 19;
	} else if (origin === "gilmore" && destination === "V-Mapa" && ticket === "beep") {
	price = 18;
	} else if (origin === "gilmore" && destination === "J-Ruiz" && ticket === "beep") {
	price = 16;
	} else if (origin === "gilmore" && destination === "pureza" && ticket === "beep") {
	price = 14;
	} else if (origin === "gilmore" && destination === "belmonte" && ticket === "beep") {
	price = 15;
	} else if (origin === "gilmore" && destination === "cubao" && ticket === "beep") {
	price = 16;
	} else if (origin === "gilmore" && destination === "anonas" && ticket === "beep") {
	price = 18;
	} else if (origin === "gilmore" && destination === "katipunan" && ticket === "beep") {
	price = 19;
	} else if (origin === "gilmore" && destination === "santolan" && ticket === "beep") {
	price = 21;
	} else if (origin === "gilmore" && destination === "marikina" && ticket === "beep") {
	price = 23;
	} else if (origin === "gilmore" && destination === "antipolo" && ticket === "beep") {
	price = 26;}

	// belmonte
	if (origin === "belmonte" && destination === "belmonte" && ticket === "beep") {
	price = 13;
	} else if (origin === "belmonte" && destination === "recto" && ticket === "beep") {
	price = 22;
	} else if (origin === "belmonte" && destination === "legarda" && ticket === "beep") {
	price = 21;
	} else if (origin === "belmonte" && destination === "V-Mapa" && ticket === "beep") {
	price = 19;
	} else if (origin === "belmonte" && destination === "J-Ruiz" && ticket === "beep") {
	price = 17;
	} else if (origin === "belmonte" && destination === "pureza" && ticket === "beep") {
	price = 16;
	} else if (origin === "belmonte" && destination === "gilmore" && ticket === "beep") {
	price = 15;
	} else if (origin === "belmonte" && destination === "cubao" && ticket === "beep") {
	price = 15;
	} else if (origin === "belmonte" && destination === "anonas" && ticket === "beep") {
	price = 16;
	} else if (origin === "belmonte" && destination === "katipunan" && ticket === "beep") {
	price = 18;
	} else if (origin === "belmonte" && destination === "santolan" && ticket === "beep") {
	price = 20;
	} else if (origin === "belmonte" && destination === "marikina" && ticket === "beep") {
	price = 22;
	} else if (origin === "belmonte" && destination === "antipolo" && ticket === "beep") {
	price = 25;}

	// cubao
	if (origin === "cubao" && destination === "cubao" && ticket === "beep") {
	price = 13;
	} else if (origin === "cubao" && destination === "recto" && ticket === "beep") {
	price = 23;
	} else if (origin === "cubao" && destination === "legarda" && ticket === "beep") {
	price = 22;
	} else if (origin === "cubao" && destination === "V-Mapa" && ticket === "beep") {
	price = 20;
	} else if (origin === "cubao" && destination === "J-Ruiz" && ticket === "beep") {
	price = 19;
	} else if (origin === "cubao" && destination === "pureza" && ticket === "beep") {
	price = 17;
	} else if (origin === "cubao" && destination === "gilmore" && ticket === "beep") {
	price = 16;
	} else if (origin === "cubao" && destination === "belmonte" && ticket === "beep") {
	price = 15;
	} else if (origin === "cubao" && destination === "anonas" && ticket === "beep") {
	price = 15;
	} else if (origin === "cubao" && destination === "katipunan" && ticket === "beep") {
	price = 16;
	} else if (origin === "cubao" && destination === "santolan" && ticket === "beep") {
	price = 19;
	} else if (origin === "cubao" && destination === "marikina" && ticket === "beep") {
	price = 21;
	} else if (origin === "cubao" && destination === "antipolo" && ticket === "beep") {
	price = 23;}

	// anonas
	if (origin === "anonas" && destination === "anonas" && ticket === "beep") {
	price = 13;
	} else if (origin === "anonas" && destination === "recto" && ticket === "beep") {
	price = 25;
	} else if (origin === "anonas" && destination === "legarda" && ticket === "beep") {
	price = 24;
	} else if (origin === "anonas" && destination === "V-Mapa" && ticket === "beep") {
	price = 22;
	} else if (origin === "anonas" && destination === "J-Ruiz" && ticket === "beep") {
	price = 20;
	} else if (origin === "anonas" && destination === "pureza" && ticket === "beep") {
	price = 19;
	} else if (origin === "anonas" && destination === "gilmore" && ticket === "beep") {
	price = 18;
	} else if (origin === "anonas" && destination === "belmonte" && ticket === "beep") {
	price = 16;
	} else if (origin === "anonas" && destination === "cubao" && ticket === "beep") {
	price = 15;
	} else if (origin === "anonas" && destination === "katipunan" && ticket === "beep") {
	price = 14;
	} else if (origin === "anonas" && destination === "santolan" && ticket === "beep") {
	price = 17;
	} else if (origin === "anonas" && destination === "marikina" && ticket === "beep") {
	price = 19;
	} else if (origin === "anonas" && destination === "antipolo" && ticket === "beep") {
	price = 22;}

	// katipunan
	if (origin === "katipunan" && destination === "katipunan" && ticket === "beep") {
	price = 13;
	} else if (origin === "katipunan" && destination === "recto" && ticket === "beep") {
	price = 26;
	} else if (origin === "katipunan" && destination === "legarda" && ticket === "beep") {
	price = 25;
	} else if (origin === "katipunan" && destination === "V-Mapa" && ticket === "beep") {
	price = 23;
	} else if (origin === "katipunan" && destination === "J-Ruiz" && ticket === "beep") {
	price = 22;
	} else if (origin === "katipunan" && destination === "pureza" && ticket === "beep") {
	price = 20;
	} else if (origin === "katipunan" && destination === "gilmore" && ticket === "beep") {
	price = 19;
	} else if (origin === "katipunan" && destination === "belmonte" && ticket === "beep") {
	price = 18;
	} else if (origin === "katipunan" && destination === "cubao" && ticket === "beep") {
	price = 16;
	} else if (origin === "katipunan" && destination === "anonas" && ticket === "beep") {
	price = 14;
	} else if (origin === "katipunan" && destination === "santolan" && ticket === "beep") {
	price = 16;
	} else if (origin === "katipunan" && destination === "marikina" && ticket === "beep") {
	price = 18;
	} else if (origin === "katipunan" && destination === "antipolo" && ticket === "beep") {
	price = 21;}

	// santolan
	if (origin === "santolan" && destination === "santolan" && ticket === "beep") {
	price = 13;
	} else if (origin === "santolan" && destination === "recto" && ticket === "beep") {
	price = 28;
	} else if (origin === "santolan" && destination === "legarda" && ticket === "beep") {
	price = 27;
	} else if (origin === "santolan" && destination === "V-Mapa" && ticket === "beep") {
	price = 26;
	} else if (origin === "santolan" && destination === "J-Ruiz" && ticket === "beep") {
	price = 24;
	} else if (origin === "santolan" && destination === "pureza" && ticket === "beep") {
	price = 22;
	} else if (origin === "santolan" && destination === "gilmore" && ticket === "beep") {
	price = 21;
	} else if (origin === "santolan" && destination === "belmonte" && ticket === "beep") {
	price = 20;
	} else if (origin === "santolan" && destination === "cubao" && ticket === "beep") {
	price = 19;
	} else if (origin === "santolan" && destination === "anonas" && ticket === "beep") {
	price = 17;
	} else if (origin === "santolan" && destination === "katipunan" && ticket === "beep") {
	price = 16;
	} else if (origin === "santolan" && destination === "marikina" && ticket === "beep") {
	price = 15;
	} else if (origin === "santolan" && destination === "antipolo" && ticket === "beep") {
	price = 18;}

	// marikina
	if (origin === "marikina" && destination === "marikina" && ticket === "beep") {
	price = 13;
	} else if (origin === "marikina" && destination === "recto" && ticket === "beep") {
	price = 31;
	} else if (origin === "marikina" && destination === "legarda" && ticket === "beep") {
	price = 29;
	} else if (origin === "marikina" && destination === "V-Mapa" && ticket === "beep") {
	price = 28;
	} else if (origin === "marikina" && destination === "J-Ruiz" && ticket === "beep") {
	price = 26;
	} else if (origin === "marikina" && destination === "pureza" && ticket === "beep") {
	price = 24;
	} else if (origin === "marikina" && destination === "gilmore" && ticket === "beep") {
	price = 23;
	} else if (origin === "marikina" && destination === "belmonte" && ticket === "beep") {
	price = 22;
	} else if (origin === "marikina" && destination === "cubao" && ticket === "beep") {
	price = 21;
	} else if (origin === "marikina" && destination === "anonas" && ticket === "beep") {
	price = 19;
	} else if (origin === "marikina" && destination === "katipunan" && ticket === "beep") {
	price = 18;
	} else if (origin === "marikina" && destination === "santolan" && ticket === "beep") {
	price = 15;
	} else if (origin === "marikina" && destination === "antipolo" && ticket === "beep") {
	price = 16;}

	// antipolo
	if (origin === "antipolo" && destination === "antipolo" && ticket === "beep") {
	price = 13;
	} else if (origin === "antipolo" && destination === "recto" && ticket === "beep") {
	price = 33;
	} else if (origin === "antipolo" && destination === "legarda" && ticket === "beep") {
	price = 32;
	} else if (origin === "antipolo" && destination === "V-Mapa" && ticket === "beep") {
	price = 30;
	} else if (origin === "antipolo" && destination === "J-Ruiz" && ticket === "beep") {
	price = 29;
	} else if (origin === "antipolo" && destination === "pureza" && ticket === "beep") {
	price = 27;
	} else if (origin === "antipolo" && destination === "gilmore" && ticket === "beep") {
	price = 26;
	} else if (origin === "antipolo" && destination === "belmonte" && ticket === "beep") {
	price = 25;
	} else if (origin === "antipolo" && destination === "cubao" && ticket === "beep") {
	price = 23;
	} else if (origin === "antipolo" && destination === "anonas" && ticket === "beep") {
	price = 22;
	} else if (origin === "antipolo" && destination === "katipunan" && ticket === "beep") {
	price = 21;
	} else if (origin === "antipolo" && destination === "santolan" && ticket === "beep") {
	price = 18;
	} else if (origin === "antipolo" && destination === "marikina" && ticket === "beep") {
	price = 16;}

// single use

	// recto
	if (origin === "recto" && destination === "recto" && ticket === "single") {
	price = 0;
	} else if (origin === "recto" && destination === "legarda" && ticket === "single") {
	price = 15;
	} else if (origin === "recto" && destination === "pureza" && ticket === "single") {
	price = 20;
	} else if (origin === "recto" && destination === "V-Mapa" && ticket === "single") {
	price = 20;
	} else if (origin === "recto" && destination === "J-Ruiz" && ticket === "single") {
	price = 20;
	} else if (origin === "recto" && destination === "gilmore" && ticket === "single") {
	price = 25;
	} else if (origin === "recto" && destination === "belmonte" && ticket === "single") {
	price = 25;
	} else if (origin === "recto" && destination === "cubao" && ticket === "single") {
	price = 25;
	} else if (origin === "recto" && destination === "anonas" && ticket === "single") {
	price = 25;
	} else if (origin === "recto" && destination === "katipunan" && ticket === "single") {
	price = 30;
	} else if (origin === "recto" && destination === "santolan" && ticket === "single") {
	price = 30;
	} else if (origin === "recto" && destination === "marikina" && ticket === "single") {
	price = 35;
	} else if (origin === "recto" && destination === "antipolo" && ticket === "single") {
	price = 35;}

	// legarda
	if (origin === "legarda" && destination === "legarda" && ticket === "single") {
	price = 0;
	} else if (origin === "legarda" && destination === "recto" && ticket === "single") {
	price = 15;
	} else if (origin === "legarda" && destination === "pureza" && ticket === "single") {
	price = 15;
	} else if (origin === "legarda" && destination === "V-Mapa" && ticket === "single") {
	price = 20;
	} else if (origin === "legarda" && destination === "J-Ruiz" && ticket === "single") {
	price = 20;
	} else if (origin === "legarda" && destination === "gilmore" && ticket === "single") {
	price = 20;
	} else if (origin === "legarda" && destination === "belmonte" && ticket === "single") {
	price = 25;
	} else if (origin === "legarda" && destination === "cubao" && ticket === "single") {
	price = 25;
	} else if (origin === "legarda" && destination === "anonas" && ticket === "single") {
	price = 25;
	} else if (origin === "legarda" && destination === "katipunan" && ticket === "single") {
	price = 25;
	} else if (origin === "legarda" && destination === "santolan" && ticket === "single") {
	price = 30;
	} else if (origin === "legarda" && destination === "marikina" && ticket === "single") {
	price = 30;
	} else if (origin === "legarda" && destination === "antipolo" && ticket === "single") {
	price = 35;}

	// pureza
	if (origin === "pureza" && destination === "pureza" && ticket === "single") {
	price = 0;
	} else if (origin === "pureza" && destination === "recto" && ticket === "single") {
	price = 20;
	} else if (origin === "pureza" && destination === "legarda" && ticket === "single") {
	price = 20;
	} else if (origin === "pureza" && destination === "V-Mapa" && ticket === "single") {
	price = 15;
	} else if (origin === "pureza" && destination === "J-Ruiz" && ticket === "single") {
	price = 15;
	} else if (origin === "pureza" && destination === "gilmore" && ticket === "single") {
	price = 20;
	} else if (origin === "pureza" && destination === "belmonte" && ticket === "single") {
	price = 20;
	} else if (origin === "pureza" && destination === "cubao" && ticket === "single") {
	price = 20;
	} else if (origin === "pureza" && destination === "anonas" && ticket === "single") {
	price = 20;
	} else if (origin === "pureza" && destination === "katipunan" && ticket === "single") {
	price = 25;
	} else if (origin === "pureza" && destination === "santolan" && ticket === "single") {
	price = 30;
	} else if (origin === "pureza" && destination === "marikina" && ticket === "single") {
	price = 30;
	} else if (origin === "pureza" && destination === "antipolo" && ticket === "single") {
	price = 30;}

	// V-Mapa
	if (origin === "V-Mapa" && destination === "V-Mapa" && ticket === "single") {
	price = 0;
	} else if (origin === "V-Mapa" && destination === "recto" && ticket === "single") {
	price = 20;
	} else if (origin === "V-Mapa" && destination === "legarda" && ticket === "single") {
	price = 20;
	} else if (origin === "V-Mapa" && destination === "pureza" && ticket === "single") {
	price = 15;
	} else if (origin === "V-Mapa" && destination === "J-Ruiz" && ticket === "single") {
	price = 15;
	} else if (origin === "V-Mapa" && destination === "gilmore" && ticket === "single") {
	price = 20;
	} else if (origin === "V-Mapa" && destination === "belmonte" && ticket === "single") {
	price = 20;
	} else if (origin === "V-Mapa" && destination === "cubao" && ticket === "single") {
	price = 20;
	} else if (origin === "V-Mapa" && destination === "anonas" && ticket === "single") {
	price = 20;
	} else if (origin === "V-Mapa" && destination === "katipunan" && ticket === "single") {
	price = 25;
	} else if (origin === "V-Mapa" && destination === "santolan" && ticket === "single") {
	price = 25;
	} else if (origin === "V-Mapa" && destination === "marikina" && ticket === "single") {
	price = 30;
	} else if (origin === "V-Mapa" && destination === "antipolo" && ticket === "single") {
	price = 30;}

	// J-Ruiz
	if (origin === "J-Ruiz" && destination === "J-Ruiz" && ticket === "single") {
	price = 0;
	} else if (origin === "J-Ruiz" && destination === "recto" && ticket === "single") {
	price = 20;
	} else if (origin === "J-Ruiz" && destination === "legarda" && ticket === "single") {
	price = 20;
	} else if (origin === "J-Ruiz" && destination === "pureza" && ticket === "single") {
	price = 20;
	} else if (origin === "J-Ruiz" && destination === "V-Mapa" && ticket === "single") {
	price = 15;
	} else if (origin === "J-Ruiz" && destination === "gilmore" && ticket === "single") {
	price = 15;
	} else if (origin === "J-Ruiz" && destination === "belmonte" && ticket === "single") {
	price = 20;
	} else if (origin === "J-Ruiz" && destination === "cubao" && ticket === "single") {
	price = 20;
	} else if (origin === "J-Ruiz" && destination === "anonas" && ticket === "single") {
	price = 20;
	} else if (origin === "J-Ruiz" && destination === "katipunan" && ticket === "single") {
	price = 20;
	} else if (origin === "J-Ruiz" && destination === "santolan" && ticket === "single") {
	price = 25;
	} else if (origin === "J-Ruiz" && destination === "marikina" && ticket === "single") {
	price = 25;
	} else if (origin === "J-Ruiz" && destination === "antipolo" && ticket === "single") {
	price = 30;}

	// gilmore
	if (origin === "gilmore" && destination === "gilmore" && ticket === "single") {
	price = 0;
	} else if (origin === "gilmore" && destination === "recto" && ticket === "single") {
	price = 25;
	} else if (origin === "gilmore" && destination === "legarda" && ticket === "single") {
	price = 20;
	} else if (origin === "gilmore" && destination === "V-Mapa" && ticket === "single") {
	price = 20;
	} else if (origin === "gilmore" && destination === "J-Ruiz" && ticket === "single") {
	price = 20;
	} else if (origin === "gilmore" && destination === "pureza" && ticket === "single") {
	price = 15;
	} else if (origin === "gilmore" && destination === "belmonte" && ticket === "single") {
	price = 15;
	} else if (origin === "gilmore" && destination === "cubao" && ticket === "single") {
	price = 20;
	} else if (origin === "gilmore" && destination === "anonas" && ticket === "single") {
	price = 20;
	} else if (origin === "gilmore" && destination === "katipunan" && ticket === "single") {
	price = 20;
	} else if (origin === "gilmore" && destination === "santolan" && ticket === "single") {
	price = 25;
	} else if (origin === "gilmore" && destination === "marikina" && ticket === "single") {
	price = 25;
	} else if (origin === "gilmore" && destination === "antipolo" && ticket === "single") {
	price = 30;}

	// belmonte
	if (origin === "belmonte" && destination === "belmonte" && ticket === "single") {
	price = 0;
	} else if (origin === "belmonte" && destination === "recto" && ticket === "single") {
	price = 25;
	} else if (origin === "belmonte" && destination === "legarda" && ticket === "single") {
	price = 25;
	} else if (origin === "belmonte" && destination === "V-Mapa" && ticket === "single") {
	price = 20;
	} else if (origin === "belmonte" && destination === "J-Ruiz" && ticket === "single") {
	price = 20;
	} else if (origin === "belmonte" && destination === "pureza" && ticket === "single") {
	price = 20;
	} else if (origin === "belmonte" && destination === "gilmore" && ticket === "single") {
	price = 15;
	} else if (origin === "belmonte" && destination === "cubao" && ticket === "single") {
	price = 15;
	} else if (origin === "belmonte" && destination === "anonas" && ticket === "single") {
	price = 20;
	} else if (origin === "belmonte" && destination === "katipunan" && ticket === "single") {
	price = 20;
	} else if (origin === "belmonte" && destination === "santolan" && ticket === "single") {
	price = 20;
	} else if (origin === "belmonte" && destination === "marikina" && ticket === "single") {
	price = 25;
	} else if (origin === "belmonte" && destination === "antipolo" && ticket === "single") {
	price = 25;}

	// cubao
	if (origin === "cubao" && destination === "cubao" && ticket === "single") {
	price = 0;
	} else if (origin === "cubao" && destination === "recto" && ticket === "single") {
	price = 25;
	} else if (origin === "cubao" && destination === "legarda" && ticket === "single") {
	price = 25;
	} else if (origin === "cubao" && destination === "V-Mapa" && ticket === "single") {
	price = 20;
	} else if (origin === "cubao" && destination === "J-Ruiz" && ticket === "single") {
	price = 20;
	} else if (origin === "cubao" && destination === "pureza" && ticket === "single") {
	price = 20;
	} else if (origin === "cubao" && destination === "gilmore" && ticket === "single") {
	price = 20;
	} else if (origin === "cubao" && destination === "belmonte" && ticket === "single") {
	price = 15;
	} else if (origin === "cubao" && destination === "anonas" && ticket === "single") {
	price = 15;
	} else if (origin === "cubao" && destination === "katipunan" && ticket === "single") {
	price = 20;
	} else if (origin === "cubao" && destination === "santolan" && ticket === "single") {
	price = 20;
	} else if (origin === "cubao" && destination === "marikina" && ticket === "single") {
	price = 25;
	} else if (origin === "cubao" && destination === "antipolo" && ticket === "single") {
	price = 25;}

	// anonas
	if (origin === "anonas" && destination === "anonas" && ticket === "single") {
	price = 0;
	} else if (origin === "anonas" && destination === "recto" && ticket === "single") {
	price = 25;
	} else if (origin === "anonas" && destination === "legarda" && ticket === "single") {
	price = 25;
	} else if (origin === "anonas" && destination === "V-Mapa" && ticket === "single") {
	price = 25;
	} else if (origin === "anonas" && destination === "J-Ruiz" && ticket === "single") {
	price = 20;
	} else if (origin === "anonas" && destination === "pureza" && ticket === "single") {
	price = 20;
	} else if (origin === "anonas" && destination === "gilmore" && ticket === "single") {
	price = 20;
	} else if (origin === "anonas" && destination === "belmonte" && ticket === "single") {
	price = 20;
	} else if (origin === "anonas" && destination === "cubao" && ticket === "single") {
	price = 15;
	} else if (origin === "anonas" && destination === "katipunan" && ticket === "single") {
	price = 15;
	} else if (origin === "anonas" && destination === "santolan" && ticket === "single") {
	price = 20;
	} else if (origin === "anonas" && destination === "marikina" && ticket === "single") {
	price = 20;
	} else if (origin === "anonas" && destination === "antipolo" && ticket === "single") {
	price = 25;}

	// katipunan
	if (origin === "katipunan" && destination === "katipunan" && ticket === "single") {
	price = 0;
	} else if (origin === "katipunan" && destination === "recto" && ticket === "single") {
	price = 30;
	} else if (origin === "katipunan" && destination === "legarda" && ticket === "single") {
	price = 25;
	} else if (origin === "katipunan" && destination === "V-Mapa" && ticket === "single") {
	price = 25;
	} else if (origin === "katipunan" && destination === "J-Ruiz" && ticket === "single") {
	price = 25;
	} else if (origin === "katipunan" && destination === "pureza" && ticket === "single") {
	price = 20;
	} else if (origin === "katipunan" && destination === "gilmore" && ticket === "single") {
	price = 20;
	} else if (origin === "katipunan" && destination === "belmonte" && ticket === "single") {
	price = 20;
	} else if (origin === "katipunan" && destination === "cubao" && ticket === "single") {
	price = 20;
	} else if (origin === "katipunan" && destination === "anonas" && ticket === "single") {
	price = 15;
	} else if (origin === "katipunan" && destination === "santolan" && ticket === "single") {
	price = 20;
	} else if (origin === "katipunan" && destination === "marikina" && ticket === "single") {
	price = 20;
	} else if (origin === "katipunan" && destination === "antipolo" && ticket === "single") {
	price = 25;}

	// santolan
	if (origin === "santolan" && destination === "santolan" && ticket === "single") {
	price = 0;
	} else if (origin === "santolan" && destination === "recto" && ticket === "single") {
	price = 30;
	} else if (origin === "santolan" && destination === "legarda" && ticket === "single") {
	price = 30;
	} else if (origin === "santolan" && destination === "V-Mapa" && ticket === "single") {
	price = 30;
	} else if (origin === "santolan" && destination === "J-Ruiz" && ticket === "single") {
	price = 25;
	} else if (origin === "santolan" && destination === "pureza" && ticket === "single") {
	price = 25;
	} else if (origin === "santolan" && destination === "gilmore" && ticket === "single") {
	price = 25;
	} else if (origin === "santolan" && destination === "belmonte" && ticket === "single") {
	price = 20;
	} else if (origin === "santolan" && destination === "cubao" && ticket === "single") {
	price = 20;
	} else if (origin === "santolan" && destination === "anonas" && ticket === "single") {
	price = 20;
	} else if (origin === "santolan" && destination === "katipunan" && ticket === "single") {
	price = 20;
	} else if (origin === "santolan" && destination === "marikina" && ticket === "single") {
	price = 15;
	} else if (origin === "santolan" && destination === "antipolo" && ticket === "single") {
	price = 20;}

	// marikina
	if (origin === "marikina" && destination === "marikina" && ticket === "single") {
	price = 0;
	} else if (origin === "marikina" && destination === "recto" && ticket === "single") {
	price = 35;
	} else if (origin === "marikina" && destination === "legarda" && ticket === "single") {
	price = 30;
	} else if (origin === "marikina" && destination === "V-Mapa" && ticket === "single") {
	price = 30;
	} else if (origin === "marikina" && destination === "J-Ruiz" && ticket === "single") {
	price = 30;
	} else if (origin === "marikina" && destination === "pureza" && ticket === "single") {
	price = 25;
	} else if (origin === "marikina" && destination === "gilmore" && ticket === "single") {
	price = 25;
	} else if (origin === "marikina" && destination === "belmonte" && ticket === "single") {
	price = 25;
	} else if (origin === "marikina" && destination === "cubao" && ticket === "single") {
	price = 25;
	} else if (origin === "marikina" && destination === "anonas" && ticket === "single") {
	price = 20;
	} else if (origin === "marikina" && destination === "katipunan" && ticket === "single") {
	price = 20;
	} else if (origin === "marikina" && destination === "santolan" && ticket === "single") {
	price = 15;
	} else if (origin === "marikina" && destination === "antipolo" && ticket === "single") {
	price = 20;}

	// antipolo
	if (origin === "antipolo" && destination === "antipolo" && ticket === "single") {
	price = 0;
	} else if (origin === "antipolo" && destination === "recto" && ticket === "single") {
	price = 35;
	} else if (origin === "antipolo" && destination === "legarda" && ticket === "single") {
	price = 35;
	} else if (origin === "antipolo" && destination === "V-Mapa" && ticket === "single") {
	price = 30;
	} else if (origin === "antipolo" && destination === "J-Ruiz" && ticket === "single") {
	price = 30;
	} else if (origin === "antipolo" && destination === "pureza" && ticket === "single") {
	price = 30;
	} else if (origin === "antipolo" && destination === "gilmore" && ticket === "single") {
	price = 30;
	} else if (origin === "antipolo" && destination === "belmonte" && ticket === "single") {
	price = 25;
	} else if (origin === "antipolo" && destination === "cubao" && ticket === "single") {
	price = 25;
	} else if (origin === "antipolo" && destination === "anonas" && ticket === "single") {
	price = 25;
	} else if (origin === "antipolo" && destination === "katipunan" && ticket === "single") {
	price = 25;
	} else if (origin === "antipolo" && destination === "santolan" && ticket === "single") {
	price = 20;
	} else if (origin === "antipolo" && destination === "marikina" && ticket === "single") {
	price = 20;}

	document.getElementById('fare').innerHTML = ('₱' + price);
}
