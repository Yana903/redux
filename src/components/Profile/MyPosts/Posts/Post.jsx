import React from 'react';
import '../../../../App.css';
import classes from "./Post.module.css"

const Post = (props) => {
  return (
            <div className={classes.item}>
              {props.message}
              <div>
                like: <span>{props.likesCount}</span>
              </div>
            </div>
          );
}

export default Post;
