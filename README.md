Couch Sloth
===

What is Couch Sloth
---

**Couch Sloth** is application which someone watch youtube with friend during chatting.

Requirements
---

JavaFX1.x

Structure
---

```
|--client
|  |--src
|  |  |--main
|  |  |  |--java
|  |  |  |  |--client
|  |  |  |  |  |--FXMLController.java
|  |  |  |  |  |--MainApp.java
|  |  |  |--resources
|  |  |  |  |--client
|  |  |  |  |  |--scene.fxml
|  |  |  |  |  |--styles.css
|  |  ||--test
|--server
|  |--src
|    |--main
|    |--test
|--.gitignore
|--README.md
```

### client

- JavaFX
- Youtube API
- Asynchronous Operation Youtube
- Asynchronous Chatting

#### Library

- [cdimascio/dotenv\-java: 🗝️ Dotenv is a no\-dep, pure Java module that loads environment variables from a \.env file](https://github.com/cdimascio/dotenv-java)

### server

- WebSocket

#### Library

- [Ktor: Build Asynchronous Servers and Clients in Kotlin \| Ktor Framework](https://ktor.io/)

Usage
---

WebSocket Endpoint
---

| Endpoint  | describe  | parameter |
|---|---|---|
| `/say`  | Massage send websocket | {userName: String, messages: String} |
| `/video/play`  | Start youtube | {playing: Boolean, played: double} |
| `/video/stop`  | Stop youtube | {playing: Boolean, played: double} |
| `/video/url`  | Stop youtube | {url: String} |


Contributing
---

- Nico
- Yuki
- Yasu

Reference
---

- [JavaFX Documentation Project](https://fxdocs.github.io/docs/)
- [RobertLemmens/youtube\-sync: Watch youtube together](https://github.com/RobertLemmens/youtube-sync)
- [DomHeal/JavaFX\-Chat: JavaFX Socket Multithreaded Chat Client / Server \- FXML](https://github.com/DomHeal/JavaFX-Chat)
- [akullpp/awesome\-java: A curated list of awesome frameworks, libraries and software for the Java programming language\.](https://github.com/akullpp/awesome-java)
- [mhrimaz/AwesomeJavaFX: A curated list of awesome JavaFX libraries, books, frameworks, etc\.\.\.](https://github.com/mhrimaz/AwesomeJavaFX)
- [Quick Start—Ktor 1\.4\.0](https://ktor.io/docs/quickstart-index.html)
- [javaFX\-multiple\-controllers\-tutorial](https://github.com/mvpjava/javaFX-multiple-controllers-tutorial)
- [Material\-UI: A popular React UI framework](https://material-ui.com/)
- [react\-modal documentation](http://reactcommunity.org/react-modal/)
- [brambo48/react\-youtube\-sync: Play youtube videos on multiple computers / devices in perfect sync\. Built with React, Redux & Socket\.IO](https://github.com/brambo48/react-youtube-sync)
- [cookpete/react\-player: A React component for playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia and DailyMotion](https://github.com/CookPete/react-player)
- [Larkenx/ktor\-react\-chat: A real\-time chat client\+server created using web sockets with Kotlin\+Ktor backend and React\+Material UI front end\.](https://github.com/Larkenx/ktor-react-chat)
