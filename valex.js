Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ONBpZhaUy/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "La primera prediccion es " + prediction_1;
  speak_data_2 = "Y la segunda prediccion es " + prediction_2;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}
function check(){
var img=document.getElementById("captured_image");
classifier.classify(img,valex)}
function valex(error,results){
if(error){
console.error(error);
}else{
console.log(results);
document.getElementById("result_emotion_name").innerHTML=results[0].label;
document.getElementById("result_emotion_name2").innerHTML=results[1].label;
var valex2=results[0].label;
var valex3=results[1].label;
if(results[0].label=="GENIAL"){
  document.getElementById("update_emoji").innerHTML="(*^▽^*)"
  }
  if(results[0].label=="VICTORIA"){
    document.getElementById("update_emoji").innerHTML=".·´¯`(>▂<)´¯`·. "
    }
    if(results[0].label=="BIEN"){
      document.getElementById("update_emoji").innerHTML="￣へ￣  "
      }
  }if(results[1].label=="GENIAL"){
document.getElementById("update_emoji2").innerHTML="(*^▽^*)"
}
if(results[1].label=="VICTORIA"){
  document.getElementById("update_emoji2").innerHTML=".·´¯`(>▂<)´¯`·. "
  }
  if(results[1].label=="BIEN"){
    document.getElementById("update_emoji2").innerHTML="￣へ￣  "
    }
}

