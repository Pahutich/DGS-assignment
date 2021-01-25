//builder pattern is good to use when you have a really complex structure of the object you want to create and you want to have more
//freedom while parsing values to a constructor in terms having ability not to parse them at all in some occasions or to divide responsibilities
var Katana = /** @class */ (function () {
    function Katana(name) {
        this._name = name;
    }
    return Katana;
}());
var KatanaBuilder = /** @class */ (function () {
    function KatanaBuilder(name) {
        this.katana = new Katana(name);
    }
    KatanaBuilder.prototype.setManufacturer = function (manufacturer) {
        this.katana._manufacturer = manufacturer;
        return this;
    };
    KatanaBuilder.prototype.setOrigin = function (origin) {
        this.katana._origin = origin;
        return this;
    };
    KatanaBuilder.prototype.setBlade = function (blade) {
        this.katana._blade = blade;
        return this;
    };
    KatanaBuilder.prototype.build = function () {
        return this.katana;
    };
    return KatanaBuilder;
}());
console.log("Builder pattern demonstration");
var katanaBuilder = new KatanaBuilder("Wraith").setBlade("iron blade");
console.log(katanaBuilder);
console.log("");
