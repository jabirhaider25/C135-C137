


function Start() {
    function Start() {
        objectDetector = ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "status detecting objects";
    }
}
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas (300, 300); canvas.center();
    video= createCapture (VIDEO);
    video.hide();
    classifier = m15.imageClassifier('MobileNet', modelLoaded);
    }

function draw() {
    image(video,0,0,480,380);
    if (status != "") {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : object detected ";
            document.getElementById("number_of_objects").innerHTML = "number of objects :  " + objects.length;

            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}