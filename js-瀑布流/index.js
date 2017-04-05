function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}

window.onload = function() {
    var parent = $('main');
    var boxes = document.getElementsByClassName('box');
    
    waterFlow(parent, boxes); 
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