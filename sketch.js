var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;
var fedtime;
var lastfed;
var currenttime;
var foodobj;

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1000,500);
foodobj = new Food();

  dog=createSprite(200,400,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  feed = createButton("feed the dog");
feed.position(700,95);
feed.mousePressed(feeddog);

addfood = createButton("add food ");
addfood.position(800,95);
addfood.mousePressed(addfood);

}

// function to display UI
function draw() {
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function feeddog(){
  dog.addImage(dogImg1);
  foodobj.updateFoodStock(foodobj.getfoodStock() - 1);
}
function addfood(){
  foodobj.foodStock =  foodobj.foodStock+1;
  foodobj.updateFoodStock(foodobj.foodStock);
}