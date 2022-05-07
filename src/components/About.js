import { React, useState } from "react";

export default function About() {
  const [text, setText] = useState("Enter your Sugestion here");
  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="w-full flex items-center justify-center my-10">
      <div className="border-2 border-black mx-3 my-3  py-10 px-10 rounded ">
        <h1 className="text-2xl font-bold text-center text-indigo-900">
          Submit Your Sugestions
        </h1>
        <form action="#" className="flex flex-col items-center text-xl py-4">
          <div className="my-3">
            <label className="w-20 inline-block" htmlFor="name">
              Name :
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 border-black rounded"
            />
          </div>
          <div className="my-3">
            <label className="w-20 inline-block" htmlFor="email">
              Email :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-black rounded"
            />
          </div>
          <div className="my-3">
            <textarea
              name="sugestions"
              id="sugestion"
              cols="30"
              rows="12"
              className="border-2 border-black rounded px-2 py-2"
              value={text}
              onChange={onChangeHandler}
            >
            </textarea>
          </div>
          <div>
            <input
              className="btn py-2 px-2 rounded-xl hover:cursor-pointer "
              style={{ backgroundColor: "indigo", color: "white" }}
              type="submit"
                value='Submit your Sugestion'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
