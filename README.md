# Montage Web

[![Build Status](https://travis-ci.org/meedan/montage-web.svg?branch=develop)](https://travis-ci.org/meedan/montage-web)

A web client for [Montage](https://medium.com/@edbice/montage-open-source-video-annotation-at-meedan-743f9dea849).

# Usage

* Copy `config.js.example` to `config.js` and define your settings
* Build with Docker: `$ docker build -t montage:web .`
* Run the server with Docker: `$ docker run -p 8080:8080 montage:web`
* Go to your browser and open http://localhost:8080

# Developing

* Build the application: `npm run build`
* Watch for changes and auto-build the application when files change: `npm run build:dev`

# Tests

* Run the unit tests: `npm run test:unit`
* Run the integration tests: `npm run test:integration`
* Run all tests: `npm run test`
