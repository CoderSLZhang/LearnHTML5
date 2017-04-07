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

window.onscroll = function() {
    if (checkWillLoad()) {
       for (var i=0; i<data.length; i++) {
           var box = document.createElement('div');
           box.className = 'box';
           $('main').appendChild(box);
           
           var pic = document.createElement('div');
           pic.className = 'pic';
           box.appendChild(pic);
           
           var img = document.createElement('img');
           img.src = 'images/' + (i + 1) + '.jpg';
           pic.appendChild(img);
       } 
        
        layoutWaterFlow();
    }
}

function waterFlow(parent, boxes) {
    var boxWidth = boxes[0].offsetWidth;
    var widowWidth = document.body.offsetWidth;
    var cols = Math.floor(widowWidth / boxWidth);
    
    parent.style.width = cols * boxWidth + 'px';
    parent.style.margin = '0 auto';
    parent.style.position = 'relative';
    
    var heights = [];
    for (var i=0; i<boxes.length; i++) {
        
        var height = boxes[i].offsetHeight;
        
        if (i < cols) {
            boxes[i].style.position = 'static';
            heights.push(height);
        } else {
            boxes[i].style.position = 'absolute';

            var minHeight = Math.min.apply(this, heights);
            var col = heights.indexOf(minHeight);
            boxes[i].style.top = minHeight + 'px';
            boxes[i].style.left = col * boxWidth + 'px';

            
            heights[col] += height;
        }
    }
} 

function checkWillLoad() {
    var boxes = $('main').getElementsByClassName('box');
    var lastBox = boxes[boxes.length - 1];
    
    var lastOffset = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;
    
    var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
    var scrollOffset = screenHeight + document.body.scrollTop;
        
    return lastOffset <= scrollOffset;
}