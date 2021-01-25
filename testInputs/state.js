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
//state pattern allows an object to change the behavior when its internal state changes. This pattern is also helpfull when it comes to
//getting rid of massive switch case blocks. Here I will use threads as an example of entities of which we want to keep track of their state
//and change the work they are doing based on that
var Thread = /** @class */ (function () {
    function Thread(state) {
        this.transitionTo(state);
    }
    Thread.prototype.transitionTo = function (state) {
        console.log("Thread: Transition to " + state.constructor.name + ".");
        this.state = state;
        this.state.setContext(this);
    };
    //now thread delegates part of its behavior to the current State object
    Thread.prototype.request1 = function () {
        this.state.handle1();
    };
    Thread.prototype.request2 = function () {
        this.state.handle2();
    };
    return Thread;
}());
/**
 * The base State class declares methods that all Concrete State should
 * implement and also provides a backreference to the Context object, associated
 * with the State. This backreference can be used by States to transition the
 * Context to another State.
 */
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setContext = function (context) {
        this.context = context;
    };
    return State;
}());
//concrete states with implementation
var CReadyState = /** @class */ (function (_super) {
    __extends(CReadyState, _super);
    function CReadyState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CReadyState.prototype.handle1 = function () {
        console.log('CReadyState handles request1.');
        console.log('CReadyState wants to change the state of the context.');
        this.context.transitionTo(new CBlockedState());
    };
    CReadyState.prototype.handle2 = function () {
        console.log('CReadyState handles request2.');
    };
    return CReadyState;
}(State));
var CBlockedState = /** @class */ (function (_super) {
    __extends(CBlockedState, _super);
    function CBlockedState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CBlockedState.prototype.handle1 = function () {
        console.log('CBlockedState handles request1.');
    };
    CBlockedState.prototype.handle2 = function () {
        console.log('CBlockedState handles request2.');
        console.log('CBlockedState wants to change the state of the context.');
        this.context.transitionTo(new CReadyState());
    };
    return CBlockedState;
}(State));
//testing code
console.log("testing state pattern");
var context = new Thread(new CReadyState());
context.request1();
context.request2();
