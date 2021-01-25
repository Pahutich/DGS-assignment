 //using strategy pattern is a really nice idea when we want extend functionality of our code without rewriting it, so this class
 export interface IBlock {//the abstract functionality (blocking movement) of our Fighters that they are going to perform
    doBlock():string;
    }

    export class PakBlock implements IBlock{//the concrete blocking movement
        doBlock(): string {
            return "performing pak-sao block";
        }
    
    }

     export class TanBlock implements IBlock{//the concrete blocking movement
        doBlock(): string {
            return "performing tan-sao block";
        }
    
    }

    export class Fighter{//the actual figher who takes the IBlock value to perform a specific block and a name 
        _block: IBlock ;
        _name:string;
     
         constructor(cblock: IBlock, name:string) {
         this._block = cblock;
         this._name = name;
       }
        performBlock():void{//making sure that blocking can be done only when it is not null
            if(this._block != null)
        this._block.doBlock();
     }
     }
     let f1 = new Fighter(new PakBlock(), "Ip Man");//creating an actual figher
     let f2 = new Fighter(new TanBlock(), "Cheng Tin Chi");//creating another actual figher
     console.log("Strategy pattern demonstration");
     console.log("The fighter " + f1._name + " " + f1._block.doBlock());//The fighter Ip Man performing pak-sao block
     console.log("The fighter " + f2._name + " " + f2._block.doBlock());//The fighter Cheng Tin Chi performing tan-sao block
     console.log("");