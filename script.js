console.log("js is connected")

function edit(){
    var element = document.getElementById("name")
    element.innerText = "Sandy Patrick";
}


let accept =  document.querySelector("#toddE")
let count = document.querySelector("#req_count")
let numcount = 2
function hide(){
    accept.remove()
    numcount--
    count.innerText = numcount
}

