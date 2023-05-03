import React from 'react'

function MapObj() {
    const obj = new Map([['name','umar'],['age',10],[10,'my age']])
    console.log(obj);
    console.log(obj.get('name'));
     console.log(obj.get('age'));
     console.log(obj.get(10));

  return (
    <div>MapObj</div>
  )
}

export default MapObj