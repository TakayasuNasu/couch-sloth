package main.controllers

import io.ktor.application.call
import io.ktor.http.cio.websocket.*
import io.ktor.response.respondText
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.route
import io.ktor.websocket.webSocket
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.channels.ReceiveChannel
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
      sendClient(wsConnections, incoming)
      val text = (incoming.receive() as Frame.Text).readText()
      if (text.equals("close")) close(CloseReason(CloseReason.Codes.NORMAL, "Closed by server"))
    } finally {
      wsConnections -= this
    }
  }

  val wsForPlay = Collections.synchronizedSet(LinkedHashSet<DefaultWebSocketSession>())
  webSocket("/video/play") {
    wsForPlay += this
    try {
      sendClient(wsForPlay, incoming)
      val text = (incoming.receive() as Frame.Text).readText()
      if (text.equals("close")) close(CloseReason(CloseReason.Codes.NORMAL, "Closed by server"))
    } finally {
      wsForPlay -= this
    }
  }

  val wsForStop = Collections.synchronizedSet(LinkedHashSet<DefaultWebSocketSession>())
  webSocket("/video/stop") {
    wsForStop += this
    try {
      sendClient(wsForStop, incoming)
      val text = (incoming.receive() as Frame.Text).readText()
      if (text.equals("close")) close(CloseReason(CloseReason.Codes.NORMAL, "Closed by server"))
    } finally {
      wsForStop -= this
    }
  }

}

@ExperimentalCoroutinesApi
suspend fun sendClient(webScoket: Set<DefaultWebSocketSession>, incoming: ReceiveChannel<Frame>) {
  incoming.consumeEach { frame ->
    if (frame is Frame.Text) {
      val text = frame.readText()
      println(text)
      for (socket in webScoket) {
        socket.outgoing.send(Frame.Text(text))
      }
    }
  }
}
