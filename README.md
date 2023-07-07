<!-- PROJECT LOGO -->
<br />
<div align="center">
    <a href="#">
        <img src="https://raw.githubusercontent.com/peterhnm/webtec-frontend/main/src/lib/images/logo_big.svg" alt="Logo" height="180">
    </a>
    <h3 ><a href="https://peterhnm.github.io/webtec-frontend/">JamBuddy</a></h3>
    <p>
        <a href="https://github.com/peterhnm/webtec-frontend/issues">Report Bug</a>
        ·
        <a href="https://github.com/peterhnm/webtec-frontend/pulls">Request Feature</a>
    </p>
</div>

# Projektbeschreibung

[JamBuddy][JamBuddy] ist eine Webanwendung, die Teilnehmer eines Game Jams bei der
Generierung von Ideen für Computerspiele unterstützt. Sie nutzt die leistungsstarken
künstlichen Intelligenzmodelle ChatGPT und DALL-E, um auf Basis des
eingegebenen Themes und ausgewählter Tags kreative und einzigartige Spielideen zu
generieren. Die Anwendung richtet sich speziell an Personen, die nach Inspiration
suchen und ihre kreativen Grenzen erweitern möchten.

# Eingesetzte Tools

-   [Svelte][JamBuddy]
-   [TypeScript](https://www.typescriptlang.org/docs/)
-   [GitHub Pages](https://peterhnm.github.io/webtec-frontend/)
-   [Postman Mock Server](https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/)

# Getting Started

```shell
git clone https://github.com/peterhnm/webtec-frontend.git
cd webtec-frontend
npm install
npm run dev
# Open http://localhost:5173/
```

### Um das Backend anzubinden müssen folgende Schritte befolgt werden:

1. [routes/+page.svelte](./src/routes/+page.svelte) öffnen
2. Zeile 81 auskommentieren
3. Zeile 82 Kommentar entfernen
4. [routes/result/+page.svelte](./src/routes/result/+page.svelte)
5. Zeile 11 auskommentieren
6. Zeile 12 Kommentar entfernen

> Note: Das Frontend wurde ausführlich in _*Firefox*_ getestet. Des Weiteren sollten _*Google Chrome*_ und _*Safari*_
> einwandfrei funktionieren.

# Sonstiges

Bei auswählen/abwählen von Tags gab es ein Problem, dass ich mit einen Workaround gelöst habe.
Im Code ist das an der entsprechenden Stellen nochmal beschrieben.

Ohne Workaround:  
![without-workaround](https://github.com/peterhnm/webtec-frontend/blob/d0f98a6187398ebb55545923e91332cd21430af7/docs/images/without_workaround.gif?raw=true)

Mit Workaround:  
![without-workaround](https://github.com/peterhnm/webtec-frontend/blob/d0f98a6187398ebb55545923e91332cd21430af7/docs/images/with_workaround.gif?raw=true)

[JamBuddy]: https://peterhnm.github.io/webtec-frontend/
