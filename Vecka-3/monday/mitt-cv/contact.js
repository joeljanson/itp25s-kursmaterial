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
		const nameError = document.getElementById("name-error");
		//<p class="error-message" id="name-error"></p>
		nameError.textContent = "Namnet måste vara minst 2 tecken långt.";
		//<p class="error-message" id="name-error">Namnet måste vara ....</p>
		nameError.style.display = "block";
		return;
	}
	if (email.length < 5 || !email.includes("@")) {
		const emailError = document.getElementById("email-error");
		emailError.textContent = "E-postadressen måste vara minst 5 tecken lång.";
		emailError.style.display = "block";
		return;
	}

	alert(
		`Tack för ditt meddelande, ${name}! Jag återkommer till dig på ${email} så snart som möjligt.`
	);
});
