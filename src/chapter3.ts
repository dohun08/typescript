function fn1(a:number, b:number){
    return a+b
}

function introduce(name = "허정화", age? : number){
    console.log(name)
    if(typeof age === "number"){
        console.log(age+10)
    }
}

introduce('ddd');

function sum(...rest:number[]){
    let sum = 0;
    rest.forEach(item=>{
        sum+=item
    })
    console.log(sum)
}
sum(1,2,3,3,4,5)

type Operation = (a : number, b : number) => number
const add:Operation = (a,b)=> a+b;
const sub: Operation = (a, b)=>a-b;
const mult :Operation= (a, b)=>a*b;

type Operation2= {
    (a : number, b:number):number
}
const add2:Operation2 = (a,b)=> a+b;
const sub2: Operation2 = (a, b)=>a-b;
const mult2 :Operation2= (a, b)=>a*b;

/**
 * 함수 호환성
 */

type A = (a:number )=> number;
type B = (a:number) => 10;

let a : A = (a)=>a;
let b : B = (a)=>10;

a= b;
// b = a; error

// 매개변수가 같을때
type C = (a:number) => void;
type D = (a:10) => void;
let c : C = (a)=>{};
let d : D = (a)=>{};

// c = d;
d = c;

// 매개변수가 다를때 error

type E = (a:number, b:number) =>  number;
type F = (a:number) => number;

let e : E =(a, b)=>a+b;
let f : F =(a)=>a;
e = f
// f = e error

/**
 * 함수 오버로딩
 */

function funct1(a:number):void;
function funct1(a: number, b : number, c: number): void;

function funct1(a?:number, b?:number, c?:number){
    console.log(a+b+c);
}


funct1(1);
// funct1(1,2) error
funct1(1,2,3);

/**
 * 사용자정의 타입가드
 */

type Dog = {
    name : string,
    isD : boolean
}
type Cat = {
    name : string,
    isS : boolean
}
type Animal = Dog | Cat

const isDog = (animal : Animal): animal is Dog=>{
    return (animal as Dog).isD !== undefined;
}
const isCat = (animal : Animal) : animal is Cat=>{
    return (animal as Cat).isS !== undefined;
}
function warring(animal : Animal){
    if(isDog(animal)){
        console.log(animal.isD);
    }else if(isCat(animal)){
        console.log(animal.isS);
    }
}