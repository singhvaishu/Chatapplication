
import React, { useContext } from "react";
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img src={require("../img/cam.png")} alt="" />
                    <img src={require("../img/adduser.png")} alt="" />
                    <img src={require("../img/more.png")} alt="" />

                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;
