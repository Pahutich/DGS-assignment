//observer pattern can be usefull for proper and in-time reaction of some actions happened, like in weather measurers or GUI components.
//Here I will demonstrate the bidding app example

interface IBid { //This interface will be implementable on those objects that we want to keep track of some changes in their state
    // Attach an observer to the subject.
    attach(observer: ICustomer): void;

    // Detach an observer from the subject.
    detach(observer: ICustomer): void;

    // Notify all observers about an event.
    notify(): void;
}

class ValuableItem implements IBid {//an actual valluable item which a lot of customers want to buy
    public price!: number;//price in millions for the valuable item
    private observers: ICustomer[] = [];//list of subscribers

    public attach(observer: ICustomer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('ValuableItem: Observer has been attached already.');
        }

        console.log('ValuableItem: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: ICustomer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('ValuableItem: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('ValuableItem: Detached an observer.');
    }

    public notify(): void {
        console.log('ValuableItem: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    //programming actual conditions for notifications to be fired
    public businessRelatedLogic(): void {
        console.log('\My price is about to change');
        this.price = Math.floor(Math.random() * (10 + 1));

        console.log(`ValuableItem: My price has just changed to: ${this.price}`);
        this.notify();
    }
}

interface ICustomer {//a customer who is interested in acquiring the good
    update(subject: IBid): void;
}

//concrete customers with different behavioral patterns concerning pricce change
class CustomerA implements ICustomer {
    public update(subject: IBid): void {
        if (subject instanceof ValuableItem && subject.price < 3) {
            console.log('CustomerA: Reacted to the event.');
        }
    }
}

class CustomerB implements ICustomer {
    public update(subject: IBid): void {
        if (subject instanceof ValuableItem && (subject.price === 0 || subject.price >= 2)) {
            console.log('Customer: Reacted to the event.');
        }
    }
}

//testing
console.log("testing an observer pattern");
const subject = new ValuableItem();

const observer1 = new CustomerA();
subject.attach(observer1);

const observer2 = new CustomerB();
subject.attach(observer2);

subject.businessRelatedLogic();
subject.businessRelatedLogic();

subject.detach(observer2);

subject.businessRelatedLogic();
console.log("");