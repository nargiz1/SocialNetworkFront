import 'bootstrap/dist/css/bootstrap.min.css';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import { useEffect, useState } from 'react';
import "./index.css";
import Layout from "../../components/Layout";
import { UserChats } from './components/UserChats';
import { MessageForm } from './components/MessageForm';
import { Chat } from './components/Chat';
import { ChatNav } from './components/ChatNav';
import { useDispatch } from 'react-redux';
import * as messageService from "../../services/MessageService";
import { setMessage } from "../../redux/Message/MessageSlice"
import { useSelector } from "react-redux";
import * as chatService from "../../services/ChatSevice";
import { setPrivateChats, setPrivateChat } from "../../redux/Chat/PrivateChatSlice";
import * as UserService from "../../services/UserService";
import { setCurrentUser } from '../../redux/User/UserSlice';
import * as chatServices from "../../services/ChatSevice";
import { setGroupChats, setGroupChat, setGroupChatMembers } from '../../redux/Chat/GroupChatSlice';
import { ChatBubbleOutlineTwoTone } from '@mui/icons-material';



const Index = () => {

  const [connection, setConnection] = useState();
  const [messages1, setMessages1] = useState([]);
  const [users, setUsers] = useState([]);

  const [chat, setChat] = useState({});
  const [group, setGroup] = useState({});

  const user = useSelector((state) => state.user.currentUser);
  const privateChat = useSelector((state) => state.privateChat.Chat);
  const groupChat = useSelector((state) => state.groupChat.group);

  console.log(users);

  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const user = await UserService.getUserService();
      const privateChats = await chatService.getUserChats(user);
      const groups = await chatService.getUserGroups(user);
      dispatch(setCurrentUser(user));
      dispatch(setPrivateChats(privateChats));
      dispatch(setGroupChats(groups));
    })();
  }, [groupChat, dispatch])

  useEffect(() => {
    (async function () {
      const privateChat = await chatService.getChat(chat.id);
      const msg = {
        userId: user.id,
        privateChatId: chat.id,
      }
      const resp = await messageService.MessagesAreRead(msg);
      const messages = await messageService.getChatMessages(privateChat.id);
      dispatch(setPrivateChat(privateChat));
      dispatch(setMessage(messages));
    })();
  }, [chat, dispatch]);

  useEffect(() => {
    (async function () {
      const groupChat = await chatService.getGroup(group.id);
      const groupChatMembers = await chatService.getGroupMembers(group.id);
      const msg = {
        userId: user.id,
        groupChatId: group.id,
      }
      const resp = await messageService.MessagesAreRead(msg);
      const messages = await messageService.getGroupMessages(groupChat);
      dispatch(setGroupChat(groupChat));
      dispatch(setGroupChatMembers(groupChatMembers));
      dispatch(setMessage(messages));
    })();
  }, [group, dispatch]);



  const joinRoom = async (user, room) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://localhost:39524/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      })

      connection.on("ReceiveMessage", (message) => {
        var messageObject = JSON.parse(message);
        setMessages1(messages1 => [...messages1, messageObject]);
      });

      connection.onclose(e => {
        setConnection();
        setMessages1([]);
      })

      await connection.start();
      await connection.invoke("JoinRoom", { user, room });
      setConnection(connection);
      
    } catch (e) {
      console.log(e);
    }
  }

  const closeConnection = async () => {
    try {
      await connection.stop()
    } catch (e) {
      console.log(e);
    }
  }

  const sendMessage = async (message) => {
    try {
      var messageString = JSON.stringify(message)
      await connection.invoke("SendMessage", messageString);
    } catch (e) {
      console.log(e);
    }
  }

  const deleteChat = (chatId) => {
    chatServices.DeleteChat(chatId);
    window.location.reload();
  }
  const deleteGroup = async (groupId) => {
    chatServices.DeleteGroup(groupId);
    const member = {
      userId: user.id,
      groupId: groupId
    }
    await chatServices.DeleteGroupMember(member);
    window.location.reload();
  }

  return (
    <Layout showIcon={false}>
      <div className="chat-content">
        <div className="row g-0">
          <UserChats joinRoom={joinRoom} closeConnection={closeConnection} setChat={setChat} setGroup={setGroup} />
          <div className="col-md-9">
            <div className="thread border-start">
              {(privateChat || groupChat) && (
                <>
                  <ChatNav deleteChat={deleteChat} deleteGroup={deleteGroup} group={group}/>
                  <Chat messages={messages1} usersInRoom={users}/>
                  <MessageForm sendMessage={sendMessage} usersInRoom={users}/>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
