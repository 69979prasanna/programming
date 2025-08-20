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
      if(newtext === text.toUpperCase()){
        props.showalert("The text is already in uppercase.","info")
      }
      else{
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert("Text converted to uppercase.","success")
      }
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
    if (newtext === text.toLowerCase()){
       props.showalert("The text is already in lowercase.","info")
     }
     else{
       let newtext = text.toLowerCase()
       setText(newtext)
       props.showalert("Text converted to lowercase.","success")
     }
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
  const handlecopy = ()=> {
    let txt = text
    if(txt===""){
      props.showalert("Please enter text to copy.","warning");
    }
    else{
     txt = document.getElementById("mybox")
      txt.select()
      txt.setSelectionRange(0,999)
      navigator.clipboard.writeText(txt.value)
       props.showalert("Text has been copied.", "success")
    }
  }
  const handleSpeak = () => {
  if (!text.trim()) return;
  const utterance = new SpeechSynthesisUtterance(text); 
  window.speechSynthesis.speak(utterance);
}
  return (
    <div>
      <div className="container d-flex justify-content-center flex-wrap  my-3 mb-3">
      <label htmlFor="mybox mb-3" className='form-label mb-3 mx-3 my-2'><h1>
      Enter the text to anaylze  </h1></label>
      <div className="h">
      <textarea name="hello" id="mybox" rows="3" value={text} onChange={handleonchange}></textarea>
      </div>
    </div>
    <div className="bt d-flex flex-wrap justify-content-center ">
    <button disabled={text===""} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Convert to uppercase</button>
    <button disabled={text===""} className="btn btn-primary mx-2 my-1" onClick={handlelowclick}>Convert to lowercase</button>
     <button disabled={text===""} className="btn btn-primary mx-2 my-1" onClick={handleshow}>Clear text</button>  
     <button disabled={text===""} className="btn btn-primary mx-2 my-1" onClick={handlecopy}>Copy text</button>  
     <button disabled={text===""} onClick={handleSpeak} className="btn btn-primary mx-2 my-1" ><img src="https://cdn-icons-png.flaticon.com/512/4152/4152532.png" alt='speak' style={{height:40}} /></button>  
    </div>
    <div className="container mb-3 my-4 ">
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.replace(/\s/g, '').length} characters</p>
      <p>{0.008*(text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
      <h3> Preview</h3>
      <p>{text}</p>
    </div>
    </div>
  )
}