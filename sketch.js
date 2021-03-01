var cat, trees, mouse;
var treesIMG;
var cat1Pos, catWalking, cat2Pos;
var mouse1Pos, mouseWalking, mouse2Pos;


function preload() {
    //load the images here
    treesImg = loadImage("garden.png");
    cat1Pos = loadAnimation("cat1.png");
    catWalking = loadAnimation ("cat2.png", "cat3.png");
    cat2Pos = loadAnimation("cat4.png")
    mouse1Pos = loadAnimation("mouse1.png");
    mouseWalking = loadAnimation ("mouse2.png", "mouse3.png");
    mouse2Pos = loadAnimation("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
  
    //create tom and jerry sprites here
    trees = createSprite(500, 400, 10, 10);
    trees.addImage(treesImg);

    cat = createSprite(700, 600, 10, 10);
    cat.addAnimation("cat is sitting", cat1Pos);
    cat.addAnimation("cat is walking", catWalking);
    cat.addAnimation("cat is sitting 2", cat2Pos);
    cat.scale = 0.2;

    
    mouse = createSprite(200, 600, 10, 10);
    mouse.addAnimation("mouse is sitting", mouse1Pos);
    mouse.addAnimation("mouse is walking", mouseWalking);
    mouse.addAnimation("mouse is sitting 2", mouse2Pos);
    mouse.scale = 0.2;

}

function draw() {

    if(keyWentDown(LEFT_ARROW)) {
        cat.velocityX = -4;
        cat.changeAnimation("cat is walking", catWalking);
        mouse.changeAnimation("mouse is walking", mouseWalking);
    }

    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.changeAnimation("cat is sitting 2", cat2Pos);
        mouse.changeAnimation("mouse is sitting 2", mouse2Pos);
        cat.velocityX = 0;
    }



    drawSprites();
}

  //For moving and changing animation write code here



