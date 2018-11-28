import React from 'react'
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

    }


    render() {
        return (
            <div>
                <NewMessageForm 
                value = {this.state.newMessageText}
                />
            </div>
        )
    }
}

export default Chat