//observer pattern can be usefull for proper and in-time reaction of some actions happened, like in weather measurers or GUI components.
//Here I will demonstrate the bidding app example
var ValuableItem = /** @class */ (function () {
    function ValuableItem() {
        this.observers = []; //list of subscribers
    }
    ValuableItem.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('ValuableItem: Observer has been attached already.');
        }
        console.log('ValuableItem: Attached an observer.');
        this.observers.push(observer);
    };
    ValuableItem.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('ValuableItem: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('ValuableItem: Detached an observer.');
    };
    ValuableItem.prototype.notify = function () {
        console.log('ValuableItem: Notifying observers...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    //programming actual conditions for notifications to be fired
    ValuableItem.prototype.businessRelatedLogic = function () {
        console.log('\My price is about to change');
        this.price = Math.floor(Math.random() * (10 + 1));
        console.log("ValuableItem: My price has just changed to: " + this.price);
        this.notify();
    };
    return ValuableItem;
}());
//concrete customers with different behavioral patterns concerning pricce change
var CustomerA = /** @class */ (function () {
    function CustomerA() {
    }
    CustomerA.prototype.update = function (subject) {
        if (subject instanceof ValuableItem && subject.price < 3) {
            console.log('CustomerA: Reacted to the event.');
        }
    };
    return CustomerA;
}());
var CustomerB = /** @class */ (function () {
    function CustomerB() {
    }
    CustomerB.prototype.update = function (subject) {
        if (subject instanceof ValuableItem && (subject.price === 0 || subject.price >= 2)) {
            console.log('Customer: Reacted to the event.');
        }
    };
    return CustomerB;
}());
//testing
console.log("testing an observer pattern");
var subject = new ValuableItem();
var observer1 = new CustomerA();
subject.attach(observer1);
var observer2 = new CustomerB();
subject.attach(observer2);
subject.businessRelatedLogic();
subject.businessRelatedLogic();
subject.detach(observer2);
subject.businessRelatedLogic();
console.log("");
