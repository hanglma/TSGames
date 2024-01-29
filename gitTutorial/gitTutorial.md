# Versionsverwaltung der Zukunft: Beispiele mit git

## 1. Installation und Einrichtung

### Installation der Programme

Als erstes muss *git* natürlich installiert werden. Dafür müssen wir die Download-Files von https://git-scm.com/download/win herunterladen.
Der Link führt dich zum Download für die Windows Version von *git*, hier kannst du einfach die neuste Version herunterladen.

Um nun *git* zu installieren muss die .exe Datei die du gerade heruntergeladen hast ausführen. Nun wird dir ein Dialogfenster angezeigt wo du Optionen zur Installation von *git* bekommst. Die Voreinstellungen passen so wie sie sind, d.h. du kannst dich einfach durch klicken.

Natürchlich brauchen wir auch einen Code-Editor. Ich werde im folgenden Visual Studio Code benutzen. In diesem Tutorial ist leider keine Zeit für ein volles Tutorial von VS-Code aber hier ist ein Video, dass nützlich sein könnte 😉 https://www.youtube.com/watch?v=r5jNl-IOSZg 

### Anmeldung bei gitHub oder gitLab

Um mit *git* Repositories zu verwalten brauchen wir natürlich auch Repositories. Hierfür müssen wir uns bei gitHub oder gitLab registrieren. Beide Websites funktionieren gut jedoch ist gitHub die größere Plattform was heißt, dass du hier mehr Projekt von anderen finden wirst.

Folge diesem Link um dich zu registrieren: https://github.com Merke dir bitte deine Nutzerdaten, da du diese für die weitere Einrichtung von *git* brauchst.

### Einrichtung Username & E-Mail

Um nun deine Nutzerdaten, die du zuvor bei der Erstellung deines gitHub oder gitLab Profils, wird der  Befehl *git config*.  

```
# mit diesem Befehl setzt du deinen Nutzernamen
git config --global user.name "dein Nutzername"

# mit diesem deine E-Mail
git config --global user.email "deine E-Mail"
```

Die ersten Schritte sind hast du schon geschafft git ist jetzt berteit um dein erstes Projekt zu starten. Aber wie und welche Befehle kannst du dabei gebrauchen, dass lernst du im nächsten Abschnitt.

## 2. grundlegende Begriffe und Befehle

Um dir die Grundlegenden Begriffe und Befehle beizubringen werde ich dich durch ein Projekt namens *first-contributions*. Hier wirst du auch lernen wie man mit Menschen aus der ganzen Welt zusammenarbeiten kannst.

Hier findest du dieses Repository: https://github.com/firstcontributions/first-contributions/tree/main 

### ein Repository *"forken"*
Als erstes musst du das Repository *"forken"* damit du Änderungen daran vornehmen kannst. Hierzu musst du auf den Knopf namens Fork klicken. 

![Picture of where to Fork](forkPicture.png)

Als nächstes auf Create Fork klicken. (alle anderen Einstellungen passen so wie sie sind) Dies sollte nun eine Kopie des Repositorys in deinem Account erstellen.

![Picture of how to Fork](forkPicture2.png)

### erstellen einer pull request

### Was ist überhaupt ein branch? (branch und checkout)

### Änderungen speichern & hochladen (git commit)

## 3. gitHub und gitLab: online Repositories

## 4. Integration in Visual Studio Code