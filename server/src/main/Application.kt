package main

import io.ktor.application.*
import main.controllers.apiController
import io.ktor.http.cio.websocket.pingPeriod
import io.ktor.http.cio.websocket.timeout
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.websocket.WebSockets
import java.time.Duration


fun Application.main() {
  install(WebSockets) {
    timeout = Duration.ofSeconds(5)
    pingPeriod = Duration.ofMinutes(1)
  }
  routing {
    apiController()
  }
}

fun main(args: Array<String>) {
  embeddedServer(Netty, port = 8080) { main() }.start(wait = true)
}