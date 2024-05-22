import React, { useState } from "react";

export default function TextForm(props) {
  // toUpperCase
  const handleUpClick = () => {
    //  console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  // toLowerCase
  const handleLoClick = () => {
    //  console.log("Lowercase was clicked" + text);
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
    // console.log("On Change");
    setText(event.target.value);
  };

  //  Copy Text
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
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
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: isStrikethrough ? "line-through" : "none",
              textDecoration: isUnderline ? "underline" : "none",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-secondary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-secondary mx-1 my-1"
          onClick={handleTextBold}
        >
          {isBold ? "Convert to Normal" : "Convert to Bold"}
        </button>
        <button
          className="btn btn-secondary mx-1 my-1"
          onClick={handleTextItalic}
        >
          {isItalic ? "Convert to Normal" : "Convert to Italic"}
        </button>
        <button
          className="btn btn-secondary mx-1 my-1"
          onClick={handleTextStrikethrough}
        >
          {isStrikethrough ? "Convert to Normal" : "Convert to Strikethrough"}
        </button>
        <button
          className="btn btn-secondary mx-1 my-1"
          onClick={handleTextUnderline}
        >
          {isUnderline ? "Convert to Normal" : "Convert to Underline"}
        </button>
        <button
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
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
