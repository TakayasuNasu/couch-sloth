package client;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class FXMLController implements Initializable {

  @FXML
  private TextField testTextField;

  @FXML
  public Button btn0;

  @FXML
  private Label label;

  @Override
  public void initialize(URL url, ResourceBundle rb) {
    String javaVersion = System.getProperty("java.version");
    String javafxVersion = System.getProperty("javafx.version");
    label.setText("Hello, JavaFX " + javafxVersion + "\nRunning on Java " + javaVersion + ".");
  }

  public void buttonClicked(ActionEvent actionEvent) {
    Button btnClicked = (Button) actionEvent.getSource();
    String id = btnClicked.getId();
    if (id.equals("btn0")){
      System.out.println("First Button!");
    }
  }
}