"use client"

import React from "react";
import useDarkMode from "use-dark-mode";
import Brightness3Icon from "@mui/icons-material/Brightness3"; // Moon icon
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sunlight icon
import Switch from "react-switch";

// Styles
import style from "./DarkMode.module.css"


const DarkModeToggle = () => {
    const darkMode = useDarkMode(true);
    return (
        <Switch 
            checked={darkMode.value}
            onChange={darkMode.toggle}
            width={60}
            
            uncheckedIcon={
                <div>
                    <WbSunnyIcon 
                        style={{
                                position: "relative", 
                                top: 2,
                                left: 4,
                            }}
                        scale={0.2}
                    />
                </div>
            }
            checkedIcon={
                <div>
                    <Brightness3Icon style={{
                        position: "relative", 
                        top: 2,  
                        transform: 'rotate(180deg)'
                    }}/>
                </div>
            }
            className={style.flex}
        />

    )
}

export default DarkModeToggle;