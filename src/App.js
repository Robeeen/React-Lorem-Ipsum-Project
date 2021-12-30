import React, { useState } from 'react';
import data from './data';
function App() {
  //how many paragraph we want to generate, initially the value will be 0
  const [count, setCount] = useState(0);
  //text array default value will be an empty array
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
    setText(data)
  }
  
  return (
  <section className='section-center'>
    <h3>Get some Lorem Ipsum Text</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
    <label htmlFor='amount'>
      Paragraph:
    </label>
    <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}></input>
    
    <button type='submit' className='btn'>Generate</button>
    </form>
    <article className='lorem-text'>
      {text}
    </article>
  </section>
    )
}

export default App;
