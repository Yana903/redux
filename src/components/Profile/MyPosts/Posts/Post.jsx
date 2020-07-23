import React from 'react';
import '../../../../App.css';
import classes from "./Post.module.css"

const Post = () => {
  return (
            <div className={classes.item}>
              post 1
              <div>
              <span>like</span>
            </div>
            </div>
          );
}

export default Post;
