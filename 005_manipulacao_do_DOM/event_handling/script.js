const block = document.querySelector(".block");

block.addEventListener("click", function(event){
    event.preventDefault(); 
    console.log("Event: ", event);
});

block.addEventListener("mouseover", function(event){
    event.preventDefault(); 
    this.style.width = "200px";
});

block.addEventListener("mouseout", function(event){
    event.preventDefault(); 
    this.style.width = "300px";
});

console.log(block)