Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 100
});

camera=document.getElementById("cam");

Webcam.attach('#cam);

function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img1" src="'+data_uri+'">'
    })
}