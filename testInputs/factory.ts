//it would be nice idea to use factory command pattern when we do not know at some point which enemies (in our case we are working with 
//enemies), so we do not specify the name of the class of an object we want to create. 

class EnemyFactory{//the class which will identify what type of enemy we want to spawn. This can be replaced with input user text,
// for example.
createEnemy(type:EnemyType):Enemy{
if(type == EnemyType.Skeleton){
    return new Skeleton();
}else
if(type == EnemyType.Spider){
    return new Spider();
}else
if(type == EnemyType.Zombie){
    return new Zombie();
}else return null!;

}

}

enum EnemyType{//actual types of enemies
    Skeleton =  'Skeleton',
    Spider = 'Spider',
    Zombie = 'Zombie'

}

abstract class Enemy{//the class contains fields and methods each enemy should have
    _name!: string;
    _health!: number;
    _scream!:string;

    getName():string{
        return this._name;
    }
    getHealth():number{
        return this._health;
    }
    setHealth(newHealth:number):void { this._health = newHealth; }
    setName(newName:string):void { this._name = newName; }

     scream():void {
        console.log(this._scream);
         }

    spottedPlayer():void{
        console.log(`${this.getName()} has spotted player`);
    }

}

class Skeleton extends Enemy{//actual, concrete enemy
    constructor(){
        super();
        this._scream = "<nasty skeleton sounds>";
        this.setHealth(20);
    } 
}
class Spider extends Enemy{//actual, concrete enemy
    constructor(){
        super();
        this._scream = "<nasty spider sounds>";
        this.setHealth(30);
    } 
}
class Zombie extends Enemy{//actual, concrete enemy
    constructor(){
        super();
        this._scream = "<nasty zombie sounds>";
        this.setHealth(40);
    } 
}
console.log("Factory Method pattern demonstration");
let enemyFactory = new EnemyFactory();//creating a factory, can be analogy of enemy spawner
//testing spider
let spider:Enemy;
spider = enemyFactory.createEnemy(EnemyType.Spider);
spider.setName("Spidy");
console.log(spider.getName());
spider.scream();
spider.spottedPlayer();
//end testing spider
//testing zombie
let zombie:Enemy;
zombie = enemyFactory.createEnemy(EnemyType.Zombie);
zombie.setName("Zaraza");
console.log(zombie.getName());
zombie.scream();
zombie.spottedPlayer();
//end testing zombie
//.. and same with any other type we can come up with
console.log("");