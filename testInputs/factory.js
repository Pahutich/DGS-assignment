//it would be nice idea to use factory command pattern when we do not know at some point which enemies (in our case we are working with 
//enemies), so we do not specify the name of the class of an object we want to create. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EnemyFactory = /** @class */ (function () {
    function EnemyFactory() {
    }
    // for example.
    EnemyFactory.prototype.createEnemy = function (type) {
        if (type == EnemyType.Skeleton) {
            return new Skeleton();
        }
        else if (type == EnemyType.Spider) {
            return new Spider();
        }
        else if (type == EnemyType.Zombie) {
            return new Zombie();
        }
        else
            return null;
    };
    return EnemyFactory;
}());
var EnemyType;
(function (EnemyType) {
    EnemyType["Skeleton"] = "Skeleton";
    EnemyType["Spider"] = "Spider";
    EnemyType["Zombie"] = "Zombie";
})(EnemyType || (EnemyType = {}));
var Enemy = /** @class */ (function () {
    function Enemy() {
    }
    Enemy.prototype.getName = function () {
        return this._name;
    };
    Enemy.prototype.getHealth = function () {
        return this._health;
    };
    Enemy.prototype.setHealth = function (newHealth) { this._health = newHealth; };
    Enemy.prototype.setName = function (newName) { this._name = newName; };
    Enemy.prototype.scream = function () {
        console.log(this._scream);
    };
    Enemy.prototype.spottedPlayer = function () {
        console.log(this.getName() + " has spotted player");
    };
    return Enemy;
}());
var Skeleton = /** @class */ (function (_super) {
    __extends(Skeleton, _super);
    function Skeleton() {
        var _this = _super.call(this) || this;
        _this._scream = "<nasty skeleton sounds>";
        _this.setHealth(20);
        return _this;
    }
    return Skeleton;
}(Enemy));
var Spider = /** @class */ (function (_super) {
    __extends(Spider, _super);
    function Spider() {
        var _this = _super.call(this) || this;
        _this._scream = "<nasty spider sounds>";
        _this.setHealth(30);
        return _this;
    }
    return Spider;
}(Enemy));
var Zombie = /** @class */ (function (_super) {
    __extends(Zombie, _super);
    function Zombie() {
        var _this = _super.call(this) || this;
        _this._scream = "<nasty zombie sounds>";
        _this.setHealth(40);
        return _this;
    }
    return Zombie;
}(Enemy));
console.log("Factory Method pattern demonstration");
var enemyFactory = new EnemyFactory(); //creating a factory, can be analogy of enemy spawner
//testing spider
var spider;
spider = enemyFactory.createEnemy(EnemyType.Spider);
spider.setName("Spidy");
console.log(spider.getName());
spider.scream();
spider.spottedPlayer();
//end testing spider
//testing zombie
var zombie;
zombie = enemyFactory.createEnemy(EnemyType.Zombie);
zombie.setName("Zaraza");
console.log(zombie.getName());
zombie.scream();
zombie.spottedPlayer();
//end testing zombie
//.. and same with any other type we can come up with
