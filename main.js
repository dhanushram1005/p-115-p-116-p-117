headx=0;
heady=0;

function preload(){
hat_head=loadImage('https://i.postimg.cc/Wb8fZdR6/s-l640.jpg');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();

video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet has started");
}

function gotPoses(results){
if (results.length>0){
    console.log(results);
    console.log("head x="+results[0].pose.head.x);
    console.log("head y="+results[0].pose.head.y);
    headx=results[0].pose.hose.x;
    heady=results[0].pose.head.y;
}
}
function draw(){
image(video,0,0,300,300);
image(hat_head,headx,heady,30,30);
}

function take_snapshot(){
    save("RAID.jpeg");
}