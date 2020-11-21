package main.controllers

import io.ktor.application.call
import io.ktor.http.cio.websocket.*
import io.ktor.response.respondText
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.route
import io.ktor.websocket.webSocket
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.channels.consumeEach
import java.util.*
import kotlin.collections.LinkedHashSet

@ExperimentalCoroutinesApi
fun Route.apiController() {

  route("/user") {
    get {
      call.respondText { "user routing ok" }
    }
  }

  val wsConnections = Collections.synchronizedSet(LinkedHashSet<DefaultWebSocketSession>())
  webSocket("/say") {
    wsConnections += this
    try {
      incoming.consumeEach { frame ->
        if (frame is Frame.Text) {
          val text = frame.readText()
          println(text)
          outgoing.send(Frame.Text("YOU SAID $text"))
          if (frame.readText() == "close") {
            close(CloseReason(CloseReason.Codes.NORMAL, "Closed by server"))
          }
        }
      }
    } finally {
      wsConnections -= this
    }
  }
}