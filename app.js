var currentTime = new Date()
console.log(currentTime)

var hoursSp = document.getElementById("hours")
var mintsSp = document.getElementById("minutes")
var secsSp = document.getElementById("seconds")

setInterval(() => {
    var time =  new Date()

    if(time.getHours() < 12){
    hoursSp.innerText = time.getHours()+":" 
    mintsSp.innerText = time.getMinutes()
    secsSp.innerText = time.getSeconds() + "AM"
    } else{
        hoursSp.innerText = time.getHours()-12+":" 
        mintsSp.innerText = time.getMinutes()+":"
        secsSp.innerText = time.getSeconds()+" " + "PM" 
    }


}, 1000);

