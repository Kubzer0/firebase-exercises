import React from 'react'
import { database } from '../firebaseConfig'

import NewMessageForm from './NewMessageForm'

const dbRef = database.ref('/chat-messages')

class Chat extends React.Component {

    state = {
        newMessageText: ''
    }

    componentDidMount(){
        dbRef.on(
            'value',
            snapshot => {
                const messages = Object.entries(
                  snapshot.val()
                ).map(entry => ({
                  ...entry[1],
                  key: entry[0]
                }))
        
                this.setState({ messages: messages })
              }
            )
          }


          
    componentWillUnmount(){
        dbRef.off()
    }

    inputHandler = (event) =>
        (
            this.setState({ newMessageText: event.target.value })
        )

    onNewMessageAddClickHandler = () => {
        dbRef.push({
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