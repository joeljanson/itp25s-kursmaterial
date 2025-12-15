console.log("Contact.js is loaded.");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;

	console.log("Form submitted:");
	console.log("Name:", name);
	console.log("Email:", email);
	console.log("Message:", message);

	if (!name || !email || !message) {
		alert("Vänligen fyll i alla fält innan du skickar meddelandet.");
		return;
	}

	if (name.length < 2) {
		alert("Namnet måste vara minst 2 tecken långt.");
		return;
	}

	alert(
		`Tack för ditt meddelande, ${name}! Jag återkommer till dig på ${email} så snart som möjligt.`
	);
});
