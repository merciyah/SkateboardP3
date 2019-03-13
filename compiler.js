//Kewy word while designing skateboards: Equidistant

var velocity;
var force_init = false;

// init dv
var dSwitch =false;
var bono = 30

//init truttle
var vSwitch = true;
function skateboard(){ 
var wheel1 = {
	type:'ellipse',
	x:bono,
	y:250,
	width:24,
	height:24
}
var wheel2= {
	type:'ellipse',
	x:wheel1.x+80,
	y:250,
	width:24,
	height:24
}
var truck1={
	type: 'triangle',
	x1:wheel1.x,
	y1:wheel1.y,
	x2:wheel2.x,
	y2:wheel2.y,
	x3:(wheel1.x+wheel2.x)/2,
	y3:(wheel1.y+wheel1.height)/4

}; 
var screw2 = {
	type:'ellipse',
	x: wheel2.x,
	y: wheel2.y,
	width: 10,
	height:10
};
var screw1 = {
	type:'ellipse',
	x: wheel1.x,
	y: wheel1.y,
	width: 10,
	height:10
};
var deckSet = 25
var deck1 = {
	type:'rec',
	x:wheel1.x-deckSet,
	y:230,
	width:180,
	height:3

};
var deck2 = {
	type:'rec',
	x:wheel1.x - deckSet,
	y:233,
	width:210,
	height:3

};
var deck3 = {
	type:'rec',
	x:wheel1.x - deckSet,
	y:236,
	width:170,
	height:3

};

var skateboard = [wheel1,screw1, wheel2, screw2, deck1, deck3]
return skateboard
}
var force;
// I use force to pitch velocity
// Accelarate and decelerate using intergration
function setup(){
  createCanvas(1480,270)
}

function coast50(){
	
}


function render(someArray){

	for(var i = 0; i<someArray.length; i++){	
		console.log(someArray[i]);
		if(someArray[i].type == 'ellipse'){
		ellipse(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
			}
		if(someArray[i].type == 'rec'){
		rect(someArray[i].x, someArray[i].y, someArray[i].width, someArray[i].height)
		}
		}
}

function displacement(pressure, mass){
	// init state on particle displacment


	// switch dv
	dSwitch = true
	
	// lets try adding force
	bono = bono * this.force(pressure,mass)/21
	//this.force(pressure,mass) * 3

	//should not reverse
}

function force(pitch, mass){
		// initialize()

	var rest;
	var lacement = pitch * tan(24.91);
	var invertIntergral_velocity;

	// ex invertIntergral velocity is 72 at 
	var ratp = 12;
	var roll = ratp;
	var motion;

	invertIntergral_velocity = pitch * roll;

	if(velocity == null){
		velocity = 0;
	}
	//boolean v swtch

	if(vSwitch){

		motion = "accelerating";
		velocity++;
	}

	if (velocity == invertIntergral_velocity){
		
		vSwitch = false;
		velocity--;
	}
	if(!vSwitch){
		
		motion = "decelerating"
		velocity--;
		}

	if (velocity < 0){
			velocity = 0
		}

		//if(vSwitch)
		//console.log("invertIntergral :" + invertIntergral_velocity+ "Skate_Velocity = " + velocity + motion)
		//else
		// console.log("min :" + 0 + "In Motion Skate_Velocity = " + velocity + motion)
		

	// end displayment = distance + start displacement
	return velocity
		}

function draw() {
  // put drawing code here
  background(50,196,223);
  //how to calculate pitch. Pitch = force at lim x-> 0
  this.displacement(4,1)  
  //ellipse(160, 210, 20, 40)
  this.render(this.skateboard())
}