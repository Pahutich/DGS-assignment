//adapter is quite usefull when we deal with legacy code or some external services which program initaially does not know how to use
//I decided to show benefits of using this pattern on example with a person who has corrupted vision, he can read big letters but can not
//read small ones. Glasses will be our adapter which will fix the issue
class LargeText {//the text patient actually can see
    public spitBigText(): string {
        return 'YOU CAN EASILY SEE WHAT IS WRITTEN HERE';
    }
}

/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
class SmallText {//the text patient can not see
    public spitSmallText(): string {
        return 'however, this is too much for my eyes';
    }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Glasses extends LargeText {//make small text visible again
    private smallText: SmallText;

    constructor(smallText: SmallText) {
        super();
        this.smallText = smallText;
    }

    public spitBigText(): string {//method converts all letters to uppercase making them readable for the patient
        const result = this.smallText.spitSmallText().toUpperCase();
        return `New text with glasses: ${result}`;
    }
}

/**
 * The client code supports all classes that follow the Target interface.
 */
function testingVision(target: LargeText) {// method to test what we have got so far
    console.log(target.spitBigText());
}
console.log("Testing adapter pattern");
console.log('I could initially see only the text of this size');
const target = new LargeText();
testingVision(target);

console.log('');

const adaptee = new SmallText();
console.log('This text I can not see properly without glasses');
console.log(`${adaptee.spitSmallText()}`);

console.log('');

console.log('Well, that is much better!');
const adapter = new Glasses(adaptee);
testingVision(adapter);

console.log("");