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
        outgoing.send(Frame.Text("{\"userName\":\"Yasu\",\"messages\":\"that we here highly resolve\"}"))
        assertEquals(
          "{\"userName\":\"Yasu\",\"messages\":\"that we here highly resolve\"}",
          (incoming.receive() as Frame.Text).readText()
        )
      }

      handleWebSocketConversation("/video/play") { incoming, outgoing ->
        outgoing.send(Frame.Text("{\"isPlay\":\"true\",\"progress\":\"0.177\"}"))
        assertEquals(
          "{\"isPlay\":\"true\",\"progress\":\"0.177\"}",
          (incoming.receive() as Frame.Text).readText()
        )
      }

      handleWebSocketConversation("/video/pause") { incoming, outgoing ->
        outgoing.send(Frame.Text("{\"isPlay\":\"false\",\"progress\":\"0.355\"}"))
        assertEquals(
          "{\"isPlay\":\"false\",\"progress\":\"0.355\"}",
          (incoming.receive() as Frame.Text).readText()
        )
      }
    }
  }
}