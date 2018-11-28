import React from 'react'
import { database } from '../firebaseConfig'

import NewMessageForm from './NewMessageForm'


class Chat extends React.Component {

    state = {
        newMessageText: ''
    }

    inputHandler = (event) =>
        (
            this.setState({ newMessageText: event.target.value })
        )

    onNewMessageAddClickHandler = () => {
        database.ref('/chat-messages').push({
            text: this.state.newMessageText,
            timestamp: Date.now()
        })
        this.setState({ newMessageText: '' })
    }



    render() {
        return (
            <div>
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    inputHandler={this.inputHandler}
                    onNewMessageAddClickHandler={this.onNewMessageAddClickHandler}
                />
            </div>
        )
    }
}

export default Chat