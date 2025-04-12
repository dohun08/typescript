// 언노운타입
function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hello";

`   //모든 타입가능`
}
type Person = {
    name : string,
    age : number

}
let person = {} as Person;
person.name = "aaa"
person.age = 1

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string

let num4 = 10 as const;

let cat = {
    name : 'aaa',
    color:'blue'
} as const



type Post = {
    title : string,
    auther? : string
}

let post : Post = {
    title : 'ddd',
    auther : 'ddddd'
}

const len : number = post.auther!.length

function fun1(value : string | number | null | Date | Person){
    if(typeof value === "string"){
        console.log(value.toUpperCase())
    }else if(typeof value === "number"){
        console.log(value.toFixed())
    }else if(value instanceof Date){
        console.log(value.getTime())
    }else if(value && 'age' in value){
        console.log(value.name)
    }
}

type Admin = {
    tag : 'ADMIN',
    name : string,
    kickCount : number
}

type Member = {
    tag : 'MEMBER',
    name : string,
    point : number
}

type Guest = {
    tag : "GUEST",
    name : string,
    visitCount : number
}

type User = Admin | Member | Guest
function login(user : User){
    // if('kickCount' in user){
    //     console.log(`${user.name} 현재까지 ${user.kickCount}`)
    // }
    // else if('point' in user){
    //     console.log(`${user.name} ${user.point}`)
    // }else{
    //     console.log(`${user.name} ${user.visitCount}`)
    // }
    if(user.tag === "ADMIN"){
        console.log(`${user.name} 현재까지 ${user.kickCount}`)
    }
    else if(user.tag === "MEMBER"){
        console.log(`${user.name} ${user.point}`)
    }else{
        console.log(`${user.name} ${user.visitCount}`)
    }
}


type Loading = {
    state : "LOADING",
}
type Success = {
    state : "SUCCESS",
    response : {
        date : string
    }
}
type Failed = {
    state : "ERROR",
    error : {
        massage : string
    }
}

type Response = Loading | Success | Failed

function fun2(res : Response) {
    switch(res.state){
        case 'LOADING' :
            console.log('로딩중입니다');
            break
        case 'SUCCESS' :
            console.log('성공했습니다', res.response);
            break
        case 'ERROR' :
            console.log("실패했습니다", res.error);
    }
}