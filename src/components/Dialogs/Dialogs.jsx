import React from "react"
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialig + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} id={dialog.id}/>)
    let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onSendMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialigs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.dialogText}>
                    <textarea onChange={onSendMessageChange} value={props.newMessegeBody}></textarea>
                    <button onClick={onSendMessageClick} >Add post</button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Dialogs