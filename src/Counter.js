import React from 'react'

class Counter extends React.Component {
    state = {
        number: 0
    }

    incHandler = () => {
        this.setState({ number: this.state.number + 1 })
    }

    decHandler = () => {
        this.setState({ number: this.state.number - 1 })
    }

    saveToFirebase = () =>{
        fetch('https://poniedzialek-5c108.firebaseio.com/counter.json',
        {
            method : 'PUT',
            body: JSON.stringify(this.state.number)
        }
        )
    }

    readFromFirebase=()=>{
        fetch('https://poniedzialek-5c108.firebaseio.com/counter.json')
        .then(response=> response.json())
        .then(data => this.setState({number: data}))
    }

    componentDidMount(){
        this.readFromFirebase()
    }

    componentDidUpdate(){
        this.saveToFirebase()
    }


        render() {
    return (
        <div>
            <h1>{this.state.number}</h1>
            <button
                onClick={this.incHandler}
            >
                +
            </button>
            <button
                onClick={this.decHandler}
            >
                -
            </button>


        </div>
    )
}
}

export default Counter