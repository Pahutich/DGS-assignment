//Facade helps us to read, use and understand logic of actions the app has to do without touching a lot of classes we do not
//need to know about
var Facade = /** @class */ (function () {
    function Facade(_a) {
        var _b = _a === void 0 ? {} : _a, subsystem1 = _b.subsystem1, subsystem2 = _b.subsystem2;
        // as subsystems assuming we are working on a text editor/converter application 
        this.subsystem1 = subsystem1 || new Reader();
        this.subsystem2 = subsystem2 || new Writer();
    }
    Facade.prototype.operation = function () {
        var result = 'Facade initializes subsystems:\n';
        result += this.subsystem1.readTXT();
        result += this.subsystem2.writeTXT();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subsystem1.readPDF();
        result += this.subsystem2.writeWord();
        return result;
    };
    return Facade;
}());
var Reader = /** @class */ (function () {
    function Reader() {
    }
    Reader.prototype.readTXT = function () {
        return 'Reading txt...\n';
    };
    Reader.prototype.readPDF = function () {
        return 'Reading pdf...\n';
    };
    return Reader;
}());
var Writer = /** @class */ (function () {
    function Writer() {
    }
    Writer.prototype.writeTXT = function () {
        return 'Writing to txt...\n';
    };
    Writer.prototype.writeWord = function () {
        return 'Writing to word...';
    };
    return Writer;
}());
function clientCode(facade) {
    console.log(facade.operation());
}
//actual testing
var subsystem1 = new Reader();
var subsystem2 = new Writer();
var facade = new Facade({ subsystem1: subsystem1, subsystem2: subsystem2 });
console.log("Testing facade pattern");
clientCode(facade);
console.log(" ");
