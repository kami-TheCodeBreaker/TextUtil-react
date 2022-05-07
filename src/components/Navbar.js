import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
// import { a} from "react-router-dom";
export default function Navbar(props) {
  const [text, setText] = useState("Enable Dark Mode");
  const [style, setstyle] = useState({
    color: "white",
    backgroundColor: "indigo",
  });
  const DarkModeHandle = () => {
    if (text === "Enable Dark Mode") {
      document.querySelector("#text").style.backgroundColor = "black";
      document.querySelector("#text").style.color = "white";
      document.querySelectorAll(".btn").forEach((element) => {
        element.style.backgroundColor = "black";
      });
      setstyle({
        backgroundColor: "black",
        color: "white",
      });
      setText("Enable Light Mode");
    } else {
      document.querySelector("#text").style.backgroundColor = "white";
      document.querySelector("#text").style.color = "black";
      document.querySelectorAll(".btn").forEach((element) => {
        element.style.backgroundColor = "indigo";
      });
      setstyle({
        color: "white",
        backgroundColor: "indigo",
      });
      setText("Enable Dark Mode");
    }
  };
  return (
    <div className="h-20 flex max-w-full px-3 " style={style}>
      <div className="flex justify-between items-center w-full">
        <nav>
          <a href='/'>
          <HomeIcon className="fill-white stroke-black h-12" />
          <p className="text-white text-md ">{props.title}</p>
          </a>
        </nav>
        <ul className="flex gap-6 items-center justify-center text-3xl font-semibold text-white ">
          <li className="hover:cursor-pointer hover:text-slate-300">
            <a href="/">Home</a>
          </li>
          <li className="hover:cursor-pointer  hover:text-slate-300">
            <a href="/">Services</a>
          </li>
          <li className="hover:cursor-pointer  hover:text-slate-300">
            <a href="/">Contact</a>
          </li>
          <li className="hover:cursor-pointer  hover:text-slate-300">
            <a href="/about">About</a>
          </li>
        </ul>
        <div className="">
          <button
            style={style}
            className="py-2 font-bold  text-xl px-5 hover:bg-black hover:text-black rounded-lg bg-violet-600 border-2"
            onClick={DarkModeHandle}
          >
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = { title: "set title here" };
