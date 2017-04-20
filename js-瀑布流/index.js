function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function() {
    layoutWaterFlow();
}

window.onresize = function() {
    layoutWaterFlow();
}

function layoutWaterFlow() {
    var parent = $('main');
    var boxes = document.getElementsByClassName('box');
    
    waterFlow(parent, boxes); 
}

var data = [
    {'img': '1.jpg'},
    {'img': '2.jpg'},
    {'img': '3.jpg'},
    {'img': '4.jpg'},
    {'img': '5.jpg'},
    {'img': '6.jpg'}
];

-