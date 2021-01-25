//singleton can be usefull when we want to make sure that we cant create/recreate more than one object of a corresponding class.
//this can be used for some simple logic, for small applications but if you want expand, singleton can stand on your way
class Bar {//suppose nan app serves a bar and there can be only one bar
    private static instance: Bar;//to have an access to our only instance of the bar

    private constructor() { }//private as we do not want to be able to have access to constructor which leads to new indtances of the class
    //which we dont want in our case

    public static getInstance(): Bar {//getting the instance
        if (!Bar.instance) {
            Bar.instance = new Bar();
        }

        return Bar.instance;
    }

    public makeAnAnnouncement(toSat:string):void {//some actual functionality
        console.log(toSat);
    }
}

function testSingleton() {//testing
    console.log("Testing Singleton Pattern");
    const s1 = Bar.getInstance();
    const s2 = Bar.getInstance();
s1.makeAnAnnouncement("every 3rd drink is free");
s2.makeAnAnnouncement("we are out of tequila");
    if (s1 === s2) {//check if two variables are of same type
        console.log("works fine");
    } else {
        console.log("something went wrong");
    }
    console.log("");
}

testSingleton();