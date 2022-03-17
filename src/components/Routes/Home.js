import React, { useState, useEffect } from "react";
import Chat from "../Chat";
import { dbService, storageService } from "../../firebase";
import ChatForm from "../ChatForm";
import ChatImage from "../../temp/Chat.png";
const Home = ({ userObj }) => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    dbService
      .collection("chats")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const chatArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setChats(chatArray);
      });
  }, []);
  return (
    // <div className="container">
    //   <ChatForm userObj={userObj} />
    //   <div className = "Chatbox" >
    //     {chats.map((chat) => (
    //       <Chat
    //         key={chat.id}
    //         chatObj={chat}
    //         isOwner={chat.creatorId === userObj.uid}
    //         userObj = {userObj}
    //       />
    //     ))}
    //   </div>
    // </div>

    <>
      <div class="chat">
        <div class="chat-title">
          <h1>{userObj.displayName}</h1>
          <h2>Default</h2>
          <figure class="avatar">
            <img src={ChatImage} />
          </figure>
        </div>
        <div className = "Scroll">
          <div className="bubbleWrapper">
            {chats.map((chat) => (
              <Chat
                key={chat.id}
                chatObj={chat}
                isOwner={chat.creatorId === userObj.uid}
                userObj={userObj}
              />
            ))}
          </div>
        </div>
        <ChatForm userObj={userObj} />
      </div>
      <div class="bg"></div>
    </>
  );
};
export default Home;
