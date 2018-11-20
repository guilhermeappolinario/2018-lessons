var myMap;
var canvas;
var myLoc;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoibWlraW1hIiwiYSI6IjNvWUMwaUEifQ.Za_-O03W3UdQxZwS3bLxtg');

// Lets put all our map options in a single object
var options = {
	lat: 0,
	lng: 0,
	zoom: 8,
	style: 'mapbox://styles/mapbox/traffic-night-v2',
	pitch: 50
}
function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	// background(100); let's uncomment this, we don't need it for now

	//update options according to current location
	options.lat = myLoc.latitude;
	options.lng = myLoc.longitude;

	// Create a tile map with the options declared
	myMap = mappa.tileMap(options);
	myMap.overlay(canvas);
}

function draw() {
	clear();

	var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
	ellipse(point.x, point.y, 5);
}