import React, {useState} from "react";
import {loremIpsum} from "lorem-ipsum";

export default function Textforms(props) {
  const handleUpClick = () => {
    // console.log('You have clicked handleUpClick')
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert('Converted to Upper Case', 'success')
  }

  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert('Converted to Lower Case', 'success')
  }

  const clear = (event) => {
    setText("")
    props.showAlert('Text Box Cleared', 'warning')
  }

  const loremGenerator = () => {
    setText(loremIpsum({
      count:5,
      format:'plain',
      paragraphLowerBound: 4,
      units: 'paragraphs'
    }));
    props.showAlert('Random Paragraph Generated', 'success')
  }

  const handleOnChange = (event) => {
    // console.log('On Change');
    setText(event.target.value)
  }

  const [text, setText] = useState('')
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'#212529'}}
          rows="8"
          placeholder="Enter Text Here...!!!"
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={clear}>Clear</button>
        <button className="btn btn-primary m-2" onClick={loremGenerator}>Generate Lorem Ipsum</button>
      </div>
      <div className="container my-5">
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words & {text.length} Characters</p>
        <p>{(0.008 * text.split(' ').length).toFixed(1)} Minutes Read</p>
      </div>
    </div>
  );
}