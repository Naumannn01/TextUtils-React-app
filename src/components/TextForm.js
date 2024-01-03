import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");

    }
    const handleClrClick = () => {
        let newText = setText('');
        props.showAlert("Cleared","success");

    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container ' style={{ color: props.mode === 'dark' ? "white" : "black" }}>
                <h1 >{props.heading}</h1>

                <div className="mb-3">
                    <label HtmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? "grey" : "white", color: props.mode === 'light' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClrClick}>
                    Clear Text
                </button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? "white" : "black" }}>
                <h2>Text Summary</h2>
                <p>{text.split(' ').length} words {text.length} Characters</p>
                <p>{(0.008 * text.split(' ').length).toFixed(2)} Minute Read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter some text to see preview"}</p>
            </div>
        </>
    )
}
