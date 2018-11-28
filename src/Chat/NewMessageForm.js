import React from 'react'


const NewMessageForm = (props) => (

    <div>
         <input
                    type='text'
                    value={props.newMessageText}
                    onChange={props.inputHandler}
                />
                <button
                    onClick={props.onNewMessageAddClickHandler}
                >
                    Add Message!
                </button>
    </div>

)

export default NewMessageForm