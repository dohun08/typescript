let num1 : number = 123;
let num2 : number = null;

let arr1 : string[] = ['arr', '2']
let arr2 : number[][]= [
    [1, 2],
    [1, 3, 4],
    [1]
]

let tup1 : [number, number] = [1,2];
tup1.push(3)
tup1.pop()
tup1.pop()
tup1.pop()

let tup2 : [string, number][] = [
    ['ddd', 1],
    ['ddd', 1],
    ['ddd', 1],
    ['ddd', 1],
]



let user : {
    id? : number,
    name : string
} = {
    id : 1,
    name : 'ddd'
}

user.id;

user = {
    name : 'dddddd'
}

let config : {
    readonly key : string
} = {
    key : 'aaaa'
}

// config.key = 'dddd';


type User =  {
    id : number,
    name : string,
    birth : string,
    location : string
}

let user3 : User= {
    id : 1,
    name : 'ddd',
    birth : 'ddd',
    location: ' aaaa'
}

type Contry = {
    [key : string] : string
}
// 인덱스 시그니처
let contryes : Contry = {
    korea : 'ko',
    china : 'ch',
    japan : 'ja'
}

//enum
enum Role{
    ADMIN = 1,
    USER = 2,
    GUEST = 3

}
let user4 = {
    name : 'ddd',
    age : 1,
    role : Role.ADMIN
}