var SpeechRecognition=window.webkitSpeechRecognition
var recognitionapi=new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML=""
    recognitionapi.start()
}

recognitionapi.onresult=function run(answers) {
    console.log(answers)
   output=answers.results[0][0].transcript
    document.getElementById("textbox").value=output
    if (output=="take my selfie") {
        speak()
    }
}

function speak(){
var speechapi=window.speechSynthesis
var speakdata="Taking your selfie in 5 seconds"
var saythis=new SpeechSynthesisUtterance(speakdata)
speechapi.speak(saythis)
//code for attaching the webcam
Webcam.attach("camera")
setTimeout(function () {
    capture()
    save()
},5000)
}
//code for webcam setup
Webcam.set({
    width:360,
    height:250,
    image_quality:'jpg',
    jpg_quality:90,  
})
//code for taking snapshot
function capture() {
    Webcam.snap(
        function (selfie) {
            document.getElementById("result").innerHTML=`<img src=${selfie} id="selfie_image">`
        }
    )
}
function save() {
    img=document.getElementById("selfie_image").src;
    link=document.getElementById("link")
    link.href=img
    link.click()
}


