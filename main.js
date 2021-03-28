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
}
//code for webcam setup
Webcam.set({
    width:360,
    height:250,
    image_quality:'jpg',
    jpg_quality:90,  
})
