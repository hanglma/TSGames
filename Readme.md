# Games in Typescript

## Install Software: vscode + node

- install vscode: <https://code.visualstudio.com/docs/setup/windows>
- <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>

in der Schule über SMP installieren

## Setup project (vite + typescript)

Setting up vite: <https://de.vitejs.dev/guide/>

```bash
$ npm create vite@latest my-app -- --template vanilla-ts
Need to install the following packages:
create-vite@5.1.0
Ok to proceed? (y) y

Scaffolding project in /home/my-app...

Done. Now run:

  cd my-app
  npm install
  npm run dev

$ cd my-app/

$ find

./tsconfig.json
./package-lock.json
./index.html
./.gitignore
./package.json

./public
./public/vite.svg

./src
./src/style.css
./src/typescript.svg
./src/main.ts
./src/counter.ts
./src/vite-env.d.ts


$ code .


in der Shell von code:
    npm install
    npm run dev --> browser
```

## Markdown syntax

<https://www.makeareadme.com/>

## Joystick hinzufügen

<https://github.com/markiewiczjakub/joystick/tree/master>

`src\*.ts` von github nach `src/joystick/` kopieren (bis auf `index.ts`, wird nicht benötigt)

## fahrendes Auto

<https://iamschulz.com/writing-a-game-in-typescript/>
<https://www.sandromaglione.com/articles/game-rendering-loop-in-typescript>

## Klassendiagramme für Typescript

<https://marketplace.visualstudio.com/items?itemName=AlexShen.classdiagram-ts>

## deploy production version locally / to github pages

<https://vitejs.dev/guide/static-deploy>
<https://vitejs.dev/config/preview-options>
<https://medium.com/flycode/how-to-deploy-a-static-website-for-free-using-github-pages-8eddc194853b>
