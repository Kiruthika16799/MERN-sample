CORS policy :

Cross-Origin Resource Sharing

1. web securiy mechanism.

Def : 

In the browser that restricts ability of the webpage make request to the different domain. in-fact, web securiy mechanism that prevent and authorized cross origin access to the resource  or a server. 

whenever the page make an request to the different domain, the browser send a rquest to the target server. 

server check the origin , header and methods

Create react project 
*********************

Command : npm create vin@latest

✔ Project name: … frontend
✔ Select a framework: › React
✔ Select a variant: › JavaScript

 cd frontend/

 npm i  (or) npm install

Open Website -> https://tailwindcss.com/docs/guides/vite
------------------------------------------------------------
Run the below commands : 

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

SPA and Add react router dom

 (otherwise )

 Manual installation
 *******************
 1. initialize new project : 
 -----------------------
 mkdir my-vite-app
cd my-vite-app
npm init

2. Install vite : 
----------------
npm install vite

3. Create nessary files 
------------------------
mkdir src
touch index.html src/main.js

4. populate the file :
----------------------
index.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
</body>
</html>

src/main.js

console.log('Hello Vite!');


5 .Add scripts to package.json:
---------------------------------

{
    "name": "my-vite-app",
    "version": "1.0.0",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "serve": "vite preview"
    },
    "devDependencies": {
        "vite": "^4.0.0"
    }
}


6. Start developerment server : 
-----------------------------
npm run dev





# MERN-sample
