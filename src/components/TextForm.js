import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TextForm() {
  let [text, setText] = useState("Enter text here");

  const notify = (text, status) => {
    if (status === "warning") {
      toast.warning(text);
    }
    if (status === "success") {
      toast.success(text);
    }
  };
  const clearInputText = (text) => {
    return text.replace("Enter text here", "");
  };
  const handleLowerCaseClick = () => {
    const textReplaced = clearInputText(text);
    if (!textReplaced) {
      setText("");
      notify("First enter some text", "warning");
      return;
    }
    setText(textReplaced.toLowerCase());
    toast.success("Text converted to Lower case", text);
  };

  const handleTitleCaseClick = () => {
    const textReplaced = clearInputText(text);
    if (!textReplaced) {
      setText("");
      notify("First enter some text", "warning");
      return;
    }
    setText(
      textReplaced
        .toLowerCase()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    );
    toast.success("Text converted to Title case", text);
  };

  const handleOnChange = (e) => {
    setText(clearInputText(e.target.value));
  };

  return (
    <div className="flex flex-col justify-items-center border-cyan-800 my-5 mx-3">
      <h2 className="text-center text-4xl mb-2">Enter text </h2>
      <div className="TextForm flex flex-col mx-6 gap-2 px">
        <textarea
          className="border-2 border-black rounded px-2 py-1"
          name="text"
          id="text"
          cols="30"
          rows="22"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="flex justify-center my-2 items-center">
          <button
            className="btn  w-fit text-xl px-3 py-3 rounded-xl text-white
          hover:cursor-pointer hover:bg-violet-900 "
            style={{ backgroundColor: "indigo" }}
            onClick={handleLowerCaseClick}
          >
            Transform To LowerCase
          </button>
          <button
            className="btn w-fit text-xl px-3 py-3 mx-2 rounded-xl text-white
          hover:cursor-pointer hover:bg-violet-900 "
            style={{ backgroundColor: "indigo" }}
            onClick={handleTitleCaseClick}
          >
            Transform To TitleCase
          </button>
        </div>
      </div>
    </div>
  );
}
