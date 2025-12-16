# Vue-komponent

Nedan följer instruktioner för hur ni lägger till en vue-komponent i era projekt.

## 1. Lägg till själva "komponenten"

1. Skapa en mapp i eran rotmapp som heter "components"
2. Skapa en fil inuti denna mapp som heter "navbar.js"
3. Lägg till följande kod:

```js
const NavBar = {
	template: `
    <nav class="navbar">
      <a href="index.html">Hem</a>
      <a href="about.html">Om oss</a>
      <a href="contact.html">Kontakt</a>
    </nav>
  `,
};
```

4. Byt ut html-koden mot eran navigation som ni redan har.

## 2. Skapa en Vue-"app"

1. I rotmappen, skapa en fil som heter app.js - denna är utgångspunkten för er vue-kod.
2. Lägg till följande kod

```js
const app = Vue.createApp({
	components: { NavBar },
});
app.mount("#app");
```

## 3. Koppla eran app och eran komponent

1. I eran `index.html` och övriga filer där ni vill visa navigationen lägg till följande i innan `</body>`

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="components/navbar.js"></script>
<script src="app.js"></script>
```

2. Lägg sedan till en `<div>` med id:t "app" runt allt innehåll (från `<body>` till de nyligen tilagda `<script>` taggarna innan`</body>`)
   ex:

```html
<body>
	<div id="app">
		<header>...</header>
		<main>...</main>
		<footer>...</footer>
	</div>
	<!-- Dessa nedan är de vi la till i steget ovan. -->
	<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
	<script src="components/navbar.js"></script>
	<script src="app.js"></script>
</body>
```

3. Byt ut den plats där eran gamla navigation låg till er nya.

- Vue kommer automatiskt översätta "NavBar" till "nav-bar" (från PascalCase till kebab-case)

```html
<header>
	<div class="container">
		<!-- <nav>
						<div class="logo">Mitt CV</div>
						<ul class="nav-links">
							<li><a href="index.html">Hem</a></li>
							<li><a href="about.html">Om Mig</a></li>
							<li><a href="contact.html">Kontakt</a></li>
						</ul>
					</nav> -->
		<nav-bar />
		<!-- Detta är den nya raden -->
	</div>
</header>
```

4. Repetera detta (lägga in script-taggar + div med id="app") på samtliga sidor där ni vill visa er meny.
