package test.controllers

import io.ktor.application.*
import io.ktor.http.cio.websocket.*
import io.ktor.routing.routing
import io.ktor.server.testing.*
import main.main
import kotlin.test.*
import io.ktor.websocket.webSocketRaw

class ApiControllerKtTest {

  @Test
  fun testConversation() {

    withTestApplication(Application::main) {
      application.routing {
        webSocketRaw("/say") {
          outgoing.send(Frame.Text("HELLO"))
          outgoing.send(Frame.Close())
        }
      }
      handleWebSocketConversation("/say") { incoming, outgoing ->
        assertEquals("HELLO", (incoming.receive() as Frame.Text).readText())
      }
    }
  }
}