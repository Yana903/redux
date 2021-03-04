import React from 'react';
import '../../App.css';
import classes from "./Profile.module.css"
// import Preloader from ""

const ProfileInfo = (props) => {
  // if (!props.profile) {
  //   return <Preloader />
  // }
  return (
      <div>
        <div>
          <img className={classes.image2} src="https://image.shutterstock.com/image-photo/floral-spring-natural-landscape-wild-260nw-1274207287.jpg" />
        </div>
        <div className={classes.description}>
          <img src={props.profile.photos.large} />
          ava+description
        </div>
      </div>
  );
}

export default ProfileInfo;
