var add = document.querySelector("#Add");
var remove = document.querySelector("#Remove");
var input = document.querySelector("input");
var ul = document.querySelector("ul");

var li;

add.addEventListener("click", function(){
    if ( input.value .trim() === " "){}
    else {
        li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = " ";
    }
})

remove.addEventListener("click", function(){
    ul.removeChild(li);
});