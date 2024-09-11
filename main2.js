
import './style.css'
import javascriptLogo from './javascript.svg'


const height = 1000;
const width = 1000;
let ctx;
const fps = 1000;
const speed = 1000;
const gravity = {x:0, y:2}



function draw(pos) {

		ctx.beginPath();
		//ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.arc(500, 500, 500, 0, 2*Math.PI);	
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(pos.x, pos.y, 25, 0, 2*Math.PI)
		ctx.stroke();
		
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
	const initialPos = {x:255, y:250};
	let pos = initialPos;
	let vel = {x:0, y: -10};
	setInterval(() => {
		draw(pos);
		pos = addVectors(pos, vel);
		vel = addVectors(vel, gravity);
	

		let distance = Math.sqrt((pos.x-500)*(pos.x-500)+(pos.y-500)*(pos.y-500));
		if(distance >= 475){
			//console.log(vel)
			//console.log(pos.y)
			let nx = 500 - pos.x;
			let ny = 500 - pos.y;
			let len = Math.sqrt(nx*nx + ny*ny);
			nx = nx / len;
			ny = ny / len;
			
			vel = {x:vel.x - 2*(nx * vel.x + ny * vel.y)*nx*.99, y:vel.y - 2*(nx * vel.x  + ny * vel.y)*ny*.99}
		}


//		if(pos.x > 750){ 
//			//todo: DRY vel -> intialVel
//			vel = {x:10, y:-50};
//			pos = initialPos};

	}, 1000/fps);	
}
