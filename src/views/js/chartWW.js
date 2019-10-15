//top 5 web worker
function responseFromServer01() {
    var xhttp01 = new XMLHttpRequest();
    //console.log("from top5.json ww: " + typeof xhttp);
    xhttp01.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            postMessage(xhttp01.responseText);
        }
    };
    //API static data - route map in routes/index.js
    xhttp01.open("GET", "/top5.json", true);
    xhttp01.send();
}

responseFromServer01();