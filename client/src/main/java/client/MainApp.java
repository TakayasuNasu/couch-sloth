package client;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.geometry.Insets;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class MainApp extends Application {
  TextField tf;
  VBox vbox;
  Scene scene;

  @Override
  public void start(Stage stage) throws Exception {
    Parent root = FXMLLoader.load(getClass().getResource("scene.fxml"));

    // text field
    tf = new TextField();
    vbox = new VBox();
    vbox.getChildren().add(tf);

    stage.setTitle("Couch Sloth");
    Scene scene = new Scene(vbox, 1000, 800);
//    Scene scene = new Scene(root, 1000, 800);
    scene.getStylesheets().add(getClass().getResource("styles.css").toExternalForm());

//    GridPane gridPane = (GridPane) scene.getRoot();
//    TextField message = new TextField();
//    message.setTranslateX(115);
//    message.setTranslateY(-70);
//    gridPane.getChildren().add(message);


//    scene = new Scene(vbox);

    stage.setScene(scene);
    stage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}
