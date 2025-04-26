interface Person{
    sayHi() : void;
    sayHi(a : number, b:number) : void;
}

const person: Person = {
    sayHi(a?: number, b?: number): void {
        if (typeof a === "number" && typeof b === "number") {
            console.log(`Two args: ${a}, ${b}`);
        } else {
            console.log("No args");
        }
    }
}

person.sayHi();

interface Animal{
    name : string,
    age : number
}

interface Dog extends Animal{
    isBlack : boolean
}

interface Cat{
    isScretch : boolean
}
interface DogCat extends Dog, Cat{

}
const dogCat : DogCat = {
    name : 'ddd',
    age : 1,
    isBlack: true,
    isScretch : true
}