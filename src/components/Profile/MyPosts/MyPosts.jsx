import React from 'react';
import '../../../../App.css';
import classes from "./MyPosts.module.css"
import Post from "./Posts/Post"

const MyPosts = () => {
  return (
        <div className={classes.posts}>
          My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
            {/* <button>Remove</button> */}
          </div>
            <div className={classes.posts}>
              <Post />
            </div>
          </div> 
  );
}

export default MyPosts;
