import React, { useState, useRef, useEffect } from "react";
import SettingsBar from "./SettingsBar";
import ContentEditable from "react-contenteditable";
// import sanitizeHTML from "sanitize-html";
import { useDispatch, useSelector } from "react-redux";
import { updateNotes } from "../App/reducers/notesSlice";
import "../Style/InsertNote.css";

export default function InsertNote(props) {
  const [title, setTitle] = useState(
    props.title ? props.title : "Untitled Note"
  );
  const inputRef = useRef();
  const dispatch = useDispatch();

  // const notes = useSelector((state) => state.notes);

  const [content, setContent] = useState("");

  // const [sanitizeConf, setSanitizeConf] = useState({
  //   allowedTags: [
  //     "b",
  //     "i",
  //     "em",
  //     "strong",
  //     "a",
  //     "p",
  //     "span",
  //     "ol",
  //     "li",
  //     "ul",
  //     "br",
  //     "img",
  //   ],
  //   allowedAttributes: { a: ["href"] },
  // });

  const handleInput = (e) => {
    switch (e.currentTarget.id) {
      case "title":
        setTitle(e.currentTarget.value);
        dispatch(
          updateNotes({ title: e.currentTarget.value, content: content })
        );
        // console.log("content title");
        console.log(e.currentTarget.value);
        break;
      case "content":
        dispatch(
          updateNotes({ content: e.currentTarget.innerHTML, title: title })
        );
        setContent(e.currentTarget.innerHTML);
        // console.log("content");
        console.log(content);
        break;
      default:
        break;
    }
  };

  //Try to add tab space
  const handleTabPress = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      e.currentTarget.focus();
      dispatch(updateNotes({ title: title, content: content }));
    }
  };

  const handleBoldClick = (e) => {
    e.preventDefault();
    let cursorStart = inputRef.current;
    let cursorEnd = inputRef.selectionEnd;
    console.log(cursorStart, cursorEnd);
    // inputRef.
    // const selectedText = this.state.inputRef.substring(cursorStart, cursorEnd);
    const selectedText = content.substring(cursorStart, cursorEnd);
    const prevText = content.substring(0, cursorStart);
    const nextText = content.substring(cursorEnd, content.length);
    console.log(content, "content");
    const newContent = `<b>${selectedText}</b>`;
    setContent(prevText + newContent + nextText);
    dispatch(
      updateNotes({
        title: title,
        content: `${prevText}${newContent}${nextText}`,
      })
    );
    console.log(selectedText);
  };

  // const sanitizeInput = () => {
  //   setContent(sanitizeHTML(content, sanitizeConf));
  //   // console.log(content);
  // };

  // const handleBlur = () => {
  //   console.log("Blur event - Content saved", content);
  // };

  // const handleFocusOff = () => {
  //   dispatch(updateNotes(content));
  // };

  // ERROR - cannot use react hooks inside a callback
  // useEffect(() => {
  //   useSelector((state) => {
  //     console.log(state.notes);
  //   });
  // }, [useSelector]);

  return (
    <>
      <div className="row m-0 p-0">
        <SettingsBar handleBoldClick={handleBoldClick} isDark={props.isDark} />
      </div>
      <div className="row m-0 p-0">
        <form>
          <div className="row m-0 p-0 mt-5">
            <input
              type="text"
              className={
                "bg-transparent fs-3 " +
                (props.isDark
                  ? "text-light title-input"
                  : "text-dark title-input-light")
              }
              placeholder="Enter Title"
              value={title}
              onChange={handleInput}
              id="title"
            />
          </div>
          <div className="row m-0 p-0 mt-5 mh-100">
            <ContentEditable
              className={"border border-1 rounded editable " + (props.isDark ? "border-light text-light" : "text-dark border-dark")}
              ref={inputRef}
              onChange={handleInput}
              html={content}
              id="content"
              suppressContentEditableWarning={true}
              onKeyDown={handleTabPress}
            />
          </div>
        </form>
      </div>
    </>
  );
}
