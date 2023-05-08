this.onmessage = function (event) {

    var calculado = event.data*event.data;
    postMessage("El worker dice que: "+calculado);
}