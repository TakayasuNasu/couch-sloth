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

REST API
---

| Endpoint  | describe  |
|---|---|
| `/say`  | Massage send websocket |
| `/video/play`  | Start youtube |


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
