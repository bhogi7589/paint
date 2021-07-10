canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseevent = "empty";
var lastx, lasty, currentx, currenty;

linew = 1;

color = "cyan"; 

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseevent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    currentx = e.clientX - canvas.offsetLeft - 20;
    currenty = e.clientY - canvas.offsetTop - 20;
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linew;
        ctx.moveTo(lastx, lasty);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
    }
    lastx = currentx;
    lasty = currenty;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
    for (var i = 0; i < e.touches.length; i++)
        currentx = e.touches[i].clientX - canvas.offsetLeft;
        currenty = e.touches[i].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linew;
        ctx.moveTo(lastx, lasty);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
        lastx = currentx;
        lasty = currenty;
}

function mouseup(e){
    mouseevent = "mouseup";
}

function mouseleave(e){
    mouseevent = "mouseleave";
}

canvas.addEventListener("mouseup", mouseup);
canvas.addEventListener("mouseleave", mouseleave);

function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	
