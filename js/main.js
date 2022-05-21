init();

function init () {
	rpcp(refreshContactList);

	var url = localStorage.getItem("url");
	if(url != "") {
		document.getElementById("url").value = url;
	}

	var vHost = localStorage.getItem("vHost");
	if(vHost != "") {
		document.getElementById("vHost").value = vHost;
	}

	var method = localStorage.getItem("method");
	if(method != "") {
		document.getElementById("methodName").value = method;
	}

	var id = localStorage.getItem("id");
	if(id != "") {
		document.getElementById("id").value = id;
	}

	var contentType = localStorage.getItem("contentType");
	if(contentType != "") {
		document.getElementById("content-type").value = contentType;
	}

	var body = localStorage.getItem("body");
	if(body != "") {
		document.getElementById("body").value = body;
	}
}

function refreshContactList() {
    console.log("ini dia kehebatan JS");
}