function lengthget <T extends {length : number}> (data : T){
    return data.length
}

const get = lengthget("1111")
const get2 = lengthget(['1',2,3,4,])
// const get3 = lengthget(1) error


const arr = [1,2,3]
const arr2 = arr.map(item=>item*2)

function map<T, U>(list : T[], callback : (item:T)=>U){
    let result = [];
    for(let i=0; i<list.length; i++){
        result.push(callback(list[i]))
    }
    return result;
}

map(arr, (it)=>it*2)

function forEach<T, Y>(arr : T[], callback : (item : T)=>Y) : void{}

interface Map<V>{
    [key : string] : V
}
let stringMap : Map<string> = {
    key : 'ddd'
}
let boolMap : Map<boolean> = {
    ddd : true
}


const promise = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20);
    }, 3000);
});

promise.then((response)=>{
    console.log(response * 10)
})

const promise2 = new Promise<number>((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(20);
        reject("~~때문에 실패");
    }, 3000);
});

promise2.catch((error)=>{
    if(typeof error === "string"){
        console.error(error)
    }
})

interface Post{
    id : number
    title : string,
    content : string
}

function fetchRequest() : Promise<Post>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id : 1,
                title : 'ddd',
                content : 'ddddd'
            })
        }, 3000);
    })
}

const response = fetchRequest();

response.then((res)=>{
    res.id;
})