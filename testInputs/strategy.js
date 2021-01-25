"use strict";
exports.__esModule = true;
var PakBlock = /** @class */ (function () {
    function PakBlock() {
    }
    PakBlock.prototype.doBlock = function () {
        return "performing pak-sao block";
    };
    return PakBlock;
}());
exports.PakBlock = PakBlock;
var TanBlock = /** @class */ (function () {
    function TanBlock() {
    }
    TanBlock.prototype.doBlock = function () {
        return "performing tan-sao block";
    };
    return TanBlock;
}());
exports.TanBlock = TanBlock;
var Fighter = /** @class */ (function () {
    function Fighter(cblock, name) {
        this._block = cblock;
        this._name = name;
    }
    Fighter.prototype.performBlock = function () {
        if (this._block != null)
            this._block.doBlock();
    };
    return Fighter;
}());
exports.Fighter = Fighter;
var f1 = new Fighter(new PakBlock(), "Ip Man"); //creating an actual figher
var f2 = new Fighter(new TanBlock(), "Cheng Tin Chi"); //creating another actual figher
console.log("Strategy pattern demonstration");
console.log("The fighter " + f1._name + " " + f1._block.doBlock()); //The fighter Ip Man performing pak-sao block
console.log("The fighter " + f2._name + " " + f2._block.doBlock()); //The fighter Cheng Tin Chi performing tan-sao block
console.log("");
