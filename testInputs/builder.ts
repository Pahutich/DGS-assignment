//builder pattern is good to use when you have a really complex structure of the object you want to create and you want to have more
//freedom while parsing values to a constructor in terms having ability not to parse them at all in some occasions or to divide responsibilities
class Katana{//our product itself which requires only name to be present, rest is optional
    [x: string]: any;
_name:string;
    _manufacturer: any;
     _origin: any;
    _blade: any;
constructor(name:string){
    this._name = name;
}
}

class KatanaBuilder{//an actual builder
    katana: Katana;
    constructor(name:string){
        this.katana = new Katana(name);
    }
    setManufacturer(manufacturer:string){//sets the field for the certain katana and returns itself back for ability of further components addition
        this.katana._manufacturer = manufacturer;
        return this;
    }
    setOrigin(origin:string){//similar functionality as for setManufacturer()
        this.katana._origin = origin;
        return this;
    }
    setBlade(blade:string){//similar functionality as for setManufacturer()
        this.katana._blade = blade;
        return this;
    }
    build():Katana{//allows to display infom about katana better
        return this.katana;
    }
}
console.log("Builder pattern demonstration");
let katanaBuilder = new KatanaBuilder("Wraith").setBlade("iron blade").build();
console.log(katanaBuilder);
console.log("");
