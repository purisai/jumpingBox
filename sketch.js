var canvas;
var music;
var blueSprite,orangeSprite,pinkSprite,greenSprite
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blueSprite=new RectSprite(95,575,200,30,"blue");
    orangeSprite=new RectSprite(300,575,200,30, "orange");
    pinkSprite=new RectSprite(500,575,200,30, "magenta");
    greenSprite=new RectSprite(700,575,200,30, "green");

    box = createSprite(Math.round(random(20,750)),40,20,20);
    box.shapeColor = "white";
    box.velocityX=5;
    box.velocityY=6;
}

function draw() {

    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges)

    greenSprite.display(box);
    pinkSprite.display(box);
    blueSprite.display(box);
    orangeSprite.display(box);
}
