import React, { useState } from "react";
import Header from "./Header";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Sarah",
      image:
        "https://i.pinimg.com/originals/8a/7f/81/8a7f81b0eb56481b188b0780b4922caf.jpg",
      message: "whats up",
    },
    {
      name: "Sarah",
      image:
        "https://i.pinimg.com/originals/8a/7f/81/8a7f81b0eb56481b188b0780b4922caf.jpg",
      message: "hows it going",
    },
    {
      message: "fine",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <Header backButton="/" msgButton="/" />
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH SARAH ON 23/08/22
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
