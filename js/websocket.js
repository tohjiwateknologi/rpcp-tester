var websocketClient;
var url;
var vHost;

function connect() {
	url = document.getElementById("url").value;
	vHost = document.getElementById("vHost").value;

	localStorage.setItem("url", url);
	localStorage.setItem("vHost", vHost);

	websocketClient = new WebSocket(url, "rpcp-1.0");
	console.log(websocketClient.readyState);
	if (websocketClient.readyState == "CONNECTING") {
		console.log("Connecting");
	}

	websocketClient.onopen = function (event) {
		websocketClient.send("CONNECT " + vHost + " RPCP/1.0\r\nagent: gle-openapi-js/1.0");
	};

	websocketClient.onmessage = function (event) {
		console.log(event.data);
	}

	websocketClient.onclose = function (event) {
		console.log("colsed");
	}
}

function sendMessage() {
	var method = document.getElementById("methodName").value;
	var id = document.getElementById("id").value;
	var contentType = document.getElementById("content-type").value;
	var body = document.getElementById("body").value;

	localStorage.setItem("method", method);
	localStorage.setItem("id", id);
	localStorage.setItem("contentType", contentType);
	localStorage.setItem("body", body);

	var strRPCP = "CALL ";
	strRPCP += method + " ";
	strRPCP += vHost + " ";
	strRPCP += "RPCP/1.0";
	strRPCP += "\r\n";
	strRPCP += "content-type: " + contentType + "\r\n";
	strRPCP += "id: " + id + "\r\n";
	strRPCP += "\r\n";
	strRPCP += body;

	websocketClient.send(strRPCP);
}

function wsClose() {
	websocketClient.close();
}
