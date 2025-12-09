//Hämta ut html-elementet med id "alert-button"
const alertButton = document.getElementById("alert-button");

//alertButton = <button id="alert-button">Klicka på mig för att köra javascript</button>

//Lägg till en "click" event listener på knappen som kör funktionen showAlert när knappen klickas
alertButton.addEventListener("click", function () {
	showAlert("Hej ");
	//fem andra funktioner kan köras här
});

function showAlert(text) {
	const name = "Claes"; //Hämtar ett namn från en databas.
	console.log("Button clicked");
	console.log("Text parameter is: " + text);
	alertButton.innerHTML = text + name + "!";
}
