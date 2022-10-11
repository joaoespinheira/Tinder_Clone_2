import React from "react";
import Chat from "./Chat";
import "./ChatView.css";
import Header from "./Header";
import SearchIcon from "@mui/icons-material/Search";

function ChatView() {
  return (
    <div className="chats">
      <Header backButton="/" msgButton="/" />

      <div className="chats__peoples">
        <div className="chats__peoples__searchContainer">
          <div className="chats__peoples__searchContainer__searchBar">
            <SearchIcon />
            <input placeholder="Search for messages" type="text" />
          </div>
        </div>
        <div className="chats__peoples__chatsContainer">
          <Chat
            name="sarah"
            message="hi"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sarah_Lu%C3%ADsa_Lemos_Kubitschek_de_Oliveira.tif/lossless-page1-220px-Sarah_Lu%C3%ADsa_Lemos_Kubitschek_de_Oliveira.tif.png"
            timestamp="35min"
          />
          <Chat
            name="sarah"
            message="hi"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sarah_Lu%C3%ADsa_Lemos_Kubitschek_de_Oliveira.tif/lossless-page1-220px-Sarah_Lu%C3%ADsa_Lemos_Kubitschek_de_Oliveira.tif.png"
            timestamp="35min"
          />
          <Chat
            name="Rui"
            message="hi"
            profilePic="https://yt3.ggpht.com/ytc/AMLnZu9tAiGFE95AsvfZ8VoBtt2NWoYn2WQreSTI8m1h=s900-c-k-c0x00ffffff-no-rj"
            timestamp="35min"
          />
          <Chat
            name="sarah"
            message="hi"
            profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sarah_Lu%C3%ADsa_Lemos_Kubitschek_de_Oliveira.tif/lossless-page1-220px-Sarah_Lu%C3%ADsa_Lemos_Kubitschek_de_Oliveira.tif.png"
            timestamp="35min"
          />

          <Chat
            name="catarina"
            message="hi"
            timestamp="35min"
            profilePic="https://i.pinimg.com/originals/8a/7f/81/8a7f81b0eb56481b188b0780b4922caf.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ChatView;
