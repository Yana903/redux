const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: "Yana" },
    { id: 2, name: "Maks" },
    { id: 3, name: "Den"  },
    { id: 4, name: "Dimon"}
  ],
  messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Hello" },
      { id: 3, message: "How are you" },
      { id: 4, message: "How are you doing" }
    ],
    newMessageBody: ""
  };

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return {
            ...state,
            newMessageBody: action.body
          };     

        case SEND_MESSAGE:
          let body = state.newMessegeBody;
          return {
            ...state,
            newMessegeBody: '',
            messages: [...state.messages, {id: 6, message: body}]
          };
    
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
  return (
    {
      type: SEND_MESSAGE
    }
  )
}

export const updateNewMessageBodyCreator = (body) => {
  return (
    {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
    }
  )
}

export default dialogsReducer;