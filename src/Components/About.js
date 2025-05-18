import React, { useState } from "react";

export default function About(props) {

  let myStyle =  {
    color : props.mode==='dark'?'white':'#2c2c2c',
    backgroundColor :props.mode==='dark'?'#2c2c2c':'white'
  }
 return (
    <div className="container" style={myStyle}>
      <h1 className="my-4" style={myStyle}>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${props.mode === 'dark' ? 'custom-dark' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong> Analyze your text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
               SnipText gives you a way to analyze your text quiclky and efficiently. Be it word coud, Character count
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${props.mode === 'dark' ? 'custom-dark' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              SnipText is a free characters counter tool that provides instant characters count & word count statitics for a given texts. SnipText reports the number of word and character. Thus it is suitable for writing with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${props.mode === 'dark' ? 'custom-dark' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong>Brower Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blogs, books, exel document, pdf document, essays etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
       
      </div>
    </div>
  );
}
