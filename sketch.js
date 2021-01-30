var circumference=0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var numer = 50 ;
  var string = "1" ;
  numer=numer +1;
  console.log(numer);
  string = parseInt(string);
  string = string + 1; 
  console.log(string);
  var boolean = true; 
  console.log(boolean);
  var obj = null ; 
  console.log(obj);
  var score ;
  console.log(score);
  var name = "Rajeev";
  console.log(name.length);
  console.log(name.toUpperCase());
  
  if(3>2){
    console.log("Happy")
  }
  else{
    console.log("Not Happy")
  }

  var name = "My namee";

switch(name) {  
case  "My name":  
console.log("Condition 1");  
break;  
case  "my Name":  
console.log("Condition 2");  
break;  
default:  
console.log("None of the conditions are true");

}

for(var i=10; i<=20; i=i+2){
	console.log(i)
}

var i =0
while (i<=5){
	console.log(i)
	i=i+1
}

var friends = ["friend1","friend2","friend3"];
console.log(friends);
console.log(friends.length);
friends.push("freind4");
var xyz=[3,5,7];
friends.push(xyz);
console.log(friends);
friends.pop();
circumferenc(5);
console.log(circumference);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
}

function circumferenc(radius){

	circumference = 2 * 3.14 * radius
	return circumference
}