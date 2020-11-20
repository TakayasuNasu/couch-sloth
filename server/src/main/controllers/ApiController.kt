package main.controllers

import io.ktor.application.call
import io.ktor.http.cio.websocket.CloseReason
import io.ktor.http.cio.websocket.Frame
import io.ktor.http.cio.websocket.close
import io.ktor.http.cio.websocket.readText
import io.ktor.response.respondText
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.route
import io.ktor.websocket.webSocket
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.channels.consumeEach

@ExperimentalCoroutinesApi
fun Route.apiController() {

  route("/user") {
    get {
      call.respondText { "user routing ok" }
    }
    webSocket("/say") {
      try {
        incoming.consumeEach { frame ->
          if (frame is Frame.Text) {
            val text = frame.readText()
            outgoing.send(Frame.Text("YOU SAID $text"))
            if (frame.readText() == "close") {
              close(CloseReason(CloseReason.Codes.NORMAL, "Closed by server"))
            }
          }
        }
      } finally {

      }
    }
  }
}