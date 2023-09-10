import React from "react";
import "../css/Card.css";

export default function Card() {
  return (
    <>
      <div className="card">
        <h2>Card</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdI1tbVMDkRusbR_sZeDhDHafdgohMN3ia1A&usqp=CAU" alt="Avatar"/>
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>


      <div className="card">
        <h2>Card</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdI1tbVMDkRusbR_sZeDhDHafdgohMN3ia1A&usqp=CAU" alt="Avatar"/>
        <div className="container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </>
  );
}
