import React, { useState } from "react";

export default function TextForm(props) {
  // toUpperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  // toLowerCase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  // Clear Text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  //  Copy Text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  //  Text Bold
  const handleTextBold = () => {
    setIsBold(!isBold);
  };

  //  Text Italic
  const handleTextItalic = () => {
    setIsItalic(!isItalic);
  };

  // Text Strikethrough
  const handleTextStrikethrough = () => {
    setIsStrikethrough(!isStrikethrough);
  };

  // Text Underline
  const handleTextUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  // Remove Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  // text = "new text"; //  Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: `${isUnderline ? 'underline' : ''} ${isStrikethrough ? 'line-through' : ''}`.trim()
              
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleTextBold}
        >
          {isBold ? "Convert to Normal" : "Convert to Bold"}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleTextItalic}
        >
          {isItalic ? "Convert to Normal" : "Convert to Italic"}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleTextStrikethrough}
        >
          {isStrikethrough ? "Convert to Normal" : "Convert to Strikethrough"}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleTextUnderline}
        >
          {isUnderline ? "Convert to Normal" : "Convert to Underline"}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
