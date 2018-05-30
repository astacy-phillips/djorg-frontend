import React, { Component } from 'react'

class Note extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h3>{this.props.note.title}</h3>
                        <p>{this.props.note.content}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Note