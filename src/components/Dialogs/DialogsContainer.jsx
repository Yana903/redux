import React from "react"
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs"
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
             { store => { 
                 let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
            
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={store.getState().dialogsPage}/>
                }   
            }
        
        </StoreContext.Consumer>
}

export default DialogsContainer