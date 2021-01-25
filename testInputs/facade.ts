//Facade helps us to read, use and understand logic of actions the app has to do without touching a lot of classes we do not
//need to know about
class Facade {//the thing that makes our life easier
    protected subsystem1: Reader;

    protected subsystem2: Writer;

    constructor({ subsystem1, subsystem2 }: { subsystem1?: Reader; subsystem2?: Writer; } = {}) {//in this case we have readers and writers
        // as subsystems assuming we are working on a text editor/converter application 
        this.subsystem1 = subsystem1 || new Reader();
        this.subsystem2 = subsystem2 || new Writer();
    }

    public operation(): string {//wraps up all our nasty looking functionality into better usable format
        let result = 'Facade initializes subsystems:\n';
        result += this.subsystem1.readTXT();
        result += this.subsystem2.writeTXT();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subsystem1.readPDF();
        result += this.subsystem2.writeWord();

        return result;
    }
}


class Reader {
    public readTXT(): string {//actual functionality
        return 'Reading txt...\n';
    }


    public readPDF(): string {//actual functionality
        return 'Reading pdf...\n';
    }
}


class Writer {
    public writeTXT(): string {//actual functionality
        return 'Writing to txt...\n';
    }


    public writeWord(): string {//actual functionality
        return 'Writing to word...';
    }
}

function clientCode(facade: Facade) {//a simple and consice method to test the pattern

    console.log(facade.operation());

}

//actual testing
const subsystem1 = new Reader();
const subsystem2 = new Writer();
const facade = new Facade({ subsystem1, subsystem2 });
console.log("Testing facade pattern");
clientCode(facade);
console.log(" ");