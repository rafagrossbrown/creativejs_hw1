

var r=255;
var g=200;
var b=0;

var img;
var communism=[];
var terrorism=[];
var rows=[];

function setup(){

	createCanvas(1280,720);
	loadDataT();
	loadDataC();
	img = loadImage("dart_backg_dark.png");
	
	
}



function draw(){
	background(r,g,b);
	image(img, 0, 0);
	drawRectC();
	drawRectT();
  	noStroke();
	// for (var i=0; i < width; i+= 20){
	// 	fill(0);
	// 	ellipse(i,50,50,50);
	// 	console.log(i);
	// }

	// text("this is a string", width/2, height/2);
	
	// if(mouseX>100){
	// 	rect(100,50,50,25);
	// }
	noLoop();
	
}

function loadDataC() {

 communism=loadStrings("communism.csv");

 // communism=[rows.length];

  // for (var i=0; i<rows.length; i++) communism[i]=(rows[i]);

}
function loadDataT(){
 terrorism=loadStrings("terrorism.csv");

}

 

function drawRectC(){

	for(var i=0; i<communism.length; i=i+1){
	 fill(240,20,40,80);
	var n= sqrt(communism[i]);

	var m= sqrt(max(communism));

	var d= map(n, 0, m,0,sqrt(1000));
	 
	rect(20+i*10, height/2, 10, n *10);
	}


}

function drawRectT(){

	for(var i=0; i<terrorism.length; i=i+1){
	 fill(240,20,40,80);
	var n= sqrt(terrorism[i]);

	var m= sqrt(max(terrorism));

	var d= map(n, 0, m,0,sqrt(1000));
	 
	rect(20+i*10, height/2, 10,-(n *10));

	}


}

