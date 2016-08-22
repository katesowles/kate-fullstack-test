// TODO API Users will be able to submit a text description (caption) for an image and a link to that image. API Users should be able to add link/caption data, one at a time, to build up their image gallery. Important Note: You do not have to let a user submit actual image data; accept just a link (i.e., a URL) to the image.

// TODO The links and captions should be saved on a sever. Use server-side data storage (Mongo), and make the image links and captions persistent, i.e., if the user requires the API, all of the images and captions previously posted should be returned.

// TODO Use whatever tools you want to accomplish the task, but make sure you include tests (e.g. mocha) and use git/GitHub for version control.

// TODO Requirements: Web server code, server-side database, REST API

// DONE Authentication is not required. You do not need to deploy to an external server.

const app = require('./lib/app');
const http = require('http');
const portNum = process.env.PORT || 3000;
require('./lib/mongooseSetup');

const server = http.createServer(app);
server.listen(portNum, () => {
  console.log(`server is running at 'localhost:${portNum}'`);
});
