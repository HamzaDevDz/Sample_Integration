import React from 'react'
import "./Main.css"
import Side from "./side/Side";
import View from "./view/View";

function Main() {
    return (
        <div className="main">
            <Side />
            <View />
        </div>
    );
}

export default Main;