import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color,setColor] = useState('');
  const [error,setError] = useState(false);
  const [list,setList] = useState(new Values('#f15025').all(10));



  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('hello')
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(colors)
    }catch (e) {
      setError(true);
      console.log(e)
    }



  }

  return <>
    <section className={"container"}>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input className={`${error ? 'error' : ''}`}
               type="text"
               name="color"
               id="color"
               value={color}
               onChange={(e)=> setColor(e.target.value)}
               placeholder={"#f15025"}
        />
        <button className={"btn"} type={"submit"}>submit</button>
      </form>
    </section>
    <section className={"colors"}>
      {list.map((color,index)=> {
        console.log(color)
       return  <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
      })}
    </section>
  </>
}

export default App
