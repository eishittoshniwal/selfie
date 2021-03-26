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
}