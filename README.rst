Front End Alfabeto Fenicio
=============
- Código para pruebas, auto aprendizaje, tutoriales etc...
1) Debes tener node.js instalado
2) Abre una consola Terminal y ejecuta el siguiente comando::

$npm start

Colección del Alfabeto Fenicio.
Front End Básico con servidor HTTP/FTP.
Esta versión es estática, los datos de la votación no son persistentes,
Version fullstack : <https://github.com/g4-code/fullStackJsBasic_stage>

- Se configuraron web workers para cargar datos desde el servidor backend.
- El front End se construyo con HTML DOM API y JS
- Se uso expressjs como servidor Web
- Se uso Semantic UI para estilos CSS
- Las operaciones Read y Write están conectadas en el mapa de rutas (Falta implementar DAO)

Este sitio web ayuda a los usuarios a votar en su símbolo fenicio favorito, 
Una vez que un voto fue emitido por un usuario, los resultados se muestran en 
en una grafica tipo Pie Chart.

Tecnologías:

- node.js
- ExpressJS
- HTML DOM API
- Semantic UI
- MongoDB Atlas

Phoenicean Alphabet.

- Dos operaciones Read: All Docs, Top 5
- Una operación write: Doc by meaning (ID)

===== =========
Mapa de rutas
---------------
http://localhost:3100/
---------------
http://localhost:3100/secret
---------------
http://localhost:3100/alpha.json
---------------
http://localhost:3100/top5.json
===============

>Nota: Usa el siguiente comando desde Terminal si tienes el error "header in use"::

   $sudo kill $(lsof -ti:3000)

> Tags: JavaScript, Código, Educación, Hobby.

Diseño : Marco Galicia (g.4)

Puedes contactarme si tienes alguna duda sobre el código.



////////////////////////////////

Phoenicean alphabet collection.
=============
JS Front End Basic demo with a wired server.

//dev code only
1) Make sure you have node.js installed locally.
2) Open a terminal into this folder, then run:

$npm start

- Web workers to load data.
- HTML DOM API with JS to display front End.
- Semantic UI for style CSS.
- Read and write CRUD operations wired (No DAO)

This site helps users to vote on their preferred Phoenicean Symbol, 
the Phoenician alphabet collection is being loaded as a static JSON data seed.

Once a vote is performed by a user, the results are being displayed
into a graphic dashboard.

This is an static version, data is not persistant. For a full solution
check Fullstack Demo at: github <https://github.com/g4-code/fullStackJsBasic_stage>

Technologies:

- node.js
- ExpressJS
- HTML DOM API
- Semantic UI

Phoenicean Alphabet
- Two Read Ops: All Docs, Top 5
- One write operation: Doc by meaning (ID)

===== =========
Route Map
---------------
http://localhost:3100/
---------------
http://localhost:3100/secret
---------------
http://localhost:3100/alpha.json
---------------
http://localhost:3100/top5.json
===============


Note: For "header in use" error, type the following command in console Terminal::

   $sudo kill $(lsof -ti:3000)
   
Tags: JavaScript, Code, Education, Hobby ...
Design : Marco Galicia

Let me know if any question

////////////////////////

