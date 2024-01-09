var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h4 = document.querySelector("h4");


var Int;
start.addEventListener("click", function() {
    var count = 0;
    Int = setInterval(function() { 
        h4.textContent = count;
        count ++;
     },1000)

})

stop.addEventListener("click", function() {
    clearInterval(Int);
});