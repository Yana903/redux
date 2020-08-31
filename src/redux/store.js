import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 1, message: "It is my first post", likesCount: 11}
      ],
      newPostText: 'Hello, Yana!'
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "How are you" },
        { id: 4, message: "How are you doing" }
      ],
      dialogs: [
        { id: 1, name: "Yana" },
        { id: 2, name: "Maks" },
        { id: 3, name: "Den"  },
        { id: 4, name: "Dimon"}
      ]
    },

    sidebar: {}
  },

  getState() {
    return this._state
  },

  subscribe (observer) {
    this._callSubscriber = (observer)
  },

  _callSubscriber() {
    console.log('state is changed')
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;