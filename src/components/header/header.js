import React from "react";
import "./header.css";
// import netflix from "../header/netflix";
function Nav() {
  return (
    <div>
      <header>
        <nav>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2504/2504929.png"
            alt="netflix"
            className="image"
          />

          <ul>
            <li className="bar">
              <a href="#">HOME</a>
            </li>
            <li className="bar">
              <a href="#">TV SHOWS</a>
            </li>
            <li className="bar">
              <a href="#">MOVIES</a>
            </li>
            <li className="bar">
              <a href="#">LETEST</a>
            </li>
            <li className="bar">
              <a href="#">MYLIST</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Nav;
