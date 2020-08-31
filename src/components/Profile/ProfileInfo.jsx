import React from 'react';
import '../../App.css';
import classes from "./Profile.module.css"

const ProfileInfo = () => {
  return (
      <div>
        <div>
          <img className={classes.image2} src="https://image.shutterstock.com/image-photo/floral-spring-natural-landscape-wild-260nw-1274207287.jpg" />
        </div>
        <div className={classes.description}>
          ava+description
        </div>
      </div>
  );
}

export default ProfileInfo;
