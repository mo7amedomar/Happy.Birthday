let divo = document.createElement("div");
divo.innerHTML = "3";
document.body.append(divo);
function countdown() {
	divo.innerHTML -= 1;

	if (divo.innerHTML === "0") {
		window.location = "Nour.html";
		clearInterval(coun);
	}
}
let coun = setInterval(countdown, 1000);
