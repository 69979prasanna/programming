import React, { useState } from 'react';
export default function TextFrom(props) {
     const [text, setText] = useState('');
  const handleupclick = ()=>{
    console.log("clicked")
    let newtext = text
    if(newtext ===""){
      props.showalert("Please enter the text first to convert to uppercase.","warning")
    }
    else{
      let newtext = text.toUpperCase()
      setText(newtext)
      props.showalert("Text converted to uppercase.","success")
    }
  }
  const handleonchange = (event)=>{
    console.log("on change")
    setText(event.target.value)
} 
const handlelowclick = ()=>{
  let newtext = text
  if(newtext===""){
    props.showalert("Please enter the text first to convert to lowercase.","warning")
  }
  else{
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showalert("Text converted to lowercase.","success")
  }
}
const handleshow = ()=>{
   let newtext = text
  if(newtext===""){
    props.showalert("Please enter the text first to clear it.","warning")
  }
  else{
    let newtext = ''
    setText(newtext)
    props.showalert("Text has been cleared.", "success")
  }
  }
  return (
    <div>
      <div className="mb-3">
      <label htmlFor="mybox mb-3" className='form-label mx-5'>Example textarea</label>
      <div className="h">
      <textarea name="hello" id="mybox" rows="3" value={text} onChange={handleonchange}></textarea>
      </div>
    </div>
    <div className="bt">
    <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert to lowercase</button>
     <button className="btn btn-primary " onClick={handleshow}>Clear text</button>  
    </div>
    </div>
  )
}
