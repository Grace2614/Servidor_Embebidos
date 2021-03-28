//https://www.eclipse.org/paho/clients/js/

function LED1_On() {				//Crea una funciòn llamada LED1_ON
	//alert("led on");			//Escribe un mensaje de alerta
	console.log("led on");                  //Escribe un mensaje en la consola.
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
	message.destinationName = "grace.bonilla@unach.edu.ec/tema1"; //Destino del mensaje
	client.send(message);
}
function LED1_Off(){	
	//alert("led off");			//Escribe un mensaje de alerta
	console.log("led off");			//Escribe un mensaje en la consola.
	//document.getElementById("sensor").innerHTML="led off";
	message = new Paho.MQTT.Message("OFF");
	message.destinationName = "grace.bonilla@unach.edu.ec/tema1";
	client.send(message);
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "grace.bonilla@unach.edu.ec",
    password: "Nataly16",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("grace.bonilla@unach.edu.ec/tema1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "grace.bonilla@unach.edu.ec/tema1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
	  
	  
  }
