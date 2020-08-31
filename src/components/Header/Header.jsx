import React from "react";
import "../../App.css";
import classes from "./Header.module.css"

const Header = () => {
    return (
        <header className={classes.header}>
        <div className={classes.imageBlock}>
          <img alt="myImage" src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/ee/91/eb/ee91ebc6-f7e6-2fa2-356e-d5930900691b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"/>
        </div>
      </header>
    )
}

export default Header;