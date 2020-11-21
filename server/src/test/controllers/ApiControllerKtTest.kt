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
      handleWebSocketConversation("/say") { incoming, outgoing ->
        outgoing.send(Frame.Text("HELLO"))
        assertEquals("YOU SAID HELLO", (incoming.receive() as Frame.Text).readText())
      }
    }
  }
}