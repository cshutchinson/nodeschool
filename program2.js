class Character {
 	constructor (x,y, health) {
 		this.x = x;
 		this.y = y;
 		this.health = health = 100;
 	}

 	damage() {
 		this.health -=10;
 	}

 	health(){
 		return this.health;
 	}

 	toString(){
 		return `x: ${this.x} y: ${this.y} health: ${this.health}`;
 	}


}

// class Player extends Character {
// 	constructor (x,y, name) {
// 		super (x,y);
// 		this.name = name;
// 	}

// 	move(dx, dy){
// 		this.x += dx;
// 		this.y += dy;
//  	}

//  	toString(){
//  		return `x: ${this.x} y: ${this.y} health: ${this.health}`;
//  	}
// }

	var x = process.argv[2];
    var y = process.argv[3];
    var character = new Character(x, y);
    character.damage();
    console.log(character.toString());