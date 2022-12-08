// Create the reference variable of the canvas using fabric.Canvas()
var canvas= new fabric.Canvas();

// Define the starting width and height of the block images
var block_width=30;
var block_height=30;


// Define the starting x and y coordinates for the player

var player_x=10;
var player_y=10;

// Define a variable named player_object to store object of the player image
var player_object="";

// Add a function named player_update() to add the player image
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}






// Add a function named new_image() to add the different images as per the specific keys pressed

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed== 80)
    {
        block_width=block_width+10;
        block_height=block_height+10;

        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;
    }

    if(e.shiftKey==true && keyPressed== 77)
    {
        block_width=block_width-10;
        block_height=block_height-10;

        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;
    }

    if(keyPressed=='37')
    {
        console.log("left");
        left();
    }
    if(keyPressed=='38')
    {
        console.log("up");
        up();
    }
    if(keyPressed=='39')
    {
        console.log("right");
        right();
    }
    if(keyPressed=='40')
    {
        console.log("down");
        down();
    }

    if(keyPressed=='87')
    {
        console.log("W");
        new_image("wall.jpg");
    }
    if(keyPressed=='68')
    {
        console.log("D");
        new_image("dark_green.png");
    }
    if(keyPressed=='76')
    {
        console.log("L");
        new_image("light_green.png");
    }




}
