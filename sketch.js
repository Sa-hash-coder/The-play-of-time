const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
     getBackgroundImg( );
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
   
    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
     hour = datetime.slice(11,13);
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
     if (hour>=04 && hour<=06){
         bg="sunrise1.png";
     }
     if (hour>=06 && hour<=08){
        bg="sunrise2.png";
    }
    if (hour>=08 && hour<=12){
        bg="sunrise3.png";
    }
    if (hour>=12 && hour<=14){
        bg="sunrise4.png";
    }
    if (hour>=14 && hour<=16){
        bg="sunrise5.png";
    }
    if (hour>=16 && hour<=18){
        bg="sunrise6.png";
    }
    if (hour>=18 && hour<=20){
        bg="sunset7.png";
    }
    if (hour>=20 && hour<=22){
        bg="sunset8.png";
    }
    if (hour>=22 && hour<=00){
        bg="sunset9.png";
    }
    if (hour>=00 && hour<=02){
        bg="sunset10.png";
    }
    if (hour>=02 && hour<=04){
        bg="sunset11.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
