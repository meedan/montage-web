# Montage Web

A web client for [Montage](https://medium.com/@edbice/montage-open-source-video-annotation-at-meedan-743f9dea849).

# Usage

* Copy `config.js.example` to `config.js` and define your settings
* Build with Docker: `$ docker build -t montage:web .`
* Run the server with Docker: `$ docker run -p 8080:8080 montage:web`
* Go to your browser and open http://localhost:8080
