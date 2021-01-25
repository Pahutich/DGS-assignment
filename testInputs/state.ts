//state pattern allows an object to change the behavior when its internal state changes. This pattern is also helpfull when it comes to
//getting rid of massive switch case blocks. Here I will use threads as an example of entities of which we want to keep track of their state
//and change the work they are doing based on that
class Thread {//our object of interest
    private state!: State;//reference to state

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State): void {//changes/sets the state
        console.log(`Thread: Transition to ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    //now thread delegates part of its behavior to the current State object
    public request1(): void {
        this.state.handle1();
    }

    public request2(): void {
        this.state.handle2();
    }
}

/**
 * The base State class declares methods that all Concrete State should
 * implement and also provides a backreference to the Context object, associated
 * with the State. This backreference can be used by States to transition the
 * Context to another State.
 */
abstract class State {
    protected context!: Thread;//reference to thread

    public setContext(context: Thread) {
        this.context = context;
    }

    public abstract handle1(): void;

    public abstract handle2(): void;
}

//concrete states with implementation
class CReadyState extends State {
    public handle1(): void {
        console.log('CReadyState handles request1.');
        console.log('CReadyState wants to change the state of the context.');
        this.context.transitionTo(new CBlockedState());
    }

    public handle2(): void {
        console.log('CReadyState handles request2.');
    }
}

class CBlockedState extends State {
    public handle1(): void {
        console.log('CBlockedState handles request1.');
    }

    public handle2(): void {
        console.log('CBlockedState handles request2.');
        console.log('CBlockedState wants to change the state of the context.');
        this.context.transitionTo(new CReadyState());
    }
}

//testing code
console.log("testing state pattern")
const context = new Thread(new CReadyState());
context.request1();
context.request2();