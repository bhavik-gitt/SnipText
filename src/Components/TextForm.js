import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    };

    
    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared", "success");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra Spaces Removed", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // Word count fix
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    // Styles based on mode
    const textColor = props.mode === 'dark' ? 'white' : 'black';
    const bgColor = props.mode === 'dark' ? '#3c3c3c' : 'white';

    return (
        <>
            <div className="mb-3" style={{ color: textColor }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                    style={{ backgroundColor: bgColor, color: textColor }}
                ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>

            <div className="container my-3" style={{ color: textColor }}>
                <h2>Your Text Summary</h2>
                <p>{wordCount} words, {text.length} characters</p>
                <p>{0.008 * wordCount} Minutes to Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
