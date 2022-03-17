import React, { useState } from "react";
import { dbService } from "../firebase";

const ChatForm = ({ userObj }) => {
  const [chat, setChat] = useState("");
  const onSubmit = async (event) => {
    if (chat === "") {
      return;
    }
    event.preventDefault();

    const chatObj = {
      text: chat,
      createdAt: Date.now(),
      timeStamp: Date(),
      creatorId: userObj.uid,
      displayName: userObj.displayName,
    };
    await dbService.collection("chats").add(chatObj);
    setChat("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setChat(value);
  };
  return (
    <div class="message-box">
      <form onSubmit={onSubmit} className="factoryForm">
        <div className="factoryInput__container">
          <input
            className="message-input"
            value={chat}
            onChange={onChange}
            type="text"
            placeholder="Type your Message"
            maxLength={250}
          />
          <button type="submit" class="message-submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default ChatForm;
