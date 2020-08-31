import React from 'react';
import '../../../App.css';
import classes from "./MyPosts.module.css"
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"

const MyPosts = (props) => {
  let postsElements =
      props.posts.map( (post) => {
        return (
          <Post message={post.message} likesCount={post.likesCount}/> 
        );
      })

  let newPostElement = React.createRef();
 
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
        <div className={classes.myPosts}>
          <h3>My posts</h3>
          <div>
            <div>
              <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            </div>
            <div>
              <button onClick={ onAddPost }>Add post</button>
            </div>
          </div>
            <div className={classes.posts}>
              {postsElements}
            </div>
          </div> 
  );
}

export default MyPosts;
