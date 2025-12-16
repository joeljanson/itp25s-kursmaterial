const projects = [
	{
		title: "Projekt A",
		description: "En webbplats för att visa upp mina projekt och färdigheter.",
	},
	{
		title: "Projekt B",
		description:
			"En interaktiv applikation för att hantera uppgifter och påminnelser.",
	},
	{
		title: "Projekt A",
		description: "En webbplats för att visa upp mina projekt och färdigheter.",
	},
	{
		title: "Projekt B",
		description:
			"En interaktiv applikation för att hantera uppgifter och påminnelser.",
	},
	{
		title: "Projekt A",
		description: "En webbplats för att visa upp mina projekt och färdigheter.",
	},
	{
		title: "Projekt B",
		description:
			"En interaktiv applikation för att hantera uppgifter och påminnelser.",
	},
	{
		title: "Projekt A",
		description: "En webbplats för att visa upp mina projekt och färdigheter.",
	},
	{
		title: "Projekt B",
		description:
			"En interaktiv applikation för att hantera uppgifter och påminnelser.",
	},
	{
		title: "Projekt A",
		description: "En webbplats för att visa upp mina projekt och färdigheter.",
	},
	{
		title: "Projekt B",
		description:
			"En interaktiv applikation för att hantera uppgifter och påminnelser.",
	},
	{
		title: "Projekt A",
		description: "En webbplats för att visa upp mina projekt och färdigheter.",
	},
	{
		title: "Projekt B",
		description:
			"En interaktiv applikation för att hantera uppgifter och påminnelser.",
	},
	{
		title: "Projekt A",
		description: "En webbplats för att visa upp mina projekt och färdigheter.",
	},
	{
		title: "Projekt B",
		description:
			"En interaktiv applikation för att hantera uppgifter och påminnelser.",
	},
];

function addProjectsToHTML() {
	const projectsContainer = document.getElementById("projects-container");
	if (!projectsContainer) {
		console.error("No element with id 'projects-container' found.");
		return;
	}

	projects.forEach((project) => {
		const article = document.createElement("article");
		article.classList.add("project-item");
		const title = document.createElement("h3");
		title.textContent = project.title;

		const description = document.createElement("p");
		description.textContent = project.description;

		article.appendChild(title);
		article.appendChild(description);
		projectsContainer.appendChild(article);
	});
}

document.addEventListener("DOMContentLoaded", addProjectsToHTML);
