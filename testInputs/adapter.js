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
//adapter is quite usefull when we deal with legacy code or some external services which program initaially does not know how to use
//I decided to show benefits of using this pattern on example with a person who has corrupted vision, he can read big letters but can not
//read small ones. Glasses will be our adapter which will fix the issue
var LargeText = /** @class */ (function () {
    function LargeText() {
    }
    LargeText.prototype.spitBigText = function () {
        return 'YOU CAN EASILY SEE WHAT IS WRITTEN HERE';
    };
    return LargeText;
}());
/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
var SmallText = /** @class */ (function () {
    function SmallText() {
    }
    SmallText.prototype.spitSmallText = function () {
        return 'however, this is too much for my eyes';
    };
    return SmallText;
}());
/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
var Glasses = /** @class */ (function (_super) {
    __extends(Glasses, _super);
    function Glasses(smallText) {
        var _this = _super.call(this) || this;
        _this.smallText = smallText;
        return _this;
    }
    Glasses.prototype.spitBigText = function () {
        var result = this.smallText.spitSmallText().toUpperCase();
        return "New text with glasses: " + result;
    };
    return Glasses;
}(LargeText));
/**
 * The client code supports all classes that follow the Target interface.
 */
function testingVision(target) {
    console.log(target.spitBigText());
}
console.log("Testing adapter pattern");
console.log('I could initially see only the text of this size');
var target = new LargeText();
testingVision(target);
console.log('');
var adaptee = new SmallText();
console.log('This text I can not see properly without glasses');
console.log("" + adaptee.spitSmallText());
console.log('');
console.log('Well, that is much better!');
var adapter = new Glasses(adaptee);
testingVision(adapter);
console.log("");
