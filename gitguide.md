# Kom igång med Git och Github

En praktisk guide för att publicera din CV-sida med Github Pages

---

## Vad är Git och Github?

**Git** är ett versionshanteringssystem - tänk dig det som "spara-funktionen" för kod, men mycket kraftfullare. Varje gång du sparar (gör en "commit") så sparas en ögonblicksbild av hela projektet som du kan gå tillbaka till.

**Github** är en webbtjänst där du kan lagra dina Git-projekt online, dela dem med andra, och samarbeta kring kod.

**Github Pages** är en gratis tjänst från Github som låter dig publicera webbsidor direkt från ditt Github-repo.

---

## 1. Installera Git

### Windows

1. Gå till [git-scm.com/download/win](https://git-scm.com/download/win)
2. Ladda ner och installera med standardinställningar
3. Efter installation, öppna "Git Bash" från startmenyn

### Mac

1. Öppna Terminalen (finns i Program → Verktygsprogram eller inuti VSCode under menyvalet "Terminal" → "New Terminal")
2. Skriv `git --version` och tryck Enter
3. Om Git inte är installerat kommer Mac föreslå att installera det
4. Alternativt: ladda ner från [git-scm.com/download/mac](https://git-scm.com/download/mac)

### Kontrollera att det fungerar

Öppna terminalen (eller Git Bash på Windows) och skriv:

```bash
git --version
```

Du ska se något i stil med `git version 2.x.x`

---

## 2. Konfigurera Git (första gången)

Öppna terminalen och kör dessa kommandon (byt ut till ditt namn och email):

```bash
git config --global user.name "Ditt Namn"
git config --global user.email "din.email@exempel.se"
```

Detta behöver du bara göra en gång per dator.

---

## 3. Skapa ett Github-konto

1. Gå till [github.com](https://github.com)
2. Klicka på "Sign up" och följ instruktionerna
3. Verifiera din email-adress

---

## 4. Publicera din CV-sida på Github Pages

Nu ska vi ta din CV-sida och publicera den på internet! Vi går igenom det steg för steg.

### Steg 1: Skapa ett nytt repository på Github

1. Logga in på Github
2. Klicka på den gröna knappen **"New"** (eller gå till github.com/new)
3. Fyll i:
   - **Repository name:** `mitt-cv` (eller vad du vill)
   - **Description:** "Min CV-sida" (valfritt)
   - Välj **Public** (måste vara public för Github Pages)
   - **VIKTIGT:** Kryssa INTE i "Add a README file" (vi har ju redan filer)
4. Klicka på **"Create repository"**

### Steg 2: Förbered din CV-mapp

1. Se till att din CV-sida ligger i en egen mapp på din dator
2. **VIKTIGT:** Din huvudfil måste heta `index.html` (inte cv.html eller något annat)
3. Se till att alla bilder och CSS-filer också ligger i samma mapp (eller i undermappar)

Exempel på mapstruktur:

```
mitt-cv/
  ├── index.html
  ├── style.css
  └── bild.jpg
```

### Steg 3: Initiera Git i din mapp

1. Öppna terminalen (Git Bash på Windows)
2. Navigera till din CV-mapp:

   ```bash
   cd sökväg/till/din/cv-mapp
   ```

   Exempel för Windows: `cd C:/Users/dittnamn/Documents/mitt-cv`
   Exempel för Mac: `cd ~/Documents/mitt-cv`

3. Initiera Git i mappen:
   ```bash
   git init
   ```

### Steg 4: Lägg till dina filer

Lägg till alla filer till Git:

```bash
git add .
```

(Punkten betyder "alla filer i den här mappen")

### Steg 5: Skapa din första commit

Gör en commit (spara ett "snapshot" av projektet):

```bash
git commit -m "Första versionen av mitt CV"
```

### Steg 6: Koppla till Github

Nu ska vi koppla din lokala mapp till Github-repot du skapade.

1. Gå tillbaka till ditt nya repo på Github
2. Kopiera URL:en under "…or push an existing repository from the command line"
3. I terminalen, kör dessa kommandon (byt ut URL:en till din egen):

```bash
git branch -M main
git remote add origin https://github.com/dittanvändarnamn/mitt-cv.git
git push -u origin main
```

Du kommer förmodligen bli ombedd att logga in på Github. Följ instruktionerna i terminalen.

### Steg 7: Aktivera Github Pages

1. Gå till ditt repo på Github
2. Klicka på **"Settings"** (uppe till höger)
3. Klicka på **"Pages"** i menyn till vänster
4. Under "Source" (eller "Build and deployment"):
   - Välj **"Deploy from a branch"**
   - Branch: **"main"**
   - Folder: **"/ (root)"**
5. Klicka **"Save"**

### Steg 8: Besök din sida!

Efter någon minut (ibland tar det upp till 5 minuter första gången) är din sida live!

URL:en blir: `https://dittanvändarnamn.github.io/mitt-cv/`

Du hittar också länken högst upp på Settings → Pages-sidan.

---

## 5. Uppdatera din sida

När du vill göra ändringar på din CV-sida:

1. Gör dina ändringar i filerna lokalt på din dator
2. Öppna terminalen i din CV-mapp
3. Kör dessa kommandon:

```bash
git add .
git commit -m "Uppdaterade min arbetslivserfarenhet"
git push
```

Efter någon minut kommer ändringarna synas på din publicerade sida!

---

## Vanliga kommandon - Snabbguide

```bash
# Se status (vilka filer har ändrats?)
git status

# Lägg till alla ändringar
git add .

# Spara ett snapshot (commit)
git commit -m "Beskrivning av vad du ändrade"

# Ladda upp till Github
git push

# Ladda ner senaste ändringarna från Github
git pull
```

---

## Felsökning

### "Permission denied" eller inloggningsproblem

Om du får problem med att logga in kan du behöva skapa en "Personal Access Token":

1. Gå till Github → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generera ny token med "repo" permissions
3. Använd token som lösenord när du pushar

### Sidan uppdateras inte

- Vänta 2-5 minuter efter push
- Kontrollera att filen heter `index.html` (inte Index.html eller index.htm)
- Kontrollera att pushen lyckades med `git log` - du ska se din senaste commit

### Bilder eller CSS laddas inte

- Kontrollera att sökvägarna i din HTML är korrekta
- Använd relativa sökvägar: `<img src="bild.jpg">` inte `<img src="C:/Users/.../bild.jpg">`

---

## Tips och nästa steg

- **Commit ofta!** Varje gång du gjort en meningsfull ändring
- **Skriv tydliga commit-meddelanden** så du förstår vad du gjorde senare
- **Github är din portfolio** - ett välskött Github-konto kan imponera på arbetsgivare
- **Utforska Github** - du kan "stjärna" projekt du tycker är intressanta

---

## Länkar för vidare läsning

- [Github's interaktiva Git-tutorial](https://try.github.io/)
- [Git dokumentation på svenska](https://git-scm.com/book/sv/v2)
- [Github Pages dokumentation](https://docs.github.com/en/pages)
