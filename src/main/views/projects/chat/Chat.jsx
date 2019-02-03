import React, { Component } from 'react';
import WebSocketInstance from './../../../components/Websocket';
import {InputText} from 'primereact/inputtext';
import CustomButton from '../../../../generic_components/components/CustomButton';
import {socket_url} from '../../../components/static_socket';
import { css } from '@emotion/core';
import { ClimbingBoxLoader } from 'react-spinners';
import './css/chat.css';

const override = css`
    margin: 0 auto;
`;

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: '',
			messages: '',
			connected: false,
		}

		WebSocketInstance.connect(socket_url + "chat");
		this.waitForSocketConnection(() => {
			this.setState({connected: true});
			WebSocketInstance.addCallbacks( this.addMessage.bind(this))
		});
	}

	componentDidMount() {
		if(this.state.connected) {
			this.scrollToBottom();
		}
	}
	
	componentDidUpdate() {
		if(this.state.connected) {
			this.scrollToBottom();
		}
	}

	componentWillUnmount() {
		WebSocketInstance.disconnect();
		console.log("Disconnected");
	}
	
	scrollToBottom() {
		const chat = this.messagesEnd;
		const scrollHeight = chat.scrollHeight;
		const height = chat.clientHeight;
		const maxScrollTop = scrollHeight - height;
		chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
	}
	
	addMessage(message) {
		this.setState({ messages: [...this.state.messages, message]});
	}
	
	sendMessageHandler(e, message) {
		const messageObject = {
		  	from: this.props.currentUser,
		  	text: message
		};
		WebSocketInstance.newChatMessage(messageObject);
		this.setState({
		  	message: ''
		})
		e.preventDefault();
	}
	
	renderMessages(messages) {
		const currentUser = this.props.currentUser;
		return messages.map((message, i) => <li key={message.content} className={message.author === currentUser ? 'me' : 'him'}> <h4 className='author'>{ message.author } </h4><p>{ message.content }</p></li>);
	}

	waitForSocketConnection(callback) {
		const component = this;
		setTimeout(
		  function () {
			// Check if websocket state is OPEN
			if (WebSocketInstance.state() === 1) {
			  	console.log("Connection is made")
			  	callback();
			  	return;
			} else {
			  	console.log("Connecting...")
			  	component.waitForSocketConnection(callback);
			}
		}, 100); // wait 100 milisecond for the connection...
	}

	render() { 
		if(this.state.connected) {
			const messages = this.state.messages;
			const currentUser = this.props.currentUser;
			return (  
				<div className='chat'>
					<div className='container'>
						<h1>Chatting as {currentUser} </h1>
						<ul ref={(el) => { this.messagesEnd = el; }}>
						{ 
							messages && 
							this.renderMessages(messages) 
						}
						</ul>
					</div>
					<div className='container message-form'>
						<span>
							<InputText 
								value={this.state.message}
								onChange={(e) => this.setState({message: e.target.value})} 
							/>
							<CustomButton 
								icon="paper-plane" 
								iconLocation="center" 
								onClick={(e) => this.sendMessageHandler(e, this.state.message)}
							/>
						</span>
					</div>
				</div>
			);
		}
		else {
			return (
				<div>
					<ClimbingBoxLoader 
						css={override}
						color={'#ffffff'}
					/>
					Connecting...
				</div>
			)
		}
	}
}
 
export default Chat;