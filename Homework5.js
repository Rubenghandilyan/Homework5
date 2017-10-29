
const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};
//problem 1
/*
const count = 100;
const canvasWidth = 1300;
const canvasHeight = 600;
const point = [];

const createPoints = function(count , canvasWidth, canvasHeight)
{
	if(count === 0)
		return;
	const colorArray = ["red", "green", "orange"]
	point[count] = 
	{
		x : rand(canvasWidth-30),
		y : rand(canvasHeight-30),
		width : 30,
		height : 30,
		xDelta : 1,
		yDelda : 1,
		color : colorArray[rand(3)-1]
	}
	createPoints(count-1,canvasWidth,canvasHeight);
}

const draw = function(num)
{
	if(num === 0)
		return;
	context.fillStyle = point[num].color;
	context.fillRect(point[num].x,point[num].y,point[num].width,point[num].height);
	draw(num-1);
}
createPoints(count,canvasWidth,canvasHeight);
draw(count);
*/
// problem 2
/*
const count = 10;
const canvasWidth = 1300;
const canvasHeight = 600;
const point = [];
const colorArray = ["red", "green", "orange","blue","gray"];

const createPoints = function(count , canvasWidth, canvasHeight)
{
	if(count === 0)
		return;
	point[count] = 
	{
		x : rand(canvasWidth-30),
		y : rand(canvasHeight-30),
		width : 30,
		height : 30,
		xDelta : rand(10),
		yDelta : rand(10),
		color : colorArray[rand(5)-1]
	}
	createPoints(count-1,canvasWidth,canvasHeight);
}

const updateData = function(num)
{

	if(num === 0)
		return;
	if(point[num].x + point[num].width >= canvasWidth)
	{
		point[num].xDelta = -point[num].xDelta;
		point[num].color = colorArray[rand(5)-1];
	}
	if(point[num].y + point[num].height >= canvasHeight)
	{
		point[num].yDelta = -point[num].yDelta;
		point[num].color = colorArray[rand(5)-1];
	}
	if(point[num].x <= 0)
	{
		point[num].xDelta = -point[num].xDelta;
		point[num].color = colorArray[rand(5)-1];
	}
	if(point[num].y <= 0)
	{
		point[num].yDelta = -point[num].yDelta;
		point[num].color = colorArray[rand(5)-1];
	}
	point[num].x = point[num].x + point[num].xDelta;
	point[num].y = point[num].y + point[num].yDelta;
	
	updateData(num-1);
}

const draw = function(num)
{
	if(num === 0)
		return;
	context.fillStyle = point[num].color;
	context.fillRect(point[num].x,point[num].y,point[num].width,point[num].height);
	draw(num-1);
}

const loop = function()
{
	context.clearRect(0,0,canvasWidth,canvasHeight);
	draw(count);
	updateData(count);
	requestAnimationFrame(loop);
}

createPoints(count,canvasWidth,canvasHeight);
loop();

*/
// problem 3


/*

const canvasWidth = 1300;
const canvasHeight = 600;
const crabs = [];

const backgroundImg = new Image();
backgroundImg.src = "https://www.epmag.com/sites/default/files/styles/article_mobile/public/article-images/2016/01/underwater.jpg?itok=tuuxp1mT&timestamp=1452282428";

const fishImg = new Image();
fishImg.src = "https://vignette.wikia.nocookie.net/sml/images/5/5d/DoryTransparent.PNG/revision/latest?cb=20170319194201";

const crabImg = new Image();
crabImg.src = "http://crabeatery.com/images/crab0.png";

const fish = 	
{
	x: 50,
	y: 50,	
	width: 100,
	height: 100
}

const level =
{
	sum: 0,
	count: 2,
	delta: 5
}

const createCrabs = function(count , canvasWidth, canvasHeight , delta)
{
	if(count === 0)
		return;
	crabs[count] = 
	{
		x : rand(canvasWidth-30 - 150) + 80,
		y : rand(canvasHeight-30 - 150) + 80,
		width : 50,
		height : 50,
		xDelta : delta,
		yDelta : delta
	}
	createCrabs(count-1,canvasWidth,canvasHeight,delta);
}

const gameOver = function(num)
{
	if(num===0)
		return;
	if((crabs[num].x >= (fish.x-crabs[num].width)) && (crabs[num].x <= (fish.x + fish.width)) && (crabs[num].y >= (fish.y-crabs[num].height)) && (crabs[num].y <= (fish.y + fish.height)) )
		alert("Game Over");
	gameOver(num-1);
}

const updateData = function(num)
{

	if(num === 0)
		return;
	if(crabs[num].x + crabs[num].width >= canvasWidth)
		crabs[num].xDelta = -crabs[num].xDelta;
	if(crabs[num].y + crabs[num].height >= canvasHeight)
		crabs[num].yDelta = -crabs[num].yDelta;
	if(crabs[num].x <= 0)
		crabs[num].xDelta = -crabs[num].xDelta;
	if(crabs[num].y <= 0)
		crabs[num].yDelta = -crabs[num].yDelta;
	crabs[num].x = crabs[num].x + crabs[num].xDelta;
	crabs[num].y = crabs[num].y + crabs[num].yDelta;
	updateData(num-1);
}

const draw = function(num)
{
	if(num === 0)
	{
		context.drawImage(fishImg,fish.x,fish.y,fish.width,fish.height);
		return;
	}
	context.drawImage(crabImg,crabs[num].x,crabs[num].y,crabs[num].width,crabs[num].height);
	draw(num-1);
}

const loop = function()
{
	if((fish.x + fish.width >= canvasWidth) || (fish.x <=0) || (fish.y + fish.height >= canvasHeight) || (fish.y <=0))
	{
		fish.x = 30;
		fish.y = 30;
		level.count = level.count + 1;
		level.delta = level.delta + 3;
		createCrabs(level.count,canvasWidth,canvasHeight,level.delta);
	}
	gameOver(level.count);
	context.drawImage(backgroundImg,0,0,canvasWidth,canvasHeight);
	draw(level.count);
	updateData(level.count);
	requestAnimationFrame(loop);
}

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;

document.addEventListener('keydown', function(event) {
	if(event.keyCode === rightKey)
	{
		if((fish.x + 10) + fish.width <= canvasWidth)
        	fish.x = fish.x + 10;
    }
    else if(event.keyCode === leftKey)
    {
    	if((fish.x - 10) >= 0)
      		fish.x = fish.x - 10;
    }
    else if(event.keyCode === upKey)
    {
    	if((fish.y - 10)  >= 0)
       		fish.y = fish.y - 10;
    }
    else if(event.keyCode === downKey)
    {
    	if((fish.y + 10) + fish.height <= canvasHeight)
        	fish.y = fish.y + 10;
    }
}, false);

createCrabs(level.count,canvasWidth,canvasHeight,level.delta);
loop();
*/