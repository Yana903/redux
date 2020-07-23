import React from 'react';
import '../../App.css';
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/Posts/Post"

const Profile = () => {
  return (
      <div>
        <div>
          <img className={classes.image2} src="https://image.shutterstock.com/image-photo/floral-spring-natural-landscape-wild-260nw-1274207287.jpg" />
        </div>
        <div>
          ava+description
        </div>
       <MyPosts />
      </div>
  );
}

export default Profile;
