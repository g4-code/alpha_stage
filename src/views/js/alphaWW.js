//web worker
function responseFromServer() {
    var xhttp = new XMLHttpRequest();
    //console.log("from alpha.json ww: " + typeof xhttp);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            postMessage(xhttp.responseText);
        }
    };
    //API static data - route map in routes/index.js
    xhttp.open("GET", "/alpha.json", true);
    xhttp.send();
}

responseFromServer();



