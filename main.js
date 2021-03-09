function setup(){
    video= createCapture(VIDEO);
    video.size(500, 500);

    canvas= createCanvas(550, 400);
    canvas.position(560, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background('#808080');
}

function modelLoaded(){
    console.log("Pose Net is intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}