# Versionsverwaltung der Zukunft: Beispiele mit git

## 1. Installation und Einrichtung

### Installation der Programme

Als erstes muss *git* natürlich installiert werden. Dafür müsst du die Download-Files von https://git-scm.com/download/win herunterladen.
Der Link führt dich zum Download für die Windows Version von *git*, hier kannst du einfach die neuste Version herunterladen.

Um nun *git* zu installieren muss die .exe Datei die du gerade heruntergeladen hast ausführen. Nun wird dir ein Dialogfenster angezeigt wo du Optionen zur Installation von *git* bekommst. Die Voreinstellungen passen so wie sie sind, d.h. du kannst dich einfach durch klicken.

Natürchlich brauchst wduir auch einen Code-Editor. Ich werde im folgenden Visual Studio Code nutzen. In diesem Tutorial ist leider keine Zeit für ein vollständiges Tutorial von VS-Code aber hier ist ein Video, dass nützlich sein könnte 😉 https://www.youtube.com/watch?v=r5jNl-IOSZg 

### Anmeldung bei gitHub oder gitLab

Um mit *git* Repositories zu verwalten brauchen wir natürlich auch Repositories. Hierfür müssen wir uns bei gitHub oder gitLab registrieren. Beide Websites funktionieren gut jedoch ist gitHub die größere Plattform was heißt, dass du hier mehr Projekt von anderen finden wirst.

Folge diesem Link um dich zu registrieren: https://github.com Merke dir bitte deine Nutzerdaten, da du diese für die weitere Einrichtung von *git* brauchst.

### Einrichtung Username & E-Mail

Um nun deine Nutzerdaten, die du zuvor bei der Erstellung deines gitHub oder gitLab Profils, wird der  Befehl *git config*.  

```
# mit diesem Befehl setzt du deinen Nutzernamen
$ git config --global user.name "dein Nutzername"

# mit diesem deine E-Mail
$ git config --global user.email "deine E-Mail"
```

Die ersten Schritte sind hast du schon geschafft git ist jetzt berteit um dein erstes Projekt zu starten. Aber wie und welche Befehle kannst du dabei gebrauchen, dass lernst du im nächsten Abschnitt.

## 2. grundlegende Begriffe und Befehle + erstes Projekt

Um dir die Grundlegenden Begriffe und Befehle beizubringen werde ich dich durch ein Projekt namens *first-contributions*. Hier wirst du auch lernen wie man mit Menschen aus der ganzen Welt zusammenarbeiten kannst.

Hier findest du dieses Repository: https://github.com/firstcontributions/first-contributions/tree/main 

### ein Repository *"forken"*

Als erstes musst du das Repository *"forken"* damit du Änderungen daran vornehmen kannst. Hierzu musst du auf den Knopf namens Fork klicken. 

![Picture of where to Fork](picture/forkPicture1.png)

Als nächstes auf Create Fork klicken. (alle anderen Einstellungen passen so wie sie sind) Dies sollte nun eine Kopie des Repositorys in deinem Account erstellen.

<img src="picture/forkPicture2.png" alt="picture of how to fork" width="400"/>

### das Projekt auf den eigenen Computer laden (*git clone*)

Jetzt musst du das *"geforkte"* Repository auf deinen Computer *klonen*. Dazu öffnest du das Repository in deinem Account und klickst auf den Knopf "Code".

![picture of where to clone](picture/clonePicture1.png)

Nun öffnet sich ein Fenster mit einre URL , diese musst du kopieren.

![picture of how to clone](picture/clonePicture2.png)

Um das Repositroy zu klonen gibt man jetzt den Befehl *git clone* gefolgt von der gerade kopierten URL.

Dieser Befehl muss in *Commandline* oder *Cmd* eingegeben werden (Cmd öffnet sich in VS-Code mit Strg + Ö)

```
# git clone "deine URL"
$ git clone https://github.com/firstcontributions/first-contributions.git
```

### Erstellung eines Branch (*git switch -c*)

Bei der Verwendung von *git* erstellt man für jedes neue Feature einen Branch, den man danach wieder in den Branch *main* einbettet.

Um einen Branch zu erstellen wird der Befehl *git switch* verwendet. Jedoch muss man sich dafür mit der *Commandline* innerhalb des innerhalb des Repositorys befinden. 

```
# cd "Ordner wohin man möchte"
$ cd first-contributions
```

Hans befindet sich im richtigen Ordner, da der Pfad den Namen seines Repositroys enthält.

```
C:\Users\hans\Dokumente\first-contributions>  
```

Um einen Branch zu erstellen brauch man natürlich auch einen sinnvollen Namen. Dieser sollte das Feature beschreiben, dass man in diesem umsetzen will.

```
# git switch -c "dein Branchname"
$ git switch -c added_Hans_Peter
```

Das "-c" steht hierfür "create". Das heißt falls man zwischen mehreren Branches wechseln will, ohne einen neuen zu erstellen, lässt man "-c" einfach weg.

Um zu sehen in welchem Branch man sich befindet nutzt den Befehl *git branch*. Hierbei hat man auch die Optionen -r oder -a (-r => zeigt remote Repositories & -a => zeigt lokale und remote Repositories)

```
$ git branch
    * added_Hans_Peter
      master
```

Super! Jetzt darf man seinen Namen in die Datei Contributers.md schreiben 😎

### Änderungen speichern (*git status*, *git add* & *git commit*)

Zum Speichern der Änderungen reicht *Strg + S* leider nicht. Als erstes werden mit *git status* die Änderungen ausgegeben.

```
$ git status
    Changes not staged for commit:
      (use "git add/rm <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
        modified: Contributors.md
```

Als nächstes muss man alle veränderten Datein mit *git add* zum nächsten "commit" hinzufügen.

```
# git add "Dateiname"
$ git add Contributors.md
```

Zuletzt müssen diese Änderungen abgegeben/commited werden. Hierzu wird der Befehl *git commit* verwendet. Jeder *commit* sollte eine Commit-Message enthalten. Diese wird mit -m hinzugefügt und beschreibt was seit dem letzten commit geändert wurde.

```
# git commit -m "deine Commit-Message"
$ git commit -m "Add Hans to Contributors list"
```

<img src="picture/commitMessages.png" alt="picture of commit Messages" width="400"/>

### Änderungen hochladen/pushen (*git push*)

Alle Änderungen, die wir bis jetzt vorgenommen haben, waren local. Um nun das Projekt online zu sichern müssen wir es auf gitHub hochladen/pushen. Dafür wird der Befehl *git push* verwendet.

```
# git push origin "dein Branchname"
$ git push origin added_Hans_Peter
```

Origin steht beschreibt hier, dass der Branch zu einem Online-Repository gehört.

### Projekt in das Orginal-Projekt integrieren (*pull request*)

Jetzt, da alle Änderungen vorgenommen wurden kann man das Projekt wieder in das Orginalprojekt integrieren. Hierzu  navigiert man auf gitHub wieder zu seinem Projekt und erstellt eine sogenannte *pull request*. 

![where to pullRequest](picture/pullRepuest1.png)

Nun öffnet sich ein Fenster indem man den Namen seiner *pull request* und einen Kommentar eingibt. Beides sollte definieren was du mit dieser *pull request* erreichent möchtest.

![comment for pullRequest](picture/pullRequest2.png)

Der Verwalter des Projekts muss nun die *pull request* annehmen. Nachdem er deinen Fork annimmt wird der Name, den man vorhin eingetragen hat, in *Contributors.md* angezeigt.

## 4. nützliches Wissen

### Wiederherstellung einer bestimmten Version des Projekts

### Mergen von zwei Branchen

### Integration in VS-Code

In VS-Code kann man auch ohne *Cmd* Änderungen *adden, commiten und pushen*. Im Fenster *Source Control* kann mit dem Plus-Symbol sozusagen der Befehl *git add* ausgeführt werden. Mit dem Commit-Knopf können dann alle so hinzugefügten Änderungen *commited* werden. Nachdem alles so gespeichert wured kann mit --- das Online-Repository auf den neusten Stand gebracht werden.

### nicht alles Hochladen -> .gitignore

Mit einer .gitignore Datei kann können bestimmte Datein bestimmt werden, die *git* nicht tracken soll und somit auch nicht bei *Commits* mitnehmen soll. Dies sind Dateien die nicht für die öffentlichkeit bestimmt sind und auch nicht auf gitHub landen sollten. Ein beispiel für solche Datein wären welche, die SSH-Keys, die für jede Person unteschielich sind, enthalten.

Ein Beispiel für .gitignore wäre das hier: 

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```
