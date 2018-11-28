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
                    value={this.state.newMessageText}
                    inputHandler={this.inputHandler}
                    onNewMessageAddClickHandler={this.onNewMessageAddClickHandler}
                />
            </div>
        )
    }
}

export default Chat