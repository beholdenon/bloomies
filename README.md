Instructions

Setup
1) Install nodemon by running: npm install -g nodemon
2) cd into directory and run: npm install

Server
1) cd into directory and run: nodemon
2) Go to http://localhost:3000/ in your browser
3) The server will watch for changes and rebuild
4) You need to refresh your browser to see the updates

Development
1) For scss changes modify: src/scss/bloomingdales-150-trivia.scss
2) For js changes modify: src/bloomingdales-150-trivia.js
3) For html changes modify: views/partials/trivia.hbs and views/partials/trivia-question.hbs
4) Drop images in public/images

Image Helper
1) Use the img helper for all images
2) src should be name of file without extension'
3) If the file is a png add format="png-alpha"
4) Do not edit the img-src.hbs, img.hbs or img-path.hbs

JPG Example
{{> img src="my-file-name" alt="My Alt Tag" class="my-class" }}

PNG Example
{{> img src="my-file-name" alt="My Alt Tag" class="my-class" format="png-alpha"}}