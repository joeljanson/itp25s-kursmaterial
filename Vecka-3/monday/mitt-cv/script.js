document.addEventListener("DOMContentLoaded", () => {
	// Active Navigation Handling
	const currentLocation = location.href;
	const menuItem = document.querySelectorAll(".nav-links a");
	const menuLength = menuItem.length;
	for (let i = 0; i < menuLength; i++) {
		if (menuItem[i].href === currentLocation) {
			menuItem[i].classList.add("active");
		}
	}

	// Simple Form Handler Log
	const contactForm = document.getElementById("contact-form");
	if (contactForm) {
		contactForm.addEventListener("submit", (e) => {
			// Prevent actual submission as requested
			// Standard form submission is returned false in HTML, but we preventDefault here too just in case
			e.preventDefault();
			console.log("Form submitted (simulation)");
			alert("Tack för ditt meddelande! (Detta är bara en demo)");
			contactForm.reset();
		});
	}
});
