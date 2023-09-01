const board= document.getElementById("map");
console.log("LOADED");
for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
        let span = document.createElement("span");
        span.classList="box";
        span.id= (i+1).toString()+ "|"+ (j+1).toString();
        board.append(span);
    }
}
