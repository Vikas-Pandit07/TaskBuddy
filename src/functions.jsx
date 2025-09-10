// import React from 'react'
import React, { useState } from 'react';


export default function Functions() {
  let[charCount, setCount] = useState(0);
  return (
    <>
        <h1>counter: {charCount}</h1>
        
    </>
  )
}
