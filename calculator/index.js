let btn = document.getElementsByClassName("button");
let screen = document.getElementById("output");
let srcvalue = "";
for(items of btn) {
    items.addEventListener("click",function(e) {
        val = e.target.innerText;
        console.log(val);
        if(val == "C") {
            srcvalue = "";
            screen.value = srcvalue;
        }
        else if (val == "=") {
            screen.value = eval(srcvalue);
            
        }
        else {
            srcvalue += val;
            screen.value = srcvalue;
        }
    })
}
