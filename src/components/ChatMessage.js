import React, { Component } from 'react';

class ChatMessage extends Component {

    constructor(props) {
        super(props);
    }

    generateClasses = () => {
        if (this.props.message.from === 'bot') {
            return 'bot-message';
        } else if (this.props.message.from === 'bot-auto') {
            return 'bot-master-message';
        }
        else {
            return 'user-message';
        }
    }
    cl = () => {
        console.log("cl");
    }

    render() {
        return (
            <div className={this.generateClasses()}>
                <div className="message" onClick={this.cl} >{this.props.message.message}</div>
            </div>
        );
    }
}

export default ChatMessage;


<ChatMessage key={i} message={message}></ChatMessage>
//http://localhost:3001/response?inputText="coffee prepared "&questionId=0&userId=2&ipAddress=2342
// $.get("http://localhost:3001/response/" + userMessage + "/0/1", function (data, status, xhr) {