//singleton can be usefull when we want to make sure that we cant create/recreate more than one object of a corresponding class.
//this can be used for some simple logic, for small applications but if you want expand, singleton can stand on your way
var Bar = /** @class */ (function () {
    function Bar() {
    } //private as we do not want to be able to have access to constructor which leads to new indtances of the class
    //which we dont want in our case
    Bar.getInstance = function () {
        if (!Bar.instance) {
            Bar.instance = new Bar();
        }
        return Bar.instance;
    };
    Bar.prototype.makeAnAnnouncement = function (toSat) {
        console.log(toSat);
    };
    return Bar;
}());
function testSingleton() {
    console.log("Testing Singleton Pattern");
    var s1 = Bar.getInstance();
    var s2 = Bar.getInstance();
    s1.makeAnAnnouncement("every 3rd drink is free");
    s2.makeAnAnnouncement("we are out of tequila");
    if (s1 === s2) { //check if two variables are of same type
        console.log("works fine");
    }
    else {
        console.log("something went wrong");
    }
    console.log("");
}
testSingleton();
