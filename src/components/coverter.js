import React, { useState } from 'react'

export default function Coverter(props) {
  const [text, setText] = useState("Enter Text here")

  // Convert Upper case
  const handleUpClick = () => {
    let nextText = text.toUpperCase();
    setText(nextText)
  }

  // Convert Reverse
  const handleReverseClick = () => {
    let nextText = text.split('').reverse().join('');
    setText(nextText)
  }

  // Covert LowerCase
  const handleLowClick = () => {
    let nextText = text.toLowerCase();
    setText(nextText)
  }

  // Clear Whole Text
  const handleClearClick = () => {
    let nextText = "";
    setText(nextText)
  }

  // Text Copy
  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success")
  }

  // Remove Extra Space
  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/)
    setText(newText.join(" "))
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  return (
    <div className="container mt-5">
      <h1>Enter The Text to analyze below</h1>
      <textarea showAlert={props.showAlert} value={text} name="" cols="30" rows="10" onChange={handleOnChange} className='form-control' id="myBox"></textarea>

      <button className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>Covert to uppercase</button>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleLowClick}>Covert to Lowercase</button>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleClearClick}>Text Clear</button>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleReverseClick}>Text Reverse</button>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleCopy}>Text Copy</button>
      <button className="btn btn-primary mt-3 mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>

      <div className='mt-5'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
      </div>
      <div className="mt-5">
        <h1>Preview</h1>
        {text.length > 0 ? text : "Please enter someting text above box for preview"}
      </div>
    </div>
  )
}
