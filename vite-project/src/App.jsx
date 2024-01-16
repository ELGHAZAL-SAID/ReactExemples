import './App.css'
import React, {useState} from 'react';
import FormMemo from './comps/form';



const App = () => {

  const [text, setText] = useState('')
  const handleChange = (e)=>{
    setText(e.target.value);}


  return (
    <div>
      <h1>My App</h1>
      <input type = "text" onChange={handleChange} value = {text}></input>
      <FormMemo />
    </div>
  );
};

export default App;
