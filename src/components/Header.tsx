import React from "react";
import "./styles.css";

interface props {
    themeButtClick: boolean,
    setThemeButtClick:  React.Dispatch<React.SetStateAction<boolean>>
}


const Header = ({themeButtClick, setThemeButtClick}: props) => {
    return (
        <div className="header">
            <h1 className={themeButtClick ? "themeDark--textcolor": ""}>Notes</h1>
            <button className="change--theme--button" onClick={() => setThemeButtClick(!themeButtClick)}>Toggle Mode</button>
        </div>
    )
}


export default Header;