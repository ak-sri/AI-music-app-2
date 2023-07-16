feeling_good= ""; 
lets_dance= ""; 

function preload(){
    feeling_good= loadSound("Feeling Good - backing_converted (1).mp3");
    lets_dance= loadSound("Let's Dance - backing_converted (1).mp3");
}

function setup(){
    canvas= createCanvas(500,300); 
    canvas.center()

    video= createCapture(VIDEO); 
    video.hide(); 
}

function draw(){
    image(video, 0, 0, 600,500);
}