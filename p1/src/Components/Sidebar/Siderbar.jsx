import React from "react";
import "./Siderbar.css";
import { SidebarDate } from "./SidebarDate";
import Logout from "./Log out/Logout";

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarDate.map((val, key) => {
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
                <Logout/>
            </ul>

        </div>
    )
}

export default Sidebar;