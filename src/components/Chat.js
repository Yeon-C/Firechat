import React, { useState } from "react";
import { dbService, storageService } from "../firebase";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Chat = ({ chatObj, isOwner, userObj }) => {
  const [editing, setEditing] = useState(false);
  const [newChat, setNewChat] = useState(chatObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this chat?");
    if (ok) {
      await dbService.doc(`chats/${chatObj.id}`).delete();
      await storageService.refFromURL(chatObj.attachmentUrl).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`chats/${chatObj.id}`).update({
      text: newChat,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewChat(value);
  };
  if (userObj.displayName == chatObj.displayName) {
    return (
      <div className="inlineContainer own">
        {editing ? (
          <div className="ownBubble own">
            <form onSubmit={onSubmit} className="container chatEdit">
              <input
                type="text"
                placeholder="Edit your Message"
                value={newChat}
                required
                autoFocus
                onChange={onChange}
                className="formInput"
              />
              <input type="submit" value="Update Message" className="formBtn" />
            </form>
            <span onClick={toggleEditing} className="formBtn cancelBtn">
              Cancel
            </span>
          </div>
        ) : (
          <div className="ownBubble own">
            <div className="User">{chatObj.displayName}</div>
            <div className="Text">{chatObj.text}</div>
            <p className="Time">{chatObj.timeStamp}</p>
            {/* {isOwner && (
              <div class="chat__actions">
                <span onClick={onDeleteClick}>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span onClick={toggleEditing}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </span>
              </div>
            )} */}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div class="inlineContainer">
        <div className="otherBubble other">
          <div className="User">{chatObj.displayName}</div>
          <div className="Text">{chatObj.text}</div>
          <p className="Time">{chatObj.timeStamp}</p>
        </div>
      </div>
    );
  }
};

export default Chat;
