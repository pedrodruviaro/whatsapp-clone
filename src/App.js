import React, { useState } from "react";
import './styles/app.css'

// icons
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatlistItem from "./components/ChatlistItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

function App() {

	const [chatlist, setChatlist] = useState([
		{chatId: 1, title: 'Fulano de Tal', avatar: 'https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png' }, 
		{chatId: 2, title: 'Fulano de Tal', avatar: 'https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png' }, 
		{chatId: 3, title: 'Fulano de Tal', avatar: 'https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png' }, 
		{chatId: 4, title: 'Fulano de Tal', avatar: 'https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png' }, 
	])

	const [activeChat, setActiveChat] = useState({})

    return (
        <div className="app-window">
            <div className="sidebar">
				<header>
					<img className="header--avatar" src="https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png" alt="Profile" />
					<div className="header--buttons">
						<div className="header--btn">
							<DonutLargeIcon style={{color: '#919191'}} />
						</div>
						<div className="header--btn">
							<ChatIcon style={{color: '#919191'}} />
						</div>
						<div className="header--btn">
							<MoreVertIcon style={{color: '#919191'}} />
						</div>
					</div>
				</header>

				<div className="search">
					<div className="search--input">
						<SearchIcon fontSize="small" style={{color: '#919191'}} />
						<input type="search" placeholder="Procurar ou começar uma nova conversa" />
					</div>
				</div>

				<div className="chatlist">
					{chatlist.map((chat, i) => (
						<ChatlistItem 
							key={i}
							data={chat}
							onClick={() => setActiveChat(chatlist[i])}  //prop, nao evento 
							active={activeChat.chatId === chatlist[i].chatId}
						/>
					))}
				</div>
			</div>

            <div className="content-area">
				{activeChat.chatId !== undefined && 
					<ChatWindow />
				}
				{activeChat.chatId === undefined && 
					<ChatIntro />
				}
			</div>
        </div>
    );
}

export default App;
