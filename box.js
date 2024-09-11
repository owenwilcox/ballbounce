
import './style.css'
import javascriptLogo from './javascript.svg'


const height = 500;
const width = 500;
let ctx;
const fps = 60;
const speed = 1000;
const gravity = {x:0, y:1}



function draw(pos) {

		ctx.beginPath();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.arc(pos.x, pos.y, 25, 0, 2*Math.PI);	
		ctx.fill();
		
}

window.addEventListener("load", main);

function addVectors(vector1, vector2){
	
	return {
		x : vector1.x + vector2.x,
		y : vector1.y + vector2.y
	}	
}

function main(){
	
	const canvas = document.getElementById("canvas");
	
	ctx = canvas.getContext("2d");
	const initialPos = {x:250, y:250};
	let pos = initialPos;
	let vel = {x:0, y: -10};
	setInterval(() => {
		draw(pos);
		pos = addVectors(pos, vel);
		vel = addVectors(vel, gravity);
	
		if(pos.y+vel.y >= 475){
			console.log(vel)
			console.log(pos.y)
			pos.y = 475;
			vel = {x:0, y:-vel.y+2}
		}




//		if(pos.x > 750){ 
//			//todo: DRY vel -> intialVel
//			vel = {x:10, y:-50};
//			pos = initialPos};

	}, 1000/fps);	
}
