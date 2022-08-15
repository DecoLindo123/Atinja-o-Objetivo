
var canvas = fabric.canvas('myCanva');

ballY = 0;
ballX = 0;
holeY = 400;
holeX = 800;


blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function (Img) {
       holeObj = Img;
	   holeObj.scaleToWidth(50);
	   holeObj.sacleToHeight(50);
	   holeObj.set({
		       top:holeY,
			   left:holeX
	   });
	   canvas.add(holeObj);
	});
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png", function (Img) {
	  ballObj = Img;
	  ballObj.scaleToWidth(50);
	  ballObj.sacleToHeight(50);
	  ballObj.set({
		top:ballY,
		left:ballX
});
canvas.add(holeObj);
});
newImage();

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballY==holeX)&&(ballY==holeY)){
		canvas.remove(ballObj);
	document.getElementById(hd3).innerHTML="Você atingiu o objetivo!!!";
	document.getElementById("myCanvas").style.borderColor = "red";
	}

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}


	
	function up()
	{
		if(ball_y >=5) { ball_y = ball_y - block_image_height;
			 console.log("block image height = " + block_image_height);
			 console.log("When Up arrow key is pressed, X = " + ball_x + " , Y = "+ball_y); 
			 canvas.remove(ball_obj); new_image();
			 }
	}

	function down()
	{
		if(ball_y <=450) { ball_y = ball_y + block_image_height; 
			console.log("block image height = " + block_image_height); 
			console.log("When Down arrow key is pressed, X = " + ball_x + " , Y = "+ball_y); 
			canvas.remove(ball_obj);
			 new_image();
			 }

	function left()
	{
		if(ballX >5)
		{
			{ ball_x = ball_x - block_image_width; 
				console.log("block image width = " + block_image_width); 
				console.log("When Left arrow key is pressed, X = " + ball_x + " , Y = "+ball_y); 
				canvas.remove(ball_obj); 
				new_image();
			 }
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			{ ball_x = ball_x + block_image_width;
				 console.log("block image width = " + block_image_width); 
				 console.log("When Right arrow key is pressed, X = " + ball_x + " , Y = "+ball_y); 
				 canvas.remove(ball_obj);
				  new_image();
				 }
		}
	}
	
    }

}
