import React from 'react'
import "./Logout.css";
import { LogoutDate } from './LogoutDate';


function Logout() {
  return (
    <div className="Logout">
      <ul className="LogoutList">
        {LogoutDate.map((val, key) => {
          return (
            <li key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>

    </div>
  )
}

export default Logout;