// In this file i'm trying to change the keys of the obj
//? Change the name ---> myName & age ---> myAge
import React from 'react'

function Problem1() {
    const myObj={
        name:'Umar',
        age:12,
    }

const transformedObject=(obj)=>{
console.log("Object Keys ", Object.keys(obj))
Object.keys(obj).forEach(object=>console.log(object))
console.log("Object Values ", Object.values(obj))
Object.keys(obj).forEach(keys=>console.log(obj[keys]))
Object.values(obj).forEach(keys=>console.log(keys))
console.log(Object.entries(obj))
console.log(Object.entries(obj)[1])
console.log(Object.entries(obj)[1][1])

for(let pair of Object.entries(obj)){
    console.log(pair)
}
}
  return (
    <div>
<button onClick={()=>transformedObject(myObj)}>Transform the object</button>
    </div>
  )
}

export default Problem1